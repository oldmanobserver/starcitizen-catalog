"""
Download Star Citizen patch notes from Spectrum forum.

Uses the Spectrum API to fetch thread listings and content from the
Patch Notes forum (channel_id 190048), converts DraftJS content blocks
to Markdown, and saves them organized by year and release stage:

    Patch Notes/{year}/LIVE/
    Patch Notes/{year}/PTU/

Evocati / ETF NDA threads are intentionally skipped — we do not keep
NDA content in this repository.

Usage:
    python download_patch_notes.py [--dry-run] [--year YEAR]
"""

import argparse
import json
import os
import re
import sys
import time
from datetime import datetime, timezone

import requests

BASE_URL = "https://robertsspaceindustries.com"
API_BASE = f"{BASE_URL}/api/spectrum"
CHANNEL_ID = "190048"  # Patch Notes forum
DELAY_BETWEEN_REQUESTS = 2  # seconds between API calls (be polite)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.dirname(SCRIPT_DIR)  # parent = Patch Notes/
PROGRESS_FILE = os.path.join(SCRIPT_DIR, "_patch_notes_progress.json")


def classify_thread(subject: str) -> str:
    """Classify a thread as LIVE, PTU, or Evocati based on its title.

    Evocati is detected so the downloader can skip it; we don't keep NDA
    content in the repo.
    """
    s = subject.lower()
    # Evocati / ETF / Evo NDA
    if any(tag in s for tag in ["evocati", "etf nda", "evo nda", "[closed]"]):
        return "Evocati"
    # LIVE releases and hotfixes
    if "live" in s or "hotfix" in s:
        return "LIVE"
    # Everything else is PTU (Wave 1/2/3, All Waves, All Backers, etc.)
    return "PTU"


def extract_year_from_timestamp(ts: int) -> int:
    """Convert Unix timestamp to year."""
    return datetime.fromtimestamp(ts, tz=timezone.utc).year


def slugify_filename(subject: str) -> str:
    """Convert a thread subject to a safe filename."""
    # Remove bracket tags like [Evocati NDA], [Wave 1], etc.
    clean = re.sub(r"\[.*?\]\s*", "", subject)
    # Replace non-alphanumeric with hyphens
    clean = re.sub(r"[^a-zA-Z0-9]+", "-", clean).strip("-").lower()
    # Collapse multiple hyphens
    clean = re.sub(r"-+", "-", clean)
    return clean[:120]  # cap length


def draftjs_to_markdown(content_blocks: list) -> str:
    """Convert Spectrum DraftJS content blocks to Markdown text."""
    if not content_blocks:
        return ""

    # Collect blocks and entities from all text-type content blocks
    blocks_data = []
    entity_map = {}
    for cb in content_blocks:
        if not isinstance(cb, dict):
            continue
        cb_type = cb.get("type", "text")
        cb_data = cb.get("data", {})
        if isinstance(cb_data, list):
            cb_data = {}
        if cb_type == "text" and isinstance(cb_data, dict):
            blocks_data.extend(cb_data.get("blocks", []))
            emap = cb_data.get("entityMap", {})
            if isinstance(emap, dict):
                entity_map.update(emap)
    lines = []

    for block in blocks_data:
        text = block.get("text", "")
        block_type = block.get("type", "unstyled")
        depth = block.get("depth", 0)

        # Apply entity ranges (links, etc.)
        entity_ranges = block.get("entityRanges", [])
        if entity_ranges and entity_map:
            # Process from end to start so offsets don't shift
            sorted_ranges = sorted(entity_ranges, key=lambda r: r["offset"], reverse=True)
            for er in sorted_ranges:
                entity = entity_map.get(str(er["key"]), {})
                if entity.get("type") == "LINK":
                    url = entity.get("data", {}).get("url", "")
                    start = er["offset"]
                    end = start + er["length"]
                    link_text = text[start:end]
                    text = text[:start] + f"[{link_text}]({url})" + text[end:]

        # Apply inline styles (bold, italic)
        inline_styles = block.get("inlineStyleRanges", [])
        if inline_styles:
            sorted_styles = sorted(inline_styles, key=lambda s: s["offset"], reverse=True)
            for style in sorted_styles:
                start = style["offset"]
                end = start + style["length"]
                styled_text = text[start:end]
                if style["style"] == "BOLD":
                    text = text[:start] + f"**{styled_text}**" + text[end:]
                elif style["style"] == "ITALIC":
                    text = text[:start] + f"*{styled_text}*" + text[end:]

        # Convert block types to markdown
        indent = "  " * depth
        if block_type == "header-one":
            lines.append(f"# {text}")
        elif block_type == "header-two":
            lines.append(f"## {text}")
        elif block_type == "header-three":
            lines.append(f"### {text}")
        elif block_type == "blockquote":
            lines.append(f"> {text}")
        elif block_type == "unordered-list-item":
            lines.append(f"{indent}- {text}")
        elif block_type == "ordered-list-item":
            lines.append(f"{indent}1. {text}")
        elif block_type == "code-block":
            lines.append(f"```\n{text}\n```")
        else:
            # unstyled or unknown
            lines.append(text)

    return "\n".join(lines)


class SpectrumClient:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": f"{BASE_URL}/spectrum/community/SC/forum/{CHANNEL_ID}",
        })

    def get_threads(self, page=1, sort="new"):
        """Fetch a page of threads from the Patch Notes forum."""
        resp = self.session.post(
            f"{API_BASE}/forum/channel/threads",
            json={"channel_id": CHANNEL_ID, "page": page, "sort": sort, "label_id": None},
        )
        resp.raise_for_status()
        data = resp.json()
        if not data.get("success"):
            raise RuntimeError(f"API error fetching threads page {page}: {data}")
        return data["data"]["threads"]

    def get_all_threads(self):
        """Fetch all threads from the forum, paginating through all pages."""
        all_threads = []
        seen_ids = set()
        page = 1
        while True:
            print(f"  Fetching thread list page {page}...")
            threads = self.get_threads(page=page, sort="newest")
            if not threads:
                break
            new_count = 0
            for t in threads:
                if t["id"] not in seen_ids:
                    seen_ids.add(t["id"])
                    all_threads.append(t)
                    new_count += 1
            print(f"    Got {new_count} new threads (total: {len(all_threads)}, {len(threads) - new_count} dupes skipped)")
            if new_count == 0:  # only pinned dupes left
                break
            page += 1
            time.sleep(DELAY_BETWEEN_REQUESTS)
        return all_threads

    def get_thread_content(self, slug):
        """Fetch the first post content of a thread."""
        resp = self.session.post(
            f"{API_BASE}/forum/thread/nested",
            json={"slug": slug, "sort": "votes", "target_reply_id": None},
        )
        resp.raise_for_status()
        data = resp.json()
        if not data.get("success"):
            raise RuntimeError(f"API error fetching thread {slug}: {data}")
        return data["data"]


def load_progress():
    """Load download progress from file."""
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {"downloaded": []}


def save_progress(progress):
    """Save download progress to file."""
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(progress, f, indent=2)


def save_patch_note(year, category, filename, subject, date_str, url, markdown_content):
    """Save a patch note as a markdown file."""
    folder = os.path.join(OUTPUT_DIR, str(year), category)
    os.makedirs(folder, exist_ok=True)
    filepath = os.path.join(folder, f"{filename}.md")

    header = f"""**Title:** {subject}
**Date:** {date_str}
**URL:** {url}

---

"""
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(header + markdown_content)
    return filepath


def main():
    parser = argparse.ArgumentParser(description="Download Star Citizen patch notes from Spectrum")
    parser.add_argument("--dry-run", action="store_true", help="List threads without downloading")
    parser.add_argument("--year", type=int, help="Only download threads from this year")
    parser.add_argument("--resume", action="store_true", help="Skip already-downloaded threads")
    args = parser.parse_args()

    client = SpectrumClient()
    progress = load_progress() if args.resume else {"downloaded": []}

    # Step 1: Get all thread listings
    print("Fetching thread listings from Patch Notes forum...")
    all_threads = client.get_all_threads()
    print(f"\nFound {len(all_threads)} total threads.\n")

    # Step 2: Classify and organize
    classified = {"LIVE": [], "PTU": [], "Evocati": []}
    for t in all_threads:
        category = classify_thread(t["subject"])
        year = extract_year_from_timestamp(t["time_created"])
        t["_category"] = category
        t["_year"] = year
        classified[category].append(t)

    print(f"Classification: LIVE={len(classified['LIVE'])}, PTU={len(classified['PTU'])}, Evocati={len(classified['Evocati'])} (skipped)")

    # Drop Evocati threads — NDA content is not kept in this repo.
    skipped_evocati = len(classified["Evocati"])
    all_threads = [t for t in all_threads if t["_category"] != "Evocati"]
    if skipped_evocati:
        print(f"Skipping {skipped_evocati} Evocati/NDA threads")

    # Filter by year if requested
    if args.year:
        all_threads = [t for t in all_threads if t["_year"] == args.year]
        print(f"Filtered to {len(all_threads)} threads for year {args.year}")

    if args.dry_run:
        print("\n--- DRY RUN: Thread listing ---")
        for t in all_threads:
            date = datetime.fromtimestamp(t["time_created"], tz=timezone.utc).strftime("%Y-%m-%d")
            print(f"  [{t['_category']:8s}] {t['_year']} | {date} | {t['subject']}")
        return

    # Step 3: Download each thread
    downloaded = 0
    errors = 0
    for i, t in enumerate(all_threads):
        slug = t["slug"]
        subject = t["subject"]
        category = t["_category"]
        year = t["_year"]

        if args.resume and slug in progress["downloaded"]:
            print(f"  [{i+1}/{len(all_threads)}] SKIP (already downloaded): {subject}")
            continue

        date_str = datetime.fromtimestamp(t["time_created"], tz=timezone.utc).strftime("%Y-%m-%d")
        url = f"{BASE_URL}/spectrum/community/SC/forum/{CHANNEL_ID}/thread/{slug}"
        filename = slugify_filename(subject)

        print(f"  [{i+1}/{len(all_threads)}] Downloading: {subject}")
        try:
            thread_data = client.get_thread_content(slug)
            content_blocks = thread_data.get("content_blocks", [])
            markdown = draftjs_to_markdown(content_blocks)

            filepath = save_patch_note(year, category, filename, subject, date_str, url, markdown)
            print(f"    -> Saved to {os.path.relpath(filepath, SCRIPT_DIR)}")

            progress["downloaded"].append(slug)
            save_progress(progress)
            downloaded += 1

        except Exception as e:
            print(f"    ERROR: {e}")
            errors += 1

        time.sleep(DELAY_BETWEEN_REQUESTS)

    print(f"\nDone! Downloaded: {downloaded}, Errors: {errors}, Skipped: {len(all_threads) - downloaded - errors}")


if __name__ == "__main__":
    main()
