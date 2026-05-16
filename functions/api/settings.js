// functions/api/settings.js
// GET   /api/settings -> current user settings
// PATCH /api/settings -> update theme, default_provider, default_model

import { requireSession } from "../lib/session.js";
import { json, error, checkOrigin } from "../lib/http.js";
import { getUser, updateUserSettings } from "../lib/db.js";

const THEMES = ["light", "dark", "system"];

export async function onRequestGet({ request, env }) {
  const { session, response } = await requireSession(request, env);
  if (response) return response;
  const user = await getUser(env, session.user_id);
  if (!user) return error(404, "user_not_found");
  return json({
    theme: user.theme || "dark",
    default_provider: user.default_provider || null,
    default_model: user.default_model || null,
  });
}

export async function onRequestPatch({ request, env }) {
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
  if (body.theme !== undefined) {
    if (!THEMES.includes(body.theme)) return error(400, "invalid_theme");
    patch.theme = body.theme;
  }
  if (body.default_provider !== undefined) {
    patch.default_provider = body.default_provider ? String(body.default_provider).slice(0, 40) : null;
  }
  if (body.default_model !== undefined) {
    patch.default_model = body.default_model ? String(body.default_model).slice(0, 80) : null;
  }
  await updateUserSettings(env, session.user_id, patch);
  return json({ ok: true, ...patch });
}
