// functions/api/feedback.js
// POST /api/feedback  — submit a bug report or suggestion
// GET  /api/feedback  — list the signed-in user's own submissions
//
// Body for POST:
//   {
//     kind: "bug" | "suggestion",
//     title: string,
//     description: string,
//     include_search: boolean,
//     conversation_id?: string,
//     message_id?: string,            // assistant turn the feedback is about
//     snapshot?: {                    // captured client-side when include_search is true
//       user_message, assistant_message, citations,
//       provider, model, conversation_title
//     }
//   }

import { requireSession } from "../lib/session.js";
import { json, error, checkOrigin } from "../lib/http.js";
import { randomToken } from "../lib/crypto.js";

const KINDS = new Set(["bug", "suggestion"]);
const MAX_TITLE = 200;
const MAX_DESCRIPTION = 8000;
const MAX_SNAPSHOT_BYTES = 200 * 1024; // 200 KB

export async function onRequestPost({ request, env }) {
  const guard = checkOrigin(request, env);
  if (guard) return guard;
  const { session, response } = await requireSession(request, env);
  if (response) return response;

  let body;
  try {
    body = await request.json();
  } catch {
    return error(400, "invalid_json");
  }

  const kind = String(body.kind || "bug").toLowerCase();
  if (!KINDS.has(kind)) return error(400, "invalid_kind");

  const title = String(body.title || "").trim().slice(0, MAX_TITLE);
  const description = String(body.description || "").trim().slice(0, MAX_DESCRIPTION);
  if (!title) return error(400, "missing_title");
  if (!description) return error(400, "missing_description");

  const includeSearch = !!body.include_search;
  const conversationId = body.conversation_id ? String(body.conversation_id).slice(0, 80) : null;
  const messageId = body.message_id ? String(body.message_id).slice(0, 80) : null;

  let snapshotJson = null;
  if (includeSearch && body.snapshot && typeof body.snapshot === "object") {
    // Server-side sanitize: keep a known shape; truncate large fields.
    const snap = sanitizeSnapshot(body.snapshot);
    let s = JSON.stringify(snap);
    if (s.length > MAX_SNAPSHOT_BYTES) {
      // Oversize: drop the oldest turns (keep the most recent context) until
      // we fit within the cap. If a single turn is still too big, hard-cap
      // the JSON string at MAX_SNAPSHOT_BYTES as a last resort.
      while (
        Array.isArray(snap.messages) &&
        snap.messages.length > 1 &&
        s.length > MAX_SNAPSHOT_BYTES
      ) {
        snap.messages.shift();
        s = JSON.stringify(snap);
      }
      snapshotJson = s.length > MAX_SNAPSHOT_BYTES ? s.slice(0, MAX_SNAPSHOT_BYTES) : s;
    } else {
      snapshotJson = s;
    }
  }

  const id = "f_" + randomToken(12);
  const now = Math.floor(Date.now() / 1000);

  await env.DB.prepare(
    `INSERT INTO feedback
       (id, user_id, kind, title, description, conversation_id, message_id,
        snapshot, status, close_notes, closed_at, closed_by, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'open', NULL, NULL, NULL, ?)`
  )
    .bind(
      id,
      session.user_id,
      kind,
      title,
      description,
      conversationId,
      messageId,
      snapshotJson,
      now
    )
    .run();

  return json({ ok: true, id });
}

export async function onRequestGet({ request, env }) {
  const { session, response } = await requireSession(request, env);
  if (response) return response;

  const { results } = await env.DB.prepare(
    `SELECT id, kind, title, status, closed_at, created_at
       FROM feedback
      WHERE user_id = ?
      ORDER BY created_at DESC
      LIMIT 200`
  )
    .bind(session.user_id)
    .all();

  return json({ feedback: results || [] });
}

function sanitizeSnapshot(snap) {
  const out = {};
  if (typeof snap.provider === "string") out.provider = snap.provider.slice(0, 40);
  if (typeof snap.model === "string") out.model = snap.model.slice(0, 80);
  if (typeof snap.conversation_title === "string") {
    out.conversation_title = snap.conversation_title.slice(0, 200);
  }
  if (Array.isArray(snap.messages)) {
    out.messages = snap.messages.slice(0, 200).map((m) => ({
      id: typeof m.id === "string" ? m.id.slice(0, 80) : null,
      role: m.role === "assistant" || m.role === "system" || m.role === "user"
        ? m.role
        : "user",
      content: typeof m.content === "string" ? m.content.slice(0, 40000) : "",
      citations: Array.isArray(m.citations) ? sanitizeCitations(m.citations) : [],
    }));
  }
  return out;
}

function sanitizeCitations(citations) {
  return citations.slice(0, 40).map((c) => ({
    ref: Number(c.ref) || null,
    url: typeof c.url === "string" ? c.url.slice(0, 1024) : null,
    title: typeof c.title === "string" ? c.title.slice(0, 300) : null,
    source_type: typeof c.source_type === "string" ? c.source_type.slice(0, 40) : null,
    url_kind: typeof c.url_kind === "string" ? c.url_kind.slice(0, 40) : null,
    patch_version: typeof c.patch_version === "string" ? c.patch_version.slice(0, 80) : null,
    ship: typeof c.ship === "string" ? c.ship.slice(0, 200) : null,
    timestamp_seconds: Number.isFinite(c.timestamp_seconds) ? c.timestamp_seconds : null,
    score: Number.isFinite(c.score) ? c.score : null,
  }));
}
