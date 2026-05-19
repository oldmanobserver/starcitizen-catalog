// functions/api/admin/feedback/[id].js
// GET    /api/admin/feedback/:id            -> full feedback record + snapshot
// PATCH  /api/admin/feedback/:id            -> close / reopen with notes
//
// PATCH body:
//   { status: "closed", close_notes: "..." }     // close
//   { status: "open" }                            // reopen (clears close_notes)

import { requireAdmin } from "../../../lib/admin.js";
import { json, error, checkOrigin } from "../../../lib/http.js";

const MAX_CLOSE_NOTES = 4000;

export async function onRequestGet({ request, env, params }) {
  const { response } = await requireAdmin(request, env);
  if (response) return response;

  const row = await env.DB.prepare(
    `SELECT f.*, u.login, u.display_name, u.profile_image_url,
            cu.login AS closed_by_login, cu.display_name AS closed_by_display_name
       FROM feedback f
       LEFT JOIN users u  ON u.id  = f.user_id
       LEFT JOIN users cu ON cu.id = f.closed_by
      WHERE f.id = ?`
  )
    .bind(params.id)
    .first();
  if (!row) return error(404, "not_found");

  let snapshot = null;
  if (row.snapshot) {
    try {
      snapshot = JSON.parse(row.snapshot);
    } catch {
      snapshot = null;
    }
  }

  return json({
    feedback: {
      id: row.id,
      kind: row.kind,
      title: row.title,
      description: row.description,
      status: row.status,
      conversation_id: row.conversation_id,
      message_id: row.message_id,
      close_notes: row.close_notes,
      closed_at: row.closed_at,
      created_at: row.created_at,
      snapshot,
      user: {
        id: row.user_id,
        login: row.login,
        display_name: row.display_name,
        profile_image_url: row.profile_image_url,
      },
      closed_by: row.closed_by
        ? {
            id: row.closed_by,
            login: row.closed_by_login,
            display_name: row.closed_by_display_name,
          }
        : null,
    },
  });
}

export async function onRequestPatch({ request, env, params }) {
  const guard = checkOrigin(request, env);
  if (guard) return guard;
  const { session, response } = await requireAdmin(request, env);
  if (response) return response;

  let body;
  try {
    body = await request.json();
  } catch {
    return error(400, "invalid_json");
  }

  const next = String(body.status || "").toLowerCase();
  if (next !== "open" && next !== "closed") return error(400, "invalid_status");

  if (next === "closed") {
    const notes = String(body.close_notes || "").trim().slice(0, MAX_CLOSE_NOTES);
    const res = await env.DB.prepare(
      `UPDATE feedback
          SET status = 'closed',
              close_notes = ?,
              closed_at = ?,
              closed_by = ?
        WHERE id = ?`
    )
      .bind(notes || null, Math.floor(Date.now() / 1000), session.user_id, params.id)
      .run();
    if (!res.meta || !res.meta.changes) return error(404, "not_found");
  } else {
    const res = await env.DB.prepare(
      `UPDATE feedback
          SET status = 'open',
              close_notes = NULL,
              closed_at = NULL,
              closed_by = NULL
        WHERE id = ?`
    )
      .bind(params.id)
      .run();
    if (!res.meta || !res.meta.changes) return error(404, "not_found");
  }

  return json({ ok: true });
}
