// functions/api/auth/logout.js
// POST /api/auth/logout -> destroy the session and redirect to home.

import { destroySession } from "../../lib/session.js";
import { audit } from "../../lib/db.js";
import { getSession } from "../../lib/session.js";

export async function onRequestPost({ request, env }) {
  const sess = await getSession(request, env);
  const setCookie = await destroySession(request, env);
  if (sess) await audit(env, sess.user_id, "logout", null);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": setCookie,
    },
  });
}

// Allow GET for convenience (e.g. clicking a logout link)
export async function onRequestGet(ctx) {
  const res = await onRequestPost(ctx);
  // turn into redirect for browser nav
  return new Response(null, {
    status: 302,
    headers: { Location: "/", "Set-Cookie": res.headers.get("Set-Cookie") },
  });
}
