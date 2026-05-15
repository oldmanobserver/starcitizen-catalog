// functions/lib/admin.js
// Helper: require an authenticated admin or return a 401/403 Response.

import { requireSession } from "./session.js";
import { getUser } from "./db.js";
import { error } from "./http.js";

export async function requireAdmin(request, env) {
  const { session, response } = await requireSession(request, env);
  if (response) return { session: null, user: null, response };
  const user = await getUser(env, session.user_id);
  if (!user) return { session, user: null, response: error(404, "user_not_found") };
  if (!user.is_admin) return { session, user, response: error(403, "forbidden") };
  return { session, user, response: null };
}
