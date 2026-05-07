"""Fetch videos from RSI YouTube channel for a specific year.

Usage: python fetch_year.py <year>
Example: python fetch_year.py 2025

Uses --flat-playlist first to get IDs, then extracts upload dates.
Channel lists newest first, so we skip until we reach the target year,
then stop once we go past it.
"""
import yt_dlp
import json
import os
import sys
import time


def main():
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <year>")
        print(f"Example: {sys.argv[0]} 2025")
        sys.exit(1)

    year = sys.argv[1]
    if not year.isdigit() or len(year) != 4:
        print(f"Error: '{year}' is not a valid year")
        sys.exit(1)

    year_start = f"{year}0101"
    year_end = f"{year}1231"

    ydl_opts = {
        'quiet': True,
        'extract_flat': True,
        'dump_single_json': True,
    }

    print(f"Fetching full video list from @RobertsSpaceInd (flat)...")
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info('https://www.youtube.com/@RobertsSpaceInd/videos', download=False)

    all_entries = info.get('entries', [])
    print(f"Total videos on channel: {len(all_entries)}")
    print(f"\nFetching upload dates to filter for {year}...")

    videos = []
    ydl_opts_full = {
        'quiet': True,
        'skip_download': True,
        'no_warnings': True,
    }

    past_target = False
    for i, entry in enumerate(all_entries):
        vid = entry.get('id')
        title = entry.get('title', 'Unknown')

        try:
            with yt_dlp.YoutubeDL(ydl_opts_full) as ydl:
                vinfo = ydl.extract_info(f'https://www.youtube.com/watch?v={vid}', download=False)
                upload_date = vinfo.get('upload_date', '')

                if upload_date and upload_date.startswith(year):
                    videos.append({
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
                    past_target = True
                    print(f"  [{i+1}] {year} - {upload_date} - {title}")
                elif upload_date and upload_date > year_end:
                    # Newer than target year, skip
                    print(f"  [{i+1}] {upload_date} - {title} (newer, skipping)")
                elif upload_date and upload_date < year_start:
                    # Past target year, stop
                    print(f"  [{i+1}] Reached {upload_date} - stopping (pre-{year})")
                    break
                else:
                    print(f"  [{i+1}] {upload_date} - {title} (skipped)")

        except Exception as e:
            print(f"  [{i+1}] Error fetching {vid}: {str(e)[:80]}")
            continue

        # Rate limit: 2s between requests
        time.sleep(2)

    print(f"\nFound {len(videos)} videos from {year}")

    os.makedirs(year, exist_ok=True)
    output_file = os.path.join(year, f'video_list_{year}.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(videos, f, indent=2, ensure_ascii=False)

    print(f"Saved to {output_file}")


if __name__ == '__main__':
    main()
