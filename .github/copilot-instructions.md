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
3. **Timestamp linking:** Estimate the timestamp from the transcript line number. The transcript body starts after the metadata header (~line 9). Calculate seconds-per-line for each video: parse the `**Duration:**` header (H:MM:SS) to get total seconds, count total file lines, then `secs_per_line = total_seconds / (total_lines - 9)`. Timestamp = `(target_line - 9) × secs_per_line`. Append `&t={seconds}s` to the YouTube URL. **Always verify the computed timestamp does not exceed the video duration.** For example, a 1:04:02 video with 1500 lines → `secs_per_line = 3842 / 1491 ≈ 2.58`, so line 320 ≈ `(320 - 9) × 2.58 = 802s` → `&t=802s`.
4. Always present the video title as a clickable link. When possible, provide a second timestamp link pointing to the relevant discussion segment.

## Workspace Structure

- `ships.json` — Canonical ship/vehicle list with manufacturers, aliases, and transcript correction mappings
- `ship_nicknames.md` — Community nicknames and common transcript errors
- `{year}/videos.md` — Video catalog per year
- `{year}/transcripts/*.md` — Individual video transcripts (include `**Video:**` URL and `**Date:**` in header)
- `{year}/video_list_{year}.json` — Video metadata (includes `id`, `title`, `upload_date`, `duration`)
