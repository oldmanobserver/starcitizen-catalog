"""Re-download all transcripts with embedded timestamps.

- Iterates all years with video_list_{year}.json
- Only re-downloads transcripts that haven't been updated yet
- Tracks progress in _redownload_progress.json
- Writes to a temp file first, then overwrites the transcript on success
- Conservative rate limiting (30s between requests, backoff on rate limit)

Usage: python redownload_all.py [--resume] [--year 2024]
"""
import json
import os
import sys
import time
import re
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import IpBlocked

PROGRESS_FILE = "_redownload_progress.json"
DELAY_BETWEEN_REQUESTS = 150
RATE_LIMIT_WAIT = 300
MAX_RETRIES = 3


def format_duration(seconds):
    if seconds is None:
        return "unknown"
    seconds = int(seconds)
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    return f"{h}:{m:02d}:{s:02d}" if h > 0 else f"{m}:{s:02d}"


def format_timestamp(seconds):
    total = int(seconds)
    h = total // 3600
    m = (total % 3600) // 60
    s = total % 60
    return f"[{h}:{m:02d}:{s:02d}]" if h > 0 else f"[{m:02d}:{s:02d}]"


def format_date(date_str):
    if not date_str or len(date_str) != 8:
        return date_str or "unknown"
    return f"{date_str[:4]}-{date_str[4:6]}-{date_str[6:8]}"


def already_has_timestamps(transcript_path):
    """Check if a transcript already has [MM:SS] or [H:MM:SS] timestamps."""
    if not os.path.exists(transcript_path):
        return False
    try:
        with open(transcript_path, 'r', encoding='utf-8') as f:
            for i, line in enumerate(f):
                if i < 8:  # skip header
                    continue
                if i > 15:  # only check first few content lines
                    break
                if re.match(r'^\[\d+:\d{2}(:\d{2})?\]', line.strip()):
                    return True
    except Exception:
        pass
    return False


def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, 'r') as f:
            return json.load(f)
    return {"completed": [], "failed": [], "skipped_no_transcript": []}


def save_progress(progress):
    with open(PROGRESS_FILE, 'w') as f:
        json.dump(progress, f, indent=2)


def gather_all_videos(filter_year=None):
    """Collect all videos from all year folders."""
    videos = []
    for year_dir in sorted(os.listdir('.')):
        if not os.path.isdir(year_dir) or not year_dir.isdigit():
            continue
        if filter_year and year_dir != filter_year:
            continue
        video_file = os.path.join(year_dir, f'video_list_{year_dir}.json')
        if not os.path.exists(video_file):
            continue
        with open(video_file, 'r', encoding='utf-8') as f:
            year_videos = json.load(f)
        for v in year_videos:
            v['_year'] = year_dir
        videos.extend(year_videos)
    return videos


def main():
    filter_year = None
    for i, arg in enumerate(sys.argv[1:], 1):
        if arg == '--year' and i < len(sys.argv) - 1:
            filter_year = sys.argv[i + 1]

    all_videos = gather_all_videos(filter_year)
    progress = load_progress()
    completed_set = set(progress["completed"])
    failed_set = set(progress.get("failed", []))
    skipped_set = set(progress.get("skipped_no_transcript", []))

    # Filter to only videos that need work
    todo = []
    already_done = 0
    for v in all_videos:
        vid = v['id']
        year = v['_year']
        transcript_path = os.path.join(year, 'transcripts', f'{vid}.md')

        if vid in completed_set:
            already_done += 1
            continue

        # Check if file already has timestamps (e.g. freshly downloaded)
        if already_has_timestamps(transcript_path):
            completed_set.add(vid)
            progress["completed"].append(vid)
            already_done += 1
            continue

        todo.append(v)

    print(f"Total videos across all years: {len(all_videos)}")
    print(f"Already done (timestamped): {already_done}")
    print(f"To download: {len(todo)}")
    if filter_year:
        print(f"Filtering to year: {filter_year}")
    print()

    if not todo:
        print("Nothing to do!")
        save_progress(progress)
        return

    api = YouTubeTranscriptApi()
    success = 0
    failed = 0
    skipped = 0

    for i, v in enumerate(todo, 1):
        vid = v['id']
        title = v.get('title', 'Unknown')
        year = v['_year']
        transcript_path = os.path.join(year, 'transcripts', f'{vid}.md')
        temp_path = transcript_path + '.tmp'

        downloaded = False
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                transcript = api.fetch(vid, languages=['en'])

                lines = [
                    f"# {title}",
                    "",
                    f"**Video:** https://www.youtube.com/watch?v={vid}",
                    f"**Date:** {format_date(v.get('upload_date', ''))}",
                    f"**Duration:** {format_duration(v.get('duration'))}",
                    "",
                    "## Transcript",
                    "",
                ]
                for snippet in transcript.snippets:
                    text = snippet.text.strip()
                    if text:
                        ts = format_timestamp(snippet.start)
                        lines.append(f"{ts} {text}")

                # Write to temp file first
                os.makedirs(os.path.dirname(transcript_path), exist_ok=True)
                with open(temp_path, 'w', encoding='utf-8') as f:
                    f.write("\n".join(lines) + "\n")

                # Only overwrite on success
                if os.path.exists(transcript_path):
                    os.replace(temp_path, transcript_path)
                else:
                    os.rename(temp_path, transcript_path)

                progress["completed"].append(vid)
                completed_set.add(vid)
                success += 1
                downloaded = True
                print(f"  [{i}/{len(todo)}] OK  {year}/{vid} - {title[:60]}")
                break

            except IpBlocked:
                wait = RATE_LIMIT_WAIT * attempt
                print(f"  [{i}/{len(todo)}] RATE LIMITED - waiting {wait}s (attempt {attempt}/{MAX_RETRIES})...")
                time.sleep(wait)

            except Exception as e:
                error_msg = str(e)[:100]
                if 'Could not retrieve' in error_msg or 'No transcripts' in error_msg:
                    # No transcript available for this video
                    progress.setdefault("skipped_no_transcript", []).append(vid)
                    skipped_set.add(vid)
                    skipped += 1
                    print(f"  [{i}/{len(todo)}] SKIP {year}/{vid} - no transcript available")
                    downloaded = True  # don't retry
                else:
                    failed += 1
                    if vid not in failed_set:
                        progress.setdefault("failed", []).append(vid)
                        failed_set.add(vid)
                    print(f"  [{i}/{len(todo)}] FAIL {year}/{vid} - {error_msg[:60]}")
                    downloaded = True
                break

        if not downloaded:
            failed += 1
            if vid not in failed_set:
                progress.setdefault("failed", []).append(vid)
                failed_set.add(vid)
            print(f"  [{i}/{len(todo)}] FAIL {year}/{vid} - gave up after {MAX_RETRIES} retries")

        # Clean up temp file if it still exists
        if os.path.exists(temp_path):
            try:
                os.remove(temp_path)
            except OSError:
                pass

        # Save progress every 10 downloads
        if (success + failed + skipped) % 10 == 0:
            save_progress(progress)

        # Rate limit
        if i < len(todo):
            time.sleep(DELAY_BETWEEN_REQUESTS)

    save_progress(progress)

    print(f"\n=== COMPLETE ===")
    print(f"  Success:  {success}")
    print(f"  Skipped:  {skipped} (no transcript available)")
    print(f"  Failed:   {failed}")
    print(f"  Progress saved to {PROGRESS_FILE}")


if __name__ == '__main__':
    main()
