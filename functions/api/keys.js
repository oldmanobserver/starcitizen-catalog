// functions/api/keys.js
// GET    /api/keys              -> list providers with stored key (masked)
// PUT    /api/keys              -> { provider, key }: store/update encrypted key
// DELETE /api/keys?provider=... -> remove a stored key

import { requireSession } from "../lib/session.js";
import { json, error, checkOrigin } from "../lib/http.js";
import { encryptApiKey, maskKey } from "../lib/crypto.js";
import { audit } from "../lib/db.js";

const SUPPORTED = ["openai", "anthropic", "google", "xai", "openrouter"];

function kvKey(userId, provider) {
  return `key:${userId}:${provider}`;
}
function metaKey(userId, provider) {
  return `keymeta:${userId}:${provider}`;
}

export async function onRequestGet({ request, env }) {
  const { session, response } = await requireSession(request, env);
  if (response) return response;

  const out = [];
  for (const provider of SUPPORTED) {
    const meta = await env.API_KEYS.get(metaKey(session.user_id, provider));
    if (meta) {
      try {
        out.push({ provider, ...JSON.parse(meta) });
      } catch {
        out.push({ provider });
      }
    }
  }
  return json({ keys: out, supported: SUPPORTED });
}

export async function onRequestPut({ request, env }) {
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
  const { provider, key } = body || {};
  if (!provider || !SUPPORTED.includes(provider)) return error(400, "unsupported_provider");
  if (typeof key !== "string" || key.length < 8 || key.length > 500) {
    return error(400, "invalid_key");
  }

  const encrypted = await encryptApiKey(env.MASTER_KEY, session.user_id, provider, key.trim());
  await env.API_KEYS.put(kvKey(session.user_id, provider), encrypted);
  await env.API_KEYS.put(
    metaKey(session.user_id, provider),
    JSON.stringify({
      preview: maskKey(key.trim()),
      updated_at: Math.floor(Date.now() / 1000),
    })
  );
  await audit(env, session.user_id, "key_set", { provider });
  return json({ ok: true, provider, preview: maskKey(key.trim()) });
}

export async function onRequestDelete({ request, env }) {
  const guard = checkOrigin(request, env);
  if (guard) return guard;
  const { session, response } = await requireSession(request, env);
  if (response) return response;

  const url = new URL(request.url);
  const provider = url.searchParams.get("provider");
  if (!provider || !SUPPORTED.includes(provider)) return error(400, "unsupported_provider");

  await env.API_KEYS.delete(kvKey(session.user_id, provider));
  await env.API_KEYS.delete(metaKey(session.user_id, provider));
  await audit(env, session.user_id, "key_delete", { provider });
  return json({ ok: true });
}
