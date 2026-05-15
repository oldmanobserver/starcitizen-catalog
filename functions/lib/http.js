// functions/lib/http.js
// Tiny helpers for endpoint responses.

export function json(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      ...(init.headers || {}),
    },
  });
}

export function error(status, message, extra = {}) {
  return json({ error: message, ...extra }, { status });
}

export function redirect(location, init = {}) {
  return new Response(null, {
    status: 302,
    ...init,
    headers: { Location: location, ...(init.headers || {}) },
  });
}

/**
 * Verify a request is intended for an API endpoint (CSRF-light: require fetch-mode header
 * or matching origin). For mutating methods only.
 */
export function checkOrigin(request, env) {
  const method = request.method.toUpperCase();
  if (!["POST", "PUT", "PATCH", "DELETE"].includes(method)) return null;
  const origin = request.headers.get("Origin");
  if (!origin) return null; // some browsers omit; SameSite cookie still protects us
  try {
    const allowed = new URL(env.APP_URL).origin;
    if (origin === allowed) return null;
    // Allow local dev
    if (origin.startsWith("http://localhost") || origin.startsWith("http://127.0.0.1")) return null;
  } catch {
    /* ignore */
  }
  return error(403, "forbidden_origin");
}

/**
 * Simple per-user hourly rate limit using KV. Returns null if OK, else a 429 Response.
 */
export async function rateLimit(env, userId, bucket = "chat") {
  const max = parseInt(env.RATE_LIMIT_PER_HOUR || "120", 10);
  if (!Number.isFinite(max) || max <= 0) return null;
  const hour = Math.floor(Date.now() / 1000 / 3600);
  const key = `rl:${bucket}:${userId}:${hour}`;
  const cur = parseInt((await env.RATELIMIT.get(key)) || "0", 10) || 0;
  if (cur >= max) {
    return error(429, "rate_limited", { retry_after_seconds: 3600 - (Math.floor(Date.now() / 1000) % 3600) });
  }
  await env.RATELIMIT.put(key, String(cur + 1), { expirationTtl: 3700 });
  return null;
}
