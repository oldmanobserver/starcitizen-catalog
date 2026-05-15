// functions/api/auth/login.js
// GET /api/auth/login -> redirect to Twitch authorize URL.

import { buildAuthorizeUrl } from "../../lib/twitch.js";
import { randomToken } from "../../lib/crypto.js";
import { buildSetCookie } from "../../lib/session.js";

const STATE_COOKIE = "scc_oauth_state";

export async function onRequestGet({ request, env }) {
  if (!env.TWITCH_CLIENT_ID || !env.TWITCH_REDIRECT_URI) {
    return new Response("OAuth not configured", { status: 500 });
  }

  const url = new URL(request.url);
  const next = url.searchParams.get("next") || "/app.html";

  const state = randomToken(24);
  // Stash the post-login destination plus a CSRF token in a short-lived signed-ish cookie.
  // (Signing not strictly needed because we only compare to ?state and reject otherwise.)
  const stateBlob = encodeURIComponent(JSON.stringify({ s: state, n: next }));

  const stateCookie = [
    `${STATE_COOKIE}=${stateBlob}`,
    "Path=/api/auth",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Max-Age=600",
  ].join("; ");

  return new Response(null, {
    status: 302,
    headers: {
      Location: buildAuthorizeUrl(env, state),
      "Set-Cookie": stateCookie,
    },
  });
}
