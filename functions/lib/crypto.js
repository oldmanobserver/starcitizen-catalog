// functions/lib/crypto.js
//
// Envelope encryption for user-supplied API keys.
//
// - MASTER_KEY (base64, 32 bytes) lives in Cloudflare Pages Secrets.
// - Each ciphertext gets a fresh 12-byte IV.
// - We derive a per-user encryption key with HKDF(MASTER_KEY, salt=userId, info="api-key:" + provider).
// - The browser never sees decrypted keys after upload; decrypt only when forwarding to the provider.

const enc = new TextEncoder();
const dec = new TextDecoder();

function b64encode(bytes) {
  let bin = "";
  const u8 = new Uint8Array(bytes);
  for (let i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i]);
  return btoa(bin);
}

function b64decode(b64) {
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}

async function importMasterKey(masterKeyB64) {
  const raw = b64decode(masterKeyB64);
  return crypto.subtle.importKey("raw", raw, "HKDF", false, ["deriveKey"]);
}

async function deriveAesKey(masterKey, userId, provider) {
  return crypto.subtle.deriveKey(
    {
      name: "HKDF",
      hash: "SHA-256",
      salt: enc.encode(`user:${userId}`),
      info: enc.encode(`api-key:${provider}`),
    },
    masterKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

/**
 * Encrypt an API key for storage in KV.
 * Returns a string: base64(iv) + "." + base64(ciphertext).
 */
export async function encryptApiKey(masterKeyB64, userId, provider, plaintext) {
  if (!masterKeyB64) throw new Error("MASTER_KEY is not configured");
  const master = await importMasterKey(masterKeyB64);
  const key = await deriveAesKey(master, userId, provider);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(plaintext));
  return `${b64encode(iv)}.${b64encode(ct)}`;
}

/**
 * Decrypt an API key that was previously stored with encryptApiKey().
 */
export async function decryptApiKey(masterKeyB64, userId, provider, blob) {
  if (!masterKeyB64) throw new Error("MASTER_KEY is not configured");
  const [ivB64, ctB64] = String(blob).split(".");
  if (!ivB64 || !ctB64) throw new Error("Malformed ciphertext");
  const master = await importMasterKey(masterKeyB64);
  const key = await deriveAesKey(master, userId, provider);
  const pt = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: b64decode(ivB64) },
    key,
    b64decode(ctB64)
  );
  return dec.decode(pt);
}

/**
 * Produce a redacted preview ("sk-...abc4") for display in the settings UI.
 */
export function maskKey(plaintext) {
  if (!plaintext) return "";
  const s = String(plaintext);
  if (s.length <= 8) return "•".repeat(s.length);
  return `${s.slice(0, 4)}…${s.slice(-4)}`;
}

/**
 * HMAC-SHA256 a value with SESSION_SIGNING_KEY (base64). Used to sign session cookies.
 */
export async function hmacSign(signingKeyB64, message) {
  const raw = b64decode(signingKeyB64);
  const key = await crypto.subtle.importKey(
    "raw",
    raw,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return b64encode(sig).replace(/=+$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

/**
 * Constant-time string compare.
 */
export function timingSafeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

/**
 * Random URL-safe token of n bytes (default 32).
 */
export function randomToken(n = 32) {
  const buf = new Uint8Array(n);
  crypto.getRandomValues(buf);
  return b64encode(buf).replace(/=+$/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
