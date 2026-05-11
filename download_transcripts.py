"""Download transcripts using yt-dlp (more resilient to rate limiting than youtube-transcript-api)."""
import json
import os
import re
import subprocess
import sys
import time
import glob

PYTHON = sys.executable
TRANSCRIPT_DIR = "2026/transcripts"
VIDEO_LIST = "2026/video_list_raw.json"
PROGRESS_FILE = os.path.join(TRANSCRIPT_DIR, "_progress.json")
FAILED_FILE = os.path.join(TRANSCRIPT_DIR, "_failed.json")
# yt-dlp downloads .vtt files here temporarily
YT_DLP_TEMP = os.path.join(TRANSCRIPT_DIR, "_ytdlp_temp")


def sanitize_filename(title):
    safe = re.sub(r'[<>:"/\\|?*]', '', title)
    return safe.strip('. ')[:80].strip()


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


def format_vtt_timestamp(ts_str):
    """Convert VTT timestamp (HH:MM:SS.mmm) to [H:MM:SS] or [MM:SS]."""
    m = re.match(r'(\d+):(\d+):(\d+)', ts_str)
    if not m:
        return None
    hours, minutes, secs = int(m.group(1)), int(m.group(2)), int(m.group(3))
    if hours > 0:
        return f"[{hours}:{minutes:02d}:{secs:02d}]"
    return f"[{minutes:02d}:{secs:02d}]"


def vtt_to_text(vtt_content):
    """Extract timestamped text from VTT subtitle content."""
    lines = []
    current_ts = None
    for line in vtt_content.split('\n'):
        line = line.strip()
        # Skip VTT headers and empty lines
        if not line:
            continue
        if line.startswith('WEBVTT'):
            continue
        if line.startswith('Kind:') or line.startswith('Language:'):
            continue
        if '-->' in line:
            # Parse start timestamp from "00:29:14.000 --> 00:29:23.000"
            current_ts = format_vtt_timestamp(line.split('-->')[0].strip())
            continue
        if re.match(r'^\d+$', line):
            continue
        # Remove HTML tags
        text = re.sub(r'<[^>]+>', '', line)
        # Remove duplicate lines (VTT often repeats lines)
        if text and (not lines or lines[-1].split('] ', 1)[-1] != text):
            prefix = f"{current_ts} " if current_ts else ""
            lines.append(f"{prefix}{text}")
    return lines


def download_transcript_ytdlp(vid):
    """Download subtitles for a single video using yt-dlp."""
    os.makedirs(YT_DLP_TEMP, exist_ok=True)
    output_template = os.path.join(YT_DLP_TEMP, f"{vid}")
    url = f"https://www.youtube.com/watch?v={vid}"

    # Try manual subs first, then auto-generated
    cmd = [
        PYTHON, "-m", "yt_dlp",
        "--skip-download",
        "--write-subs",
        "--write-auto-subs",
        "--sub-langs", "en",
        "--sub-format", "vtt",
        "--no-overwrites",
        "-o", output_template,
        "--quiet",
        "--no-warnings",
        url
    ]

    result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)

    # Find the downloaded subtitle file
    patterns = [
        os.path.join(YT_DLP_TEMP, f"{vid}.en.vtt"),
        os.path.join(YT_DLP_TEMP, f"{vid}.en-orig.vtt"),
    ]
    # Also check for any .vtt file with this video ID
    all_vtts = glob.glob(os.path.join(YT_DLP_TEMP, f"{vid}*.vtt"))

    vtt_path = None
    for p in patterns:
        if os.path.exists(p):
            vtt_path = p
            break
    if vtt_path is None and all_vtts:
        vtt_path = all_vtts[0]

    if vtt_path is None:
        return None

    with open(vtt_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean up temp file
    for vtt in all_vtts:
        try:
            os.remove(vtt)
        except OSError:
            pass

    return vtt_to_text(content)


def main():
    with open(VIDEO_LIST, 'r', encoding='utf-8') as f:
        entries = json.load(f)

    os.makedirs(TRANSCRIPT_DIR, exist_ok=True)

    # Load progress
    completed_ids = set()
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, 'r') as f:
            completed_ids = set(json.load(f))

    total = len(entries)
    success = 0
    failed = 0
    skipped = 0
    failed_videos = []

    print(f"Total videos: {total}")
    print(f"Already completed: {len(completed_ids)}")
    print(f"Remaining: {total - len(completed_ids)}")
    print()

    for i, entry in enumerate(entries, 1):
        vid = entry.get('id', 'unknown')
        title = entry.get('title', 'Unknown')

        if vid in completed_ids:
            skipped += 1
            continue

        try:
            text_lines = download_transcript_ytdlp(vid)

            if text_lines is None or len(text_lines) == 0:
                failed += 1
                failed_videos.append({'id': vid, 'title': title, 'error': 'No subtitles available'})
                if (success + failed) % 50 == 0:
                    print(f"  [{i}/{total}] {success} ok, {failed} failed, {skipped} skipped")
                continue

            # Write markdown transcript
            transcript_path = os.path.join(TRANSCRIPT_DIR, f"{vid}.md")
            lines = [
                f"# {title}",
                "",
                f"**Video:** https://www.youtube.com/watch?v={vid}",
                f"**Duration:** {format_duration(entry.get('duration'))}",
                "",
                "## Transcript",
                "",
            ]
            lines.extend(text_lines)

            with open(transcript_path, 'w', encoding='utf-8') as f:
                f.write("\n".join(lines) + "\n")

            completed_ids.add(vid)
            success += 1

        except Exception as e:
            failed += 1
            error_msg = str(e)[:200]
            failed_videos.append({'id': vid, 'title': title, 'error': error_msg})

        # Save progress every 10 successful downloads
        if (success + failed) % 10 == 0:
            with open(PROGRESS_FILE, 'w') as f:
                json.dump(list(completed_ids), f)
            print(f"  [{i}/{total}] {success} ok, {failed} failed, {skipped} skipped")

        # 2.5 minutes between transcript downloads (avoid IP ban)
        time.sleep(150)

    # Final save
    with open(PROGRESS_FILE, 'w') as f:
        json.dump(list(completed_ids), f)

    if failed_videos:
        with open(FAILED_FILE, 'w', encoding='utf-8') as f:
            json.dump(failed_videos, f, indent=2, ensure_ascii=False)

    print(f"\n=== COMPLETE ===")
    print(f"  Success:  {success}")
    print(f"  Failed:   {failed}")
    print(f"  Skipped:  {skipped}")
    print(f"  Total:    {total}")


if __name__ == '__main__':
    main()
