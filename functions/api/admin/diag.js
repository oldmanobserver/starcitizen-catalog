// functions/api/admin/diag.js
//
// Admin-only diagnostic endpoint. Given a query string, runs the retrieval
// pipeline and returns what it found WITHOUT calling any LLM. Useful for
// inspecting why a particular chat response went sideways.
//
// GET  /api/admin/diag?q=...    -> JSON summary
// POST /api/admin/diag          -> { q: "..." } same thing

import { requireAdmin } from "../../lib/admin.js";
import { json, error } from "../../lib/http.js";
import { classifyIntent } from "../../lib/catalog.js";
import { retrieveSmart, renderContext } from "../../lib/rag.js";

export async function onRequestGet({ request, env }) {
  const { response } = await requireAdmin(request, env);
  if (response) return response;

  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  if (!q) return error(400, "missing_q");
  return runDiag(env, q);
}

export async function onRequestPost({ request, env }) {
  const { response } = await requireAdmin(request, env);
  if (response) return response;
  let body;
  try { body = await request.json(); } catch { return error(400, "invalid_json"); }
  const q = String(body && body.q || "").trim();
  if (!q) return error(400, "missing_q");
  return runDiag(env, q);
}

async function runDiag(env, q) {
  const intent = classifyIntent(q);
  let smart = null;
  let err = null;
  try {
    smart = await retrieveSmart(env, q);
  } catch (e) {
    err = String(e && e.message || e).slice(0, 500);
  }

  let citations = [];
  if (smart) {
    citations = renderContext(smart.matches).citations;
  }

  // Compact view: each match becomes {score, source_type, title, video_id, ts, patch}.
  const matches = (smart && smart.matches ? smart.matches : []).map((m, i) => {
    const md = m.metadata || {};
    return {
      rank: i + 1,
      score: m.score,
      id: m.id,
      source_type: md.source_type,
      title: md.title,
      video_id: md.video_id || null,
      timestamp_seconds: md.timestamp_seconds || null,
      patch_version: md.patch_version || null,
      channel: md.channel || null,
      text_preview: md.text ? String(md.text).slice(0, 200) : null,
    };
  });

  return json({
    query: q,
    intent,
    focus_docs: smart ? smart.focusDocs : [],
    match_count: matches.length,
    matches: matches.slice(0, 30),
    citations: citations.slice(0, 30),
    error: err,
  });
}
