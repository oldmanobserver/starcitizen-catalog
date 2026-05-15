// functions/lib/session.js
// Session cookie management. Sessions are opaque tokens; user state lives in KV (SESSIONS binding).

import { randomToken, hmacSign, timingSafeEqual } from "./crypto.js";

const DEFAULT_TTL = 60 * 60 * 24 * 30; // 30 days

function cookieName(env) {
  return env.SESSION_COOKIE_NAME || "scc_session";
}

function ttl(env) {
  const v = parseInt(env.SESSION_TTL_SECONDS || "", 10);
  return Number.isFinite(v) && v > 0 ? v : DEFAULT_TTL;
}

/**
 * Read the session cookie from a Request and verify its signature.
 * Returns the session record from KV, or null.
 */
export async function getSession(request, env) {
  const cookies = parseCookies(request.headers.get("Cookie") || "");
  const raw = cookies[cookieName(env)];
  if (!raw) return null;

  const [token, sig] = raw.split(".");
  if (!token || !sig) return null;

  const expected = await hmacSign(env.SESSION_SIGNING_KEY, token);
  if (!timingSafeEqual(sig, expected)) return null;

  const json = await env.SESSIONS.get(`sess:${token}`);
  if (!json) return null;

  try {
    const record = JSON.parse(json);
    if (record.expires_at && record.expires_at < Math.floor(Date.now() / 1000)) {
      await env.SESSIONS.delete(`sess:${token}`);
      return null;
    }
    return { ...record, token };
  } catch {
    return null;
  }
}

/**
 * Create a new session for a user and return the signed cookie value + Set-Cookie header.
 */
export async function createSession(env, userId, meta = {}) {
  const token = randomToken(32);
  const expires_at = Math.floor(Date.now() / 1000) + ttl(env);
  const record = { user_id: userId, created_at: Math.floor(Date.now() / 1000), expires_at, ...meta };
  await env.SESSIONS.put(`sess:${token}`, JSON.stringify(record), { expirationTtl: ttl(env) });
  const sig = await hmacSign(env.SESSION_SIGNING_KEY, token);
  const value = `${token}.${sig}`;
  return { token, value, setCookie: buildSetCookie(env, value, ttl(env)) };
}

/**
 * Delete the current session (logout).
 */
export async function destroySession(request, env) {
  const cookies = parseCookies(request.headers.get("Cookie") || "");
  const raw = cookies[cookieName(env)];
  if (raw) {
    const [token] = raw.split(".");
    if (token) await env.SESSIONS.delete(`sess:${token}`);
  }
  return buildSetCookie(env, "", 0);
}

/**
 * Build a Set-Cookie header value.
 */
export function buildSetCookie(env, value, maxAge) {
  const parts = [
    `${cookieName(env)}=${value}`,
    "Path=/",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    `Max-Age=${maxAge}`,
  ];
  return parts.join("; ");
}

export function parseCookies(header) {
  const out = {};
  if (!header) return out;
  for (const part of header.split(/;\s*/)) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const k = part.slice(0, eq).trim();
    const v = part.slice(eq + 1).trim();
    if (k) out[k] = v;
  }
  return out;
}

/**
 * Helper for endpoint handlers: require an authenticated session, else return 401.
 */
export async function requireSession(request, env) {
  const sess = await getSession(request, env);
  if (!sess) {
    return {
      session: null,
      response: new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }),
    };
  }
  return { session: sess, response: null };
}
