// functions/lib/twitch.js
// Helpers for the Twitch OAuth Authorization Code flow.

const TWITCH_AUTHORIZE = "https://id.twitch.tv/oauth2/authorize";
const TWITCH_TOKEN = "https://id.twitch.tv/oauth2/token";
const TWITCH_USERS = "https://api.twitch.tv/helix/users";

/**
 * Build the URL we redirect the user to in order to begin login.
 */
export function buildAuthorizeUrl(env, state) {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: env.TWITCH_CLIENT_ID,
    redirect_uri: env.TWITCH_REDIRECT_URI,
    scope: "user:read:email",
    state,
    force_verify: "false",
  });
  return `${TWITCH_AUTHORIZE}?${params.toString()}`;
}

/**
 * Exchange the OAuth code for an access token.
 */
export async function exchangeCode(env, code) {
  const body = new URLSearchParams({
    client_id: env.TWITCH_CLIENT_ID,
    client_secret: env.TWITCH_CLIENT_SECRET,
    code,
    grant_type: "authorization_code",
    redirect_uri: env.TWITCH_REDIRECT_URI,
  });
  const res = await fetch(TWITCH_TOKEN, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Twitch token exchange failed: ${res.status} ${text}`);
  }
  return res.json();
}

/**
 * Fetch the authenticated user's Twitch profile.
 */
export async function fetchTwitchUser(env, accessToken) {
  const res = await fetch(TWITCH_USERS, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Client-Id": env.TWITCH_CLIENT_ID,
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Twitch users lookup failed: ${res.status} ${text}`);
  }
  const json = await res.json();
  const u = json.data && json.data[0];
  if (!u) throw new Error("Twitch users response was empty");
  return {
    id: u.id,
    login: u.login,
    display_name: u.display_name,
    email: u.email || null,
    profile_image_url: u.profile_image_url || null,
  };
}
