"""Build Star Citizen video catalog with transcripts from the RSI YouTube channel."""
import json
import os
import sys
import time
import re

def sanitize_filename(title):
    """Create a safe filename from a video title."""
    # Remove or replace problematic characters
    safe = re.sub(r'[<>:"/\\|?*]', '', title)
    safe = safe.strip('. ')
    # Truncate to reasonable length
    if len(safe) > 80:
        safe = safe[:80].strip()
    return safe

def format_duration(seconds):
    """Format duration in seconds to HH:MM:SS or MM:SS."""
    if seconds is None:
        return "unknown"
    seconds = int(seconds)
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    return f"{minutes}:{secs:02d}"

def build_video_index(entries):
    """Create a markdown index of all videos."""
    lines = []
    lines.append("# Star Citizen - Roberts Space Industries YouTube Videos")
    lines.append("")
    lines.append(f"**Channel:** [Roberts Space Industries](https://www.youtube.com/@RobertsSpaceInd)")
    lines.append(f"**Total Videos:** {len(entries)}")
    lines.append(f"**Last Updated:** {time.strftime('%Y-%m-%d')}")
    lines.append("")
    lines.append("## Video List")
    lines.append("")
    lines.append("| # | Title | Duration | Video ID | Transcript |")
    lines.append("|---|-------|----------|----------|------------|")

    for i, entry in enumerate(entries, 1):
        vid = entry.get('id', 'unknown')
        title = entry.get('title', 'Unknown Title')
        duration = format_duration(entry.get('duration'))
        url = f"https://www.youtube.com/watch?v={vid}"
        safe_name = sanitize_filename(title)
        transcript_file = f"transcripts/{vid}.md"

        # Escape pipe chars in title for markdown table
        title_escaped = title.replace('|', '\\|')

        lines.append(f"| {i} | [{title_escaped}]({url}) | {duration} | `{vid}` | [transcript]({transcript_file}) |")

    return "\n".join(lines) + "\n"

def download_transcripts(entries, transcript_dir):
    """Download transcripts for all videos."""
    from youtube_transcript_api import YouTubeTranscriptApi

    os.makedirs(transcript_dir, exist_ok=True)
    ytt_api = YouTubeTranscriptApi()

    # Track progress
    total = len(entries)
    success = 0
    failed = 0
    skipped = 0
    failed_videos = []

    # Load progress file if it exists (for resuming)
    progress_file = os.path.join(transcript_dir, '_progress.json')
    completed_ids = set()
    if os.path.exists(progress_file):
        with open(progress_file, 'r') as f:
            completed_ids = set(json.load(f))
        print(f"Resuming: {len(completed_ids)} transcripts already downloaded")

    for i, entry in enumerate(entries, 1):
        vid = entry.get('id', 'unknown')
        title = entry.get('title', 'Unknown')
        transcript_path = os.path.join(transcript_dir, f"{vid}.md")

        # Skip if already done
        if vid in completed_ids:
            skipped += 1
            continue

        try:
            transcript = ytt_api.fetch(vid, languages=['en'])

            # Build markdown file with transcript
            lines = []
            lines.append(f"# {title}")
            lines.append("")
            lines.append(f"**Video:** https://www.youtube.com/watch?v={vid}")
            lines.append(f"**Duration:** {format_duration(entry.get('duration'))}")
            lines.append("")
            lines.append("## Transcript")
            lines.append("")

            for snippet in transcript.snippets:
                text = snippet.text.strip()
                if text:
                    lines.append(text)

            with open(transcript_path, 'w', encoding='utf-8') as f:
                f.write("\n".join(lines) + "\n")

            completed_ids.add(vid)
            success += 1

            if i % 10 == 0 or i == total:
                # Save progress periodically
                with open(progress_file, 'w') as f:
                    json.dump(list(completed_ids), f)
                print(f"  [{i}/{total}] Downloaded {success} transcripts, {failed} failed, {skipped} skipped")

        except Exception as e:
            failed += 1
            error_msg = str(e)
            # Truncate long error messages
            if len(error_msg) > 100:
                error_msg = error_msg[:100] + "..."
            failed_videos.append({'id': vid, 'title': title, 'error': error_msg})

            if i % 50 == 0:
                print(f"  [{i}/{total}] Progress: {success} ok, {failed} failed, {skipped} skipped")

        # Small delay to be respectful to YouTube
        time.sleep(0.3)

    # Final progress save
    with open(progress_file, 'w') as f:
        json.dump(list(completed_ids), f)

    # Save failed list
    if failed_videos:
        failed_path = os.path.join(transcript_dir, '_failed.json')
        with open(failed_path, 'w', encoding='utf-8') as f:
            json.dump(failed_videos, f, indent=2, ensure_ascii=False)

    return success, failed, skipped, failed_videos

def main():
    # Load video list
    raw_path = '2026/video_list_raw.json'
    if not os.path.exists(raw_path):
        print(f"Error: {raw_path} not found. Run fetch_videos.py first.")
        sys.exit(1)

    with open(raw_path, 'r', encoding='utf-8') as f:
        entries = json.load(f)

    print(f"Loaded {len(entries)} videos")

    # Build markdown index
    index_content = build_video_index(entries)
    index_path = '2026/videos.md'
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    print(f"Created video index: {index_path}")

    # Download transcripts
    transcript_dir = '2026/transcripts'
    print(f"\nDownloading transcripts to {transcript_dir}/...")
    success, failed, skipped, failed_videos = download_transcripts(entries, transcript_dir)

    print(f"\n=== COMPLETE ===")
    print(f"  Success: {success}")
    print(f"  Failed:  {failed}")
    print(f"  Skipped: {skipped}")
    print(f"  Total:   {len(entries)}")

    if failed_videos:
        print(f"\nFailed videos saved to {transcript_dir}/_failed.json")
        print("Common reasons: no captions available, video is private/deleted")

if __name__ == '__main__':
    main()
