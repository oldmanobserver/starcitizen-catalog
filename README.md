# Star Citizen Catalog

LLM-powered search over community Star Citizen patch notes and YouTube transcripts.
Bring your own API key from OpenAI / Anthropic / Google / xAI / OpenRouter; we don't pay for tokens.

Live at **https://starcitizencatalog.oldmanobserver.com/**.

> Not affiliated with Cloud Imperium Games or Star Citizen. All Star Citizen names, logos, and trademarks are property of their respective owners.

---

## Architecture

| Concern | Implementation |
| --- | --- |
| Frontend | Static HTML/CSS/JS on **Cloudflare Pages** (`public/`) |
| Backend | **Cloudflare Pages Functions** (`functions/api/`) |
| Auth | **Twitch OAuth** (Authorization Code) → HttpOnly signed session cookie |
| Relational store | **Cloudflare D1** (users, conversations, messages, audit log) |
| Hot KV | **Workers KV** — sessions, encrypted API keys, rate-limit counters |
| Search index | **Cloudflare Vectorize** with `@cf/baai/bge-base-en-v1.5` embeddings |
| LLM providers | OpenAI / Anthropic / Google Gemini / xAI / OpenRouter (SSE streaming) |

### Security highlights

- **API keys are envelope-encrypted at rest.** A master key in Cloudflare Secrets is used with HKDF (salt = user ID, info = provider) to derive a per-user AES-256-GCM key. Ciphertext + IV are stored in KV; plaintext is decrypted in-memory only when forwarding a request to a provider.
- Session cookies are HttpOnly + Secure + SameSite=Lax, signed with HMAC-SHA-256, value is an opaque token (server state lives in KV).
- OAuth uses a CSRF `state` parameter checked against a short-lived state cookie.
- Mutating endpoints check `Origin` to defend against cross-site request forgery on top of SameSite.
- A per-user hourly rate limit on `/api/chat` (configurable via `RATE_LIMIT_PER_HOUR`).
- Error messages strip `sk-...` and `Bearer ...` patterns before being returned to the client.

---

## Folder layout

```
public/                  Static site
  index.html             Landing / login
  app.html               Chat UI
  settings.html          Theme, defaults, API key management
  terms.html             Terms of service
  privacy.html           Privacy policy
  assets/css/ assets/js/

functions/
  api/
    auth/                Twitch OAuth flow
    chat.js              SSE streaming chat endpoint
    conversations/       List / get / patch / delete
    keys.js              Encrypted API key storage
    providers.js         Provider + model catalog
    settings.js          User settings
  lib/
    crypto.js            AES-GCM envelope encryption, HMAC, random tokens
    session.js           Cookie + KV session helpers
    twitch.js            OAuth helpers
    db.js                D1 query helpers
    http.js              JSON helpers, origin checks, rate limit
    rag.js               Vectorize retrieval + system prompt assembly
    providers/           One file per LLM provider, exposing streamChat()
  ingest/
    build_index.js       One-off: chunk + embed catalog → Vectorize
  data/                  Existing source-of-truth (ships, transcripts, patch notes)

schema/d1_schema.sql
wrangler.toml
```

---

## First-time setup

You'll need the `wrangler` CLI logged in to a Cloudflare account.

### 1. Create the storage resources

```powershell
# D1 database
wrangler d1 create starcitizen-catalog
# -> copy the database_id into wrangler.toml

# KV namespaces (one for each binding in wrangler.toml)
wrangler kv:namespace create SESSIONS
wrangler kv:namespace create API_KEYS
wrangler kv:namespace create RATELIMIT
# -> copy each id into wrangler.toml

# Vectorize index (768 dims for bge-base-en-v1.5, cosine similarity)
wrangler vectorize create sc-catalog --dimensions=768 --metric=cosine
```

### 2. Apply the D1 schema

```powershell
npm run db:init           # remote
npm run db:init:local     # local-dev
```

### 3. Register a Twitch application

1. Go to https://dev.twitch.tv/console/apps and create an app.
2. Set the OAuth redirect URI to `https://starcitizencatalog.oldmanobserver.com/api/auth/callback`
   (and `http://localhost:8788/api/auth/callback` for local dev).
3. Copy the Client ID and generate a Client Secret.

### 4. Set secrets

```powershell
# Required
wrangler pages secret put TWITCH_CLIENT_ID --project-name=starcitizen-catalog
wrangler pages secret put TWITCH_CLIENT_SECRET --project-name=starcitizen-catalog

# Generate two random 32-byte base64 secrets for these:
#   PowerShell: [Convert]::ToBase64String((1..32 | %{ Get-Random -Min 0 -Max 256 }))
wrangler pages secret put SESSION_SIGNING_KEY --project-name=starcitizen-catalog
wrangler pages secret put MASTER_KEY --project-name=starcitizen-catalog
```

### 5. Build the search index

```powershell
$env:CF_ACCOUNT_ID    = "<your account id>"
$env:CF_API_TOKEN     = "<token: Workers AI Read + Vectorize Edit + Workers KV Edit>"
$env:VECTORIZE_INDEX  = "sc-catalog"
$env:API_KEYS_KV_ID   = "<the API_KEYS KV namespace id>"
node functions/ingest/build_index.js
```

This walks `functions/data/`, chunks every transcript and patch note, embeds them via Workers AI, and upserts the vectors into Vectorize. It also writes the `transcript_corrections` map from `ships.json` into the `API_KEYS` KV under the key `system:ship_corrections` so the chat endpoint can include it in the system prompt.

Re-run the script any time you add new transcripts or patch notes; vector IDs are deterministic so duplicates are overwritten in place.

### 6. Deploy

```powershell
npm run deploy
```

### 7. Local development

```powershell
# .dev.vars — same keys as your secrets, for local Pages dev
TWITCH_CLIENT_ID=...
TWITCH_CLIENT_SECRET=...
SESSION_SIGNING_KEY=...
MASTER_KEY=...

npm run dev
```

Local dev does *not* have D1, KV, Vectorize, or Workers AI by default; pass `--remote` flags to `wrangler pages dev` if you want to hit the real bindings while iterating on UI.

---

## API surface

All endpoints below are mounted under `/api/*`.

| Method | Path | Notes |
| --- | --- | --- |
| GET | `/api/auth/login` | Redirects to Twitch authorize URL |
| GET | `/api/auth/callback` | Twitch OAuth return → session cookie |
| GET | `/api/auth/me` | Current user (401 if not signed in) |
| POST | `/api/auth/logout` | Destroys the session |
| GET | `/api/providers` | Supported providers + known model IDs |
| GET, PATCH | `/api/settings` | Theme, default provider/model |
| GET, PUT, DELETE | `/api/keys` | Per-provider encrypted API keys |
| GET, POST | `/api/conversations` | List / create |
| GET, PATCH, DELETE | `/api/conversations/:id` | Get with messages / rename / pin / delete |
| POST | `/api/chat` | SSE stream of assistant deltas + citations |

`POST /api/chat` request body:

```json
{ "conversation_id": "c_abc123...", "provider": "anthropic", "model": "claude-sonnet-4-5", "message": "What changed for the Drake Caterpillar in 4.0?" }
```

Response is `text/event-stream` with these event types:

```
event: meta     { conversation_id, message_id, citations:[ {ref,url,source_type,...} ] }
event: delta    { text: "partial response..." }
event: done     { tokens_in, tokens_out }
event: error    { message }
```

---

## Disclaimers

- Star Citizen and all related names, logos, and trademarks belong to **Cloud Imperium Games / Roberts Space Industries**. This project is not affiliated with, endorsed by, or sponsored by them. See [`public/terms.html`](public/terms.html) and [`public/privacy.html`](public/privacy.html).
- Use of an LLM provider through this site is governed by **that provider's terms and acceptable use policy**. You are responsible for token spend on your own key.
