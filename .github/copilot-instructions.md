# Star Citizen Catalog - Copilot Instructions

## Ship Name Corrections

This workspace contains Star Citizen YouTube video transcripts. Auto-generated transcripts frequently misspell or mishear ship and vehicle names.

**Always consult `ships.json`** before reporting ship/vehicle names from transcripts. Specifically:

1. Check the `transcript_corrections` map in `ships.json` to fix known misheard names (e.g., "Starlancer Attack" → "MISC Starlancer TAC", "Tibberon" → "Aegis Tiburon", "Starlight" → "MISC Starlite").
2. Use the canonical ship names from the `manufacturers` section of `ships.json` as the authoritative reference.
3. Also check `ship_nicknames.md` for community nicknames and known aliases.
4. When listing ships from a transcript, always present the **corrected official name**, and optionally note the transcript's original wording if it differs.

## Workspace Structure

- `ships.json` — Canonical ship/vehicle list with manufacturers, aliases, and transcript correction mappings
- `ship_nicknames.md` — Community nicknames and common transcript errors
- `{year}/videos.md` — Video catalog per year
- `{year}/transcripts/*.md` — Individual video transcripts
- `{year}/video_list_{year}.json` — Video metadata
