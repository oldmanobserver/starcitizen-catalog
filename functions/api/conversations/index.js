// functions/api/conversations/index.js
// GET  /api/conversations         -> list current user's conversations
// POST /api/conversations         -> create a new empty conversation

import { requireSession } from "../../lib/session.js";
import { json, error, checkOrigin } from "../../lib/http.js";
import {
  listConversations,
  searchConversations,
  createConversation,
} from "../../lib/db.js";
import { randomToken } from "../../lib/crypto.js";

export async function onRequestGet({ request, env }) {
  const { session, response } = await requireSession(request, env);
  if (response) return response;
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  if (q) {
    const items = await searchConversations(env, session.user_id, q, 50);
    return json({ conversations: items, query: q });
  }
  const items = await listConversations(env, session.user_id);
  return json({ conversations: items });
}

export async function onRequestPost({ request, env }) {
  const guard = checkOrigin(request, env);
  if (guard) return guard;
  const { session, response } = await requireSession(request, env);
  if (response) return response;
  let body = {};
  try {
    body = await request.json();
  } catch {
    /* allow empty body */
  }
  const id = "c_" + randomToken(12);
  const conv = await createConversation(env, session.user_id, id, body.title);
  return json({ conversation: conv }, { status: 201 });
}
