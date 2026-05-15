"""Fetch all videos from Roberts Space Industries YouTube channel and download transcripts."""
import yt_dlp
import json
import os
import sys
import time

# Data lives in youtube/ (parent of scripts/)
DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
os.chdir(DATA_DIR)

def fetch_video_list():
    """Fetch all video metadata from the channel."""
    ydl_opts = {
        'quiet': True,
        'extract_flat': True,
        'dump_single_json': True,
    }

    print("Fetching video list from @RobertsSpaceInd...")
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info('https://www.youtube.com/@RobertsSpaceInd/videos', download=False)

    entries = info.get('entries', [])
    print(f"Found {len(entries)} videos")
    return entries

def main():
    entries = fetch_video_list()

    # Save raw video list as JSON for reference
    os.makedirs('2026', exist_ok=True)
    with open('2026/video_list_raw.json', 'w', encoding='utf-8') as f:
        json.dump(entries, f, indent=2, ensure_ascii=False)

    print(f"\nSaved {len(entries)} video entries to 2026/video_list_raw.json")

    # Print first 5 as sample
    for entry in entries[:5]:
        vid = entry.get('id', 'unknown')
        title = entry.get('title', 'unknown')
        print(f"  {vid} | {title}")

if __name__ == '__main__':
    main()
