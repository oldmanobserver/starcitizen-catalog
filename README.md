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
| Admin / data jobs | **GitHub Actions** dispatched from the admin page (rebuild index, fetch new videos/patch notes) |

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
  settings.html          Theme, defaults, API key management, delete-account
  admin.html             Admin job dashboard (admins only)
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
    account/delete.js    Permanently deletes the user + all of their data
    admin/jobs.js        List + dispatch GitHub Actions workflows (admins only)
  lib/
    crypto.js            AES-GCM envelope encryption, HMAC, random tokens
    session.js           Cookie + KV session helpers
    twitch.js            OAuth helpers
    db.js                D1 query helpers
    http.js              JSON helpers, origin checks, rate limit
    rag.js               Vectorize retrieval + system prompt assembly
    admin.js             requireAdmin() helper
    providers/           One file per LLM provider, exposing streamChat()
  ingest/
    build_index.js       One-off: chunk + embed catalog → Vectorize
  data/                  Source-of-truth (ships, transcripts, patch notes)
    youtube/scripts/     Python fetchers (yt-dlp + youtube-transcript-api)
    Patch Notes/scripts/ Python scraper for the Spectrum forum

.github/
  workflows/
    rebuild-index.yml         Re-embeds and upserts all chunks to Vectorize
    fetch-videos.yml          Pulls new YouTube videos + transcripts, commits
    fetch-patch-notes.yml     Pulls new patch notes, commits
  copilot-instructions.md     Workspace conventions (ship corrections, source-control rules)

schema/
  d1_schema.sql               Initial schema
  migrations/002_admin.sql    Adds users.is_admin column
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

You can set secrets either via the Cloudflare dashboard (Workers & Pages → starcitizen-catalog → **Settings** → **Variables and Secrets**, Type = `Secret`) or via `wrangler`:

```powershell
# Twitch OAuth credentials
wrangler pages secret put TWITCH_CLIENT_ID --project-name=starcitizen-catalog
wrangler pages secret put TWITCH_CLIENT_SECRET --project-name=starcitizen-catalog

# Generate two cryptographically-random 32-byte base64 secrets:
#   $b=New-Object byte[] 32; [Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($b); [Convert]::ToBase64String($b)
wrangler pages secret put SESSION_SIGNING_KEY --project-name=starcitizen-catalog
wrangler pages secret put MASTER_KEY --project-name=starcitizen-catalog

# Admin job dispatcher: a GitHub fine-grained PAT scoped to THIS repo with
# "Actions: Read and write" + "Metadata: Read". See "Admin & data jobs" below.
wrangler pages secret put GITHUB_DISPATCH_TOKEN --project-name=starcitizen-catalog

# Optional: Cloudflare Turnstile to gate the Twitch login button against bots.
# Create a widget at https://dash.cloudflare.com → Turnstile → "Add site", then:
#   - Paste the site key (public) into `TURNSTILE_SITE_KEY` in wrangler.toml
#     (or set it via Cloudflare dashboard → Variables and Secrets, Type = Plaintext)
#   - Set the secret key:
wrangler pages secret put TURNSTILE_SECRET_KEY --project-name=starcitizen-catalog
```

> If `TURNSTILE_SECRET_KEY` is unset, the login page falls back to a plain
> "Sign in with Twitch" button. When the secret is set, the widget is
> rendered and the backend rejects login POSTs without a valid token, and
> direct `GET /api/auth/login` requests bounce back to `/` so bots can't
> bypass the challenge.

> ⚠️ When piping a secret value to `wrangler` from PowerShell (`"value" | wrangler …`), PowerShell appends a newline. For Twitch credentials especially, prefer to run `wrangler pages secret put …` with no value, then paste at the **Enter a secret value:** prompt — or set it via the dashboard.

### 5. Build the search index

For production, this normally runs on GitHub Actions — see [Admin & data jobs](#admin--data-jobs) below. For one-off local runs:

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
| GET, POST | `/api/auth/login` | Start Twitch OAuth. POST verifies a Turnstile token when `TURNSTILE_SECRET_KEY` is set. |
| GET | `/api/auth/callback` | Twitch OAuth return → session cookie |
| GET | `/api/auth/config` | Public auth config (Turnstile site key, if any) |
| GET | `/api/auth/me` | Current user incl. `is_admin` (401 if not signed in) |
| POST | `/api/auth/logout` | Destroys the session |
| GET | `/api/providers` | Supported providers + known model IDs |
| GET, PATCH | `/api/settings` | Theme, default provider/model |
| GET, PUT, DELETE | `/api/keys` | Per-provider encrypted API keys |
| GET, POST | `/api/conversations` | List / create |
| GET, PATCH, DELETE | `/api/conversations/:id` | Get with messages / rename / pin / delete |
| POST | `/api/chat` | SSE stream of assistant deltas + citations |
| POST | `/api/account/delete` | Permanently delete account + all data. Requires typed Twitch login as confirmation. |
| GET, POST | `/api/admin/jobs` | Admin-only. List recent GH workflow runs, or dispatch one. |

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

## Admin & data jobs

The `functions/data/` tree is the source of truth for transcripts and patch notes, and the Vectorize index has to be rebuilt every time it changes. Doing that work in a Pages Function is impractical (~20K embedding calls, hours-long YouTube fetches), so **all data work runs on GitHub Actions** and is triggered from a small admin UI.

### Admin UI

- `/admin.html` — three cards (Rebuild index / Fetch videos / Fetch patch notes), each with a **Run** button and the 10 most recent workflow runs. Auto-refreshes every 10 seconds.
- Visible only to users with `users.is_admin = 1` in D1.
- Mobile-friendly so you can kick off jobs from your phone.

### Workflows

| File | Trigger | What it does |
| --- | --- | --- |
| `.github/workflows/rebuild-index.yml` | Manual only | Runs `node functions/ingest/build_index.js`. Re-chunks all transcripts + patch notes + ships, embeds via Workers AI, upserts to Vectorize, refreshes the ship-corrections KV blob. |
| `.github/workflows/fetch-videos.yml` | Manual + weekly cron (Mon 09:00 UTC) | Runs `fetch_year.py` then `build_year_catalog.py` for the chosen year, commits new transcripts to `main`, pushes. Pages auto-redeploys. |
| `.github/workflows/fetch-patch-notes.yml` | Manual + weekly cron (Mon 09:30 UTC) | Runs `download_patch_notes.py` for public LIVE/PTU threads only. Evocati / ETF NDA threads are skipped — we do not keep NDA content in this repo. Commits new files to `main`. |

The admin **POST /api/admin/jobs** endpoint accepts a sanitized `inputs` object — currently the only allowed input is `year` (4-digit) for fetch-videos. Anything else is dropped.

### Setup checklist (one-time)

**On Cloudflare**

1. Apply the admin migration once the new code is deployed:
   ```powershell
   wrangler d1 execute starcitizen-catalog --remote --file=schema/migrations/002_admin.sql
   ```
   This adds `users.is_admin` and marks the `oldmanobserver` row as admin (no-op if you haven't signed in yet — re-run after your first login).

2. Add the `GITHUB_DISPATCH_TOKEN` secret (above) using a fine-grained PAT created at https://github.com/settings/personal-access-tokens/new with:
   - **Repository access:** Only this repo (`oldmanobserver/starcitizen-catalog`)
   - **Permissions → Actions:** Read and write
   - **Permissions → Metadata:** Read (auto)

   Recommend a 90-day expiry and a calendar reminder to rotate.

**On GitHub** (repo → Settings → Secrets and variables → Actions → New repository secret)

| Secret | Value |
| --- | --- |
| `CF_ACCOUNT_ID` | Cloudflare account ID |
| `CF_API_TOKEN` | Custom API token with **Workers AI: Read**, **Vectorize: Edit**, **Workers KV Storage: Edit** |
| `API_KEYS_KV_ID` | KV namespace ID of the `API_KEYS` binding (the ingest script writes the ship-corrections blob here) |

Nothing else needs setting — `${{ secrets.GITHUB_TOKEN }}` is provided automatically and the fetch workflows use it to commit back to the repo.

### Promoting another admin

There is no admin UI for this yet. Direct SQL:

```powershell
wrangler d1 execute starcitizen-catalog --remote --command "UPDATE users SET is_admin=1 WHERE login='somebody'"
```

The `audit_log` table records every `admin_dispatch` event.

---

## Disclaimers

- Star Citizen and all related names, logos, and trademarks belong to **Cloud Imperium Games / Roberts Space Industries**. This project is not affiliated with, endorsed by, or sponsored by them. See [`public/terms.html`](public/terms.html) and [`public/privacy.html`](public/privacy.html).
- Use of an LLM provider through this site is governed by **that provider's terms and acceptable use policy**. You are responsible for token spend on your own key.
