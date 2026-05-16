// functions/api/auth/me.js
// GET /api/auth/me -> current user profile + settings, or 401.

import { requireSession } from "../../lib/session.js";
import { getUser } from "../../lib/db.js";
import { json } from "../../lib/http.js";

export async function onRequestGet({ request, env }) {
  const { session, response } = await requireSession(request, env);
  if (response) return response;
  const user = await getUser(env, session.user_id);
  if (!user) return json({ error: "user_not_found" }, { status: 404 });
  return json({
    id: user.id,
    login: user.login,
    display_name: user.display_name,
    profile_image_url: user.profile_image_url,
    theme: user.theme || "dark",
    default_provider: user.default_provider || null,
    default_model: user.default_model || null,
    is_admin: !!user.is_admin,
  });
}
