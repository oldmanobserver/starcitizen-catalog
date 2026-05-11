# Star Citizen Catalog - Copilot Instructions

## Ship Name Corrections

This workspace contains Star Citizen YouTube video transcripts. Auto-generated transcripts frequently misspell or mishear ship and vehicle names.

**Always consult `ships.json`** before reporting ship/vehicle names from transcripts. Specifically:

1. Check the `transcript_corrections` map in `ships.json` to fix known misheard names (e.g., "Starlancer Attack" → "MISC Starlancer TAC", "Tibberon" → "Aegis Tiburon", "Starlight" → "MISC Starlite").
2. Use the canonical ship names from the `manufacturers` section of `ships.json` as the authoritative reference.
3. Also check `ship_nicknames.md` for community nicknames and known aliases.
4. When listing ships from a transcript, always present the **corrected official name**, and optionally note the transcript's original wording if it differs.

## Video Linking

When reporting on transcript content, **always include a clickable YouTube link** to the video. Build the link from the transcript:

1. Each transcript file has a `**Video:**` header line with the full YouTube URL (format: `https://www.youtube.com/watch?v={id}`).
2. If the `**Video:**` line is missing, construct the URL from the transcript filename: the filename (minus `.md`) is the YouTube video ID.
3. **Timestamp linking:** Transcript lines are prefixed with timestamps in `[H:MM:SS]` or `[MM:SS]` format. Extract the timestamp directly from the transcript line to build the YouTube link. Convert `[H:MM:SS]` to total seconds and append `&t={seconds}s` to the YouTube URL. For example, `[1:23:45]` → `&t=5025s`. **Legacy transcripts** (without `[timestamp]` prefixes) require estimation: calculate `secs_per_line = total_duration_seconds / (total_lines - 9)`, then `timestamp = (target_line - 9) × secs_per_line`. Always verify the computed timestamp does not exceed the video duration.
4. Always present the video title as a clickable link. When possible, provide a second timestamp link pointing to the relevant discussion segment.

## Workspace Structure

- `ships.json` — Canonical ship/vehicle list with manufacturers, aliases, and transcript correction mappings
- `ship_nicknames.md` — Community nicknames and common transcript errors
- `{year}/videos.md` — Video catalog per year
- `{year}/transcripts/*.md` — Individual video transcripts (include `**Video:**` URL and `**Date:**` in header)
- `{year}/video_list_{year}.json` — Video metadata (includes `id`, `title`, `upload_date`, `duration`)

## Rate Limiting

**All transcript download scripts MUST wait 2.5 minutes (150 seconds) between each YouTube API request.** Shorter delays will trigger an IP ban. This applies to:
- `build_year_catalog.py`, `build_2026_catalog.py`, `build_catalog.py`
- `download_transcripts.py`, `redownload_all.py`
- Any new script that fetches transcripts from YouTube

The constant is `DELAY_BETWEEN_REQUESTS = 150`. Never reduce this value.
