// functions/api/auth/config.js
// GET /api/auth/config -> public auth config for the landing page.
// Currently just exposes the Turnstile site key (if any) so the static page
// knows whether to render the widget.

import { json } from "../../lib/http.js";

export async function onRequestGet({ env }) {
  return json({
    turnstile_site_key: env.TURNSTILE_SITE_KEY || null,
    turnstile_required: Boolean(env.TURNSTILE_SECRET_KEY),
  });
}
