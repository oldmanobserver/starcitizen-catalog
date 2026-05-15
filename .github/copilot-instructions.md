# Star Citizen Catalog - Copilot Instructions

## Ship Name Corrections

This workspace contains Star Citizen data including YouTube video transcripts and patch notes. Auto-generated transcripts and other sources frequently misspell or mishear ship and vehicle names.

**Always consult `functions/data/ships.json`** before reporting ship/vehicle names from any source (transcripts, patch notes, etc.). Specifically:

1. Check the `transcript_corrections` map in `functions/data/ships.json` to fix known misheard names (e.g., "Starlancer Attack" → "MISC Starlancer TAC", "Tibberon" → "Aegis Tiburon", "Starlight" → "MISC Starlite").
2. Use the canonical ship names from the `manufacturers` section of `functions/data/ships.json` as the authoritative reference.
3. Also check `functions/data/ship_nicknames.md` for community nicknames and known aliases.
4. When listing ships from any source, always present the **corrected official name**, and optionally note the original wording if it differs.

## Video Linking

When reporting on transcript content, **always include a clickable YouTube link** to the video. Build the link from the transcript:

1. Each transcript file has a `**Video:**` header line with the full YouTube URL (format: `https://www.youtube.com/watch?v={id}`).
2. If the `**Video:**` line is missing, construct the URL from the transcript filename: the filename (minus `.md`) is the YouTube video ID.
3. **Timestamp linking:** Transcript lines are prefixed with timestamps in `[H:MM:SS]` or `[MM:SS]` format. Extract the timestamp directly from the transcript line to build the YouTube link. Convert `[H:MM:SS]` to total seconds and append `&t={seconds}s` to the YouTube URL. For example, `[1:23:45]` → `&t=5025s`. **Legacy transcripts** (without `[timestamp]` prefixes) require estimation: calculate `secs_per_line = total_duration_seconds / (total_lines - 9)`, then `timestamp = (target_line - 9) × secs_per_line`. Always verify the computed timestamp does not exceed the video duration.
4. Always present the video title as a clickable link. When possible, provide a second timestamp link pointing to the relevant discussion segment.

## Workspace Structure

- `functions/data/ships.json` — Canonical ship/vehicle list with manufacturers, aliases, and transcript correction mappings (shared across all data sources)
- `functions/data/ship_nicknames.md` — Community nicknames and common transcript errors (shared across all data sources)
- `functions/data/youtube/` — All YouTube video data and scripts
  - `functions/data/youtube/{year}/videos.md` — Video catalog per year
  - `functions/data/youtube/{year}/transcripts/*.md` — Individual video transcripts (include `**Video:**` URL and `**Date:**` in header)
  - `functions/data/youtube/{year}/video_list_{year}.json` — Video metadata (includes `id`, `title`, `upload_date`, `duration`)
  - `functions/data/youtube/scripts/build_year_catalog.py`, `functions/data/youtube/scripts/fetch_year.py`, etc. — Download and catalog scripts
- `functions/data/Patch Notes/` — Game patch notes
  - `functions/data/Patch Notes/{year}/LIVE/*.md` — LIVE release notes and hotfixes
  - `functions/data/Patch Notes/{year}/PTU/*.md` — PTU patch notes (Wave 1/2/3, All Backers, EPTU)
  - `functions/data/Patch Notes/{year}/Evocati/*.md` — Evocati/ETF NDA patch notes
  - `functions/data/Patch Notes/scripts/download_patch_notes.py` — Download patch notes from Spectrum forum

## Rate Limiting

**All transcript download scripts MUST wait 2.5 minutes (150 seconds) between each YouTube API request.** Shorter delays will trigger an IP ban. This applies to:
- `functions/data/youtube/scripts/build_year_catalog.py`, `functions/data/youtube/scripts/build_2026_catalog.py`, `functions/data/youtube/scripts/build_catalog.py`
- `functions/data/youtube/scripts/download_transcripts.py`, `functions/data/youtube/scripts/redownload_all.py`
- Any new script that fetches transcripts from YouTube

The constant is `DELAY_BETWEEN_REQUESTS = 150`. Never reduce this value.

## Refreshing Catalog Data (Local Only)

Fetch and indexing of new content is performed **locally**, not in GitHub Actions. YouTube blocks the GH Actions runner IPs as bots, so the old `fetch-videos.yml` / `fetch-patch-notes.yml` workflows were deleted. The remaining `rebuild-index.yml` and `sync-catalog.yml` workflows can still be dispatched from `/admin.html` after new content is committed.

### Fetch new YouTube videos for the current year

```powershell
cd functions/data/youtube/scripts
python fetch_year.py 2026          # writes/updates ../2026/video_list_2026.json
python build_year_catalog.py 2026  # downloads any missing transcripts (~150s each)
```

Notes:
- Both scripts are idempotent; transcripts already on disk are skipped.
- Each new transcript adds ~2.5 minutes of wall time due to the rate limit. A weekly RSI release cadence usually means 3–6 new videos.
- New transcript files appear under `functions/data/youtube/{year}/transcripts/{video_id}.md` and follow the format documented in the Video Linking section above.
- The script also updates `functions/data/youtube/{year}/videos.md` (the per-year catalog markdown).

### Fetch new patch notes

```powershell
cd functions/data/Patch Notes/scripts
python download_patch_notes.py                       # public LIVE/PTU posts
python download_patch_notes.py --token <x-rsi-token> # also pull Evocati NDA posts
```

The optional `x-rsi-token` is obtained from the user's browser DevTools (Network tab on any spectrum.robertsspaceindustries.com page). The token expires quickly — do **not** store it anywhere, and never paste it back into chat after capture; have the user paste it directly at the command prompt.

### After committing new content

The auto-chain that used to run on push was removed along with the broken fetch workflows. After the user commits and pushes new transcripts or patch notes, they should:

1. Open `/admin.html` on the deployed site.
2. Click **Sync catalog metadata** (~30s) — refreshes the D1 catalog tables so series/date/version lookups find the new files.
3. Click **Rebuild vector index** with the "Full rebuild" checkbox **unchecked** — the incremental ingester reads the manifest in KV, sha1-hashes each source file, and only re-embeds files whose content has changed. For a handful of new transcripts the whole run finishes in well under a minute.

Only check "Full rebuild" if the chunking logic, embedding model, or vector-ID scheme in `functions/ingest/build_index.js` has changed.

## Source Control / CI-CD Rules

**Never run `git commit`, `git push`, `git merge`, `git rebase`, `git reset`, `git revert`, `git tag`, or any other history-altering or remote-publishing git command without an explicit, in-the-moment instruction from the user for that specific commit/push.**

This applies even when:
- A deploy is failing and the fix seems obvious.
- The user previously asked you to push something earlier in the session.
- The change is small or "clearly needed."
- A redeploy will not trigger until the change is pushed.

Instead:

1. Stage the file edits in the working tree only.
2. Show the user what changed (a short summary or diff is fine).
3. Stop and wait. Let the user run `git add` / `git commit` / `git push` themselves, or explicitly tell you to.

The same caution applies to anything that publishes to or mutates shared infrastructure: pushing container images, deploying via `wrangler deploy`/`wrangler pages deploy`, opening or merging PRs, force-pushing, deleting branches/tags, rotating production secrets, dropping database tables, etc. Always confirm first.

Creating Cloudflare resources (`wrangler d1 create`, `wrangler kv namespace create`, `wrangler vectorize create`) and applying schema migrations the user has just approved is fine to execute. Setting Cloudflare secrets is fine **when the user has just supplied the value or asked you to generate one**.
