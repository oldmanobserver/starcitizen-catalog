"""Test yt-dlp subtitle download with a single video."""
import yt_dlp
import os
import json

vid = "JWEbWUewco0"  # Behind the Ships: MISC Hull B
temp_dir = "2026/transcripts"
os.makedirs(temp_dir, exist_ok=True)

ydl_opts = {
    'skip_download': True,
    'writesubtitles': True,
    'writeautomaticsub': True,
    'subtitleslangs': ['en'],
    'subtitlesformat': 'json3',
    'outtmpl': os.path.join(temp_dir, '%(id)s'),
    'quiet': True,
    'no_warnings': True,
}

print(f"Downloading subtitles for {vid}...")
try:
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(f'https://www.youtube.com/watch?v={vid}', download=False)
        subs = info.get('subtitles', {})
        auto_subs = info.get('automatic_captions', {})
        print(f"Manual subs languages: {list(subs.keys())}")
        print(f"Auto subs languages: {list(auto_subs.keys())[:5]}...")

        # Now actually download
        ydl.download([f'https://www.youtube.com/watch?v={vid}'])

    # Check for output files
    for f in os.listdir(temp_dir):
        if vid in f:
            print(f"Found: {f} ({os.path.getsize(os.path.join(temp_dir, f))} bytes)")
except Exception as e:
    print(f"Error: {e}")
