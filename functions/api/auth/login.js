// functions/api/auth/login.js
// Start the Twitch OAuth flow.
//
//   GET  /api/auth/login            -> redirect to Twitch (only allowed when
//                                      Turnstile is NOT configured, e.g. local dev)
//   POST /api/auth/login            -> verify Turnstile, then redirect to Twitch
//                                      (form-encoded body, submitted from the
//                                      landing page)

import { buildAuthorizeUrl } from "../../lib/twitch.js";
import { randomToken } from "../../lib/crypto.js";

const STATE_COOKIE = "scc_oauth_state";
const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

function buildStateCookie(state, next) {
  const stateBlob = encodeURIComponent(JSON.stringify({ s: state, n: next }));
  return [
    `${STATE_COOKIE}=${stateBlob}`,
    "Path=/api/auth",
    "HttpOnly",
    "Secure",
    "SameSite=Lax",
    "Max-Age=600",
  ].join("; ");
}

function sanitizeNext(value) {
  if (typeof value !== "string") return "/app.html";
  // Only allow same-origin relative paths.
  if (!value.startsWith("/") || value.startsWith("//")) return "/app.html";
  return value;
}

function startFlow(env, next) {
  const state = randomToken(24);
  return new Response(null, {
    status: 302,
    headers: {
      Location: buildAuthorizeUrl(env, state),
      "Set-Cookie": buildStateCookie(state, next),
    },
  });
}

function redirectToLanding(reason) {
  return new Response(null, {
    status: 302,
    headers: { Location: `/?login_error=${encodeURIComponent(reason)}` },
  });
}

async function verifyTurnstile(env, token, clientIp) {
  const body = new URLSearchParams({
    secret: env.TURNSTILE_SECRET_KEY,
    response: token,
  });
  if (clientIp) body.set("remoteip", clientIp);
  const res = await fetch(TURNSTILE_VERIFY, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) return { success: false };
  try {
    return await res.json();
  } catch {
    return { success: false };
  }
}

export async function onRequestGet({ request, env }) {
  if (!env.TWITCH_CLIENT_ID || !env.TWITCH_REDIRECT_URI) {
    return new Response("OAuth not configured", { status: 500 });
  }
  // If Turnstile is enabled, refuse plain GETs — force the user through the
  // landing page widget. This prevents bots from skipping the challenge by
  // hitting /api/auth/login directly.
  if (env.TURNSTILE_SECRET_KEY) {
    return redirectToLanding("turnstile_required");
  }
  const url = new URL(request.url);
  const next = sanitizeNext(url.searchParams.get("next"));
  return startFlow(env, next);
}

export async function onRequestPost({ request, env }) {
  if (!env.TWITCH_CLIENT_ID || !env.TWITCH_REDIRECT_URI) {
    return new Response("OAuth not configured", { status: 500 });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return redirectToLanding("bad_request");
  }

  const next = sanitizeNext(form.get("next"));

  // If a secret is configured, require a valid token.
  if (env.TURNSTILE_SECRET_KEY) {
    const token = form.get("cf-turnstile-response");
    if (!token || typeof token !== "string") {
      return redirectToLanding("turnstile_required");
    }
    const clientIp = request.headers.get("CF-Connecting-IP") || "";
    const result = await verifyTurnstile(env, token, clientIp);
    if (!result || !result.success) {
      return redirectToLanding("turnstile_failed");
    }
  }

  return startFlow(env, next);
}

