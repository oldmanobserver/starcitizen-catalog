// functions/api/conversations/[id].js
// GET    /api/conversations/:id            -> conversation + messages
// PATCH  /api/conversations/:id            -> rename / pin / unpin
// DELETE /api/conversations/:id            -> delete the conversation

import { requireSession } from "../../lib/session.js";
import { json, error, checkOrigin } from "../../lib/http.js";
import {
  getConversation,
  updateConversation,
  deleteConversation,
  listMessages,
} from "../../lib/db.js";

export async function onRequestGet({ request, env, params }) {
  const { session, response } = await requireSession(request, env);
  if (response) return response;
  const conv = await getConversation(env, session.user_id, params.id);
  if (!conv) return error(404, "not_found");
  const messages = await listMessages(env, conv.id);
  return json({ conversation: conv, messages });
}

export async function onRequestPatch({ request, env, params }) {
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
  const patch = {};
  if (typeof body.title === "string") patch.title = body.title.slice(0, 200);
  if (typeof body.pinned === "boolean") patch.pinned = body.pinned ? 1 : 0;
  if (typeof body.provider === "string") patch.provider = body.provider.slice(0, 40);
  if (typeof body.model === "string") patch.model = body.model.slice(0, 80);
  if (!Object.keys(patch).length) return error(400, "nothing_to_update");
  const n = await updateConversation(env, session.user_id, params.id, patch);
  if (!n) return error(404, "not_found");
  return json({ ok: true });
}

export async function onRequestDelete({ request, env, params }) {
  const guard = checkOrigin(request, env);
  if (guard) return guard;
  const { session, response } = await requireSession(request, env);
  if (response) return response;
  const n = await deleteConversation(env, session.user_id, params.id);
  if (!n) return error(404, "not_found");
  return json({ ok: true });
}
