"""Build the 2026 video index and download transcripts.

Uses youtube-transcript-api with conservative rate limiting:
- 30s between successful requests
- 5-minute wait + retry on rate limit (429)
- Skips already-downloaded transcripts (safe to re-run)
"""
import json
import os
import time
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import IpBlocked

DELAY_BETWEEN_REQUESTS = 30   # seconds between successful downloads
RATE_LIMIT_WAIT = 300         # 5 minutes if we hit a 429
MAX_RETRIES = 5               # max retries per video on rate limit


def format_duration(seconds):
    if seconds is None:
        return "unknown"
    seconds = int(seconds)
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    return f"{minutes}:{secs:02d}"


def format_date(date_str):
    """Convert YYYYMMDD to YYYY-MM-DD."""
    if not date_str or len(date_str) != 8:
        return date_str or "unknown"
    return f"{date_str[:4]}-{date_str[4:6]}-{date_str[6:8]}"


def build_index(videos):
    """Create markdown index of 2026 videos."""
    lines = [
        "# Star Citizen - RSI YouTube Videos (2026)",
        "",
        f"**Channel:** [Roberts Space Industries](https://www.youtube.com/@RobertsSpaceInd)",
        f"**Total Videos:** {len(videos)}",
        f"**Last Updated:** {time.strftime('%Y-%m-%d')}",
        "",
        "## Video List",
        "",
        "| # | Date | Title | Duration | Transcript |",
        "|---|------|-------|----------|------------|",
    ]

    for i, v in enumerate(videos, 1):
        vid = v['id']
        title = v['title'].replace('|', '\\|')
        date = format_date(v.get('upload_date', ''))
        duration = format_duration(v.get('duration'))
        url = f"https://www.youtube.com/watch?v={vid}"
        transcript_link = f"[transcript](transcripts/{vid}.md)"

        lines.append(f"| {i} | {date} | [{title}]({url}) | {duration} | {transcript_link} |")

    return "\n".join(lines) + "\n"


def download_transcripts(videos, transcript_dir):
    """Download transcripts with conservative rate limiting."""
    os.makedirs(transcript_dir, exist_ok=True)
    ytt_api = YouTubeTranscriptApi()

    success = 0
    failed = 0
    skipped = 0
    failed_list = []

    for i, v in enumerate(videos, 1):
        vid = v['id']
        title = v['title']
        transcript_path = os.path.join(transcript_dir, f"{vid}.md")

        # Skip if already downloaded
        if os.path.exists(transcript_path):
            print(f"  [{i}/{len(videos)}] SKIP (exists) - {title}")
            skipped += 1
            continue

        # Try with retries on rate limit
        downloaded = False
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                transcript = ytt_api.fetch(vid, languages=['en'])

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
                        lines.append(text)

                with open(transcript_path, 'w', encoding='utf-8') as f:
                    f.write("\n".join(lines) + "\n")

                success += 1
                downloaded = True
                print(f"  [{i}/{len(videos)}] OK - {title}")
                break

            except IpBlocked:
                wait = RATE_LIMIT_WAIT * attempt
                print(f"  [{i}/{len(videos)}] RATE LIMITED - waiting {wait}s (attempt {attempt}/{MAX_RETRIES})...")
                time.sleep(wait)

            except Exception as e:
                error_msg = str(e)[:100]
                failed += 1
                failed_list.append({'id': vid, 'title': title, 'error': error_msg})
                print(f"  [{i}/{len(videos)}] FAIL - {title}: {error_msg[:60]}")
                downloaded = True  # don't retry non-rate-limit errors
                break

        if not downloaded:
            failed += 1
            failed_list.append({'id': vid, 'title': title, 'error': 'Rate limited after max retries'})
            print(f"  [{i}/{len(videos)}] FAIL - {title}: gave up after {MAX_RETRIES} retries")

        # Wait between successful requests to stay under the radar
        if i < len(videos):
            print(f"           Waiting {DELAY_BETWEEN_REQUESTS}s before next request...")
            time.sleep(DELAY_BETWEEN_REQUESTS)

    return success, failed, skipped, failed_list


def main():
    video_file = '2026/video_list_2026.json'
    with open(video_file, 'r', encoding='utf-8') as f:
        videos = json.load(f)

    print(f"Loaded {len(videos)} videos from 2026\n")

    # Build index
    index = build_index(videos)
    with open('2026/videos.md', 'w', encoding='utf-8') as f:
        f.write(index)
    print("Created 2026/videos.md\n")

    # Download transcripts
    print("Downloading transcripts (30s between each to avoid rate limits)...")
    success, failed, skipped, failed_list = download_transcripts(videos, '2026/transcripts')

    print(f"\n=== DONE ===")
    print(f"  Success: {success}")
    print(f"  Skipped: {skipped}")
    print(f"  Failed:  {failed}")

    if failed_list:
        with open('2026/transcripts/_failed.json', 'w', encoding='utf-8') as f:
            json.dump(failed_list, f, indent=2, ensure_ascii=False)
        print(f"  Failed list saved to 2026/transcripts/_failed.json")


if __name__ == '__main__':
    main()
