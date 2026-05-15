// functions/api/account/delete.js
// POST /api/account/delete
//
// Deletes the signed-in user's account and all associated data.
// Requires the user to echo their Twitch login in `confirmation` to avoid accidents.
//
// Body:  { confirmation: "twitch_login" }
//
// Side-effects:
//   - D1: deletes the users row (cascades conversations + messages)
//   - KV (API_KEYS): deletes every "key:<userId>:*" and "keymeta:<userId>:*"
//   - KV (SESSIONS): deletes the active session
//   - KV (RATELIMIT): leaves counters to expire naturally (short TTL)
//   - audit_log row inserted with action "account_delete" (no FK to users)

import { requireSession, destroySession } from "../../lib/session.js";
import { json, error, checkOrigin } from "../../lib/http.js";
import { getUser, audit } from "../../lib/db.js";

async function deleteKvPrefix(ns, prefix) {
  let cursor = undefined;
  let deleted = 0;
  do {
    const page = await ns.list({ prefix, cursor });
    for (const k of page.keys) {
      await ns.delete(k.name);
      deleted++;
    }
    cursor = page.cursor;
    if (page.list_complete) break;
  } while (cursor);
  return deleted;
}

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
  const confirmation = String((body && body.confirmation) || "").trim().toLowerCase();
  if (!confirmation) return error(400, "missing_confirmation");

  const user = await getUser(env, session.user_id);
  if (!user) return error(404, "user_not_found");

  if (confirmation !== String(user.login || "").toLowerCase()) {
    return error(400, "confirmation_mismatch");
  }

  // 1. Encrypted API keys + metadata.
  await deleteKvPrefix(env.API_KEYS, `key:${session.user_id}:`);
  await deleteKvPrefix(env.API_KEYS, `keymeta:${session.user_id}:`);

  // 2. D1 user row — schema has ON DELETE CASCADE for conversations + messages.
  await env.DB.prepare(`DELETE FROM users WHERE id = ?`).bind(session.user_id).run();

  // 3. Audit before destroying the session (audit_log has no FK to users so the row survives).
  await audit(env, session.user_id, "account_delete", { login: user.login });

  // 4. Tear down the session cookie.
  const setCookie = await destroySession(request, env);

  return json({ ok: true }, { headers: { "Set-Cookie": setCookie } });
}
