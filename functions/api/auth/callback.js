// functions/api/auth/callback.js
// GET /api/auth/callback?code=...&state=... -> exchange + create session + redirect.

import { exchangeCode, fetchTwitchUser } from "../../lib/twitch.js";
import { createSession } from "../../lib/session.js";
import { upsertUser, audit } from "../../lib/db.js";
import { parseCookies } from "../../lib/session.js";

const STATE_COOKIE = "scc_oauth_state";

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const errParam = url.searchParams.get("error");

  if (errParam) {
    return redirectWithFlash(env, "/?login_error=" + encodeURIComponent(errParam));
  }
  if (!code || !state) {
    return redirectWithFlash(env, "/?login_error=missing_code");
  }

  const cookies = parseCookies(request.headers.get("Cookie") || "");
  const stateRaw = cookies[STATE_COOKIE];
  if (!stateRaw) return redirectWithFlash(env, "/?login_error=missing_state_cookie");

  let stateObj;
  try {
    stateObj = JSON.parse(decodeURIComponent(stateRaw));
  } catch {
    return redirectWithFlash(env, "/?login_error=bad_state");
  }
  if (!stateObj || stateObj.s !== state) {
    return redirectWithFlash(env, "/?login_error=state_mismatch");
  }

  let token;
  try {
    token = await exchangeCode(env, code);
  } catch (e) {
    console.error("twitch exchange", e);
    // Surface the underlying Twitch error to the login page so misconfigurations
    // (redirect mismatch, bad client secret, etc.) are diagnosable without log access.
    const detail = encodeURIComponent(String(e && e.message || e).slice(0, 240));
    return redirectWithFlash(env, `/?login_error=token_exchange&detail=${detail}`);
  }

  let profile;
  try {
    profile = await fetchTwitchUser(env, token.access_token);
  } catch (e) {
    console.error("twitch user", e);
    return redirectWithFlash(env, "/?login_error=user_lookup");
  }

  await upsertUser(env, profile);
  await audit(env, profile.id, "login", { login: profile.login });

  const session = await createSession(env, profile.id, { login: profile.login });

  const next = (stateObj.n && stateObj.n.startsWith("/")) ? stateObj.n : "/app.html";

  const headers = new Headers();
  headers.append("Location", next);
  headers.append("Set-Cookie", session.setCookie);
  // Clear the state cookie
  headers.append(
    "Set-Cookie",
    `${STATE_COOKIE}=; Path=/api/auth; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
  );
  return new Response(null, { status: 302, headers });
}

function redirectWithFlash(env, location) {
  return new Response(null, { status: 302, headers: { Location: location } });
}
