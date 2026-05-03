"""Fetch videos from RSI YouTube channel, filtered to 2026 only.

Uses --flat-playlist first to get IDs, then extracts upload dates.
Channel lists newest first, so we stop once we hit pre-2026.
"""
import yt_dlp
import json
import os
import sys
import time

def main():
    # Use daterange filter to only get 2026 videos
    # This requires non-flat extraction to get upload_date
    ydl_opts = {
        'quiet': True,
        'extract_flat': True,
        'dump_single_json': True,
    }

    print("Fetching full video list from @RobertsSpaceInd (flat)...")
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info('https://www.youtube.com/@RobertsSpaceInd/videos', download=False)

    all_entries = info.get('entries', [])
    print(f"Total videos on channel: {len(all_entries)}")

    # Now we need upload dates. The flat playlist doesn't have them.
    # YouTube channel /videos page lists newest first, so we can fetch
    # individual video metadata until we hit a video from before 2026.
    print("\nFetching upload dates to filter for 2026...")

    videos_2026 = []
    ydl_opts_full = {
        'quiet': True,
        'skip_download': True,
        'no_warnings': True,
    }

    for i, entry in enumerate(all_entries):
        vid = entry.get('id')
        title = entry.get('title', 'Unknown')

        try:
            with yt_dlp.YoutubeDL(ydl_opts_full) as ydl:
                vinfo = ydl.extract_info(f'https://www.youtube.com/watch?v={vid}', download=False)
                upload_date = vinfo.get('upload_date', '')  # YYYYMMDD format

                if upload_date and upload_date.startswith('2026'):
                    videos_2026.append({
                        'id': vid,
                        'title': vinfo.get('title', title),
                        'upload_date': upload_date,
                        'duration': vinfo.get('duration'),
                        'description': vinfo.get('description', ''),
                        'view_count': vinfo.get('view_count'),
                        'like_count': vinfo.get('like_count'),
                        'categories': vinfo.get('categories', []),
                        'tags': vinfo.get('tags', []),
                    })
                    print(f"  [{i+1}] 2026 - {upload_date} - {title}")
                elif upload_date and upload_date < '20260101':
                    # We've gone past 2026, stop
                    print(f"  [{i+1}] Reached {upload_date} - stopping (pre-2026)")
                    break
                else:
                    print(f"  [{i+1}] {upload_date} - {title} (skipped)")

        except Exception as e:
            print(f"  [{i+1}] Error fetching {vid}: {str(e)[:80]}")
            # Don't break on errors, might be a deleted video
            continue

        # Rate limit: 2s between requests to avoid IP ban
        time.sleep(2)

    print(f"\nFound {len(videos_2026)} videos from 2026")

    os.makedirs('2026', exist_ok=True)
    with open('2026/video_list_2026.json', 'w', encoding='utf-8') as f:
        json.dump(videos_2026, f, indent=2, ensure_ascii=False)

    print(f"Saved to 2026/video_list_2026.json")

if __name__ == '__main__':
    main()
