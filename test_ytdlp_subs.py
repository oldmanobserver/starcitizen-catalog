"""Quick test of yt-dlp subtitle download."""
import subprocess
import sys
import os
import glob
import re

vid = "vtGNTL1A7Nc"  # RSI Aurora Mk II
temp_dir = "2026/transcripts/_ytdlp_temp"
os.makedirs(temp_dir, exist_ok=True)

cmd = [
    sys.executable, "-m", "yt_dlp",
    "--skip-download",
    "--write-subs",
    "--write-auto-subs",
    "--sub-langs", "en",
    "--sub-format", "vtt",
    "-o", os.path.join(temp_dir, vid),
    "https://www.youtube.com/watch?v=" + vid
]

print(f"Running: {' '.join(cmd)}")
result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
print(f"Return code: {result.returncode}")
if result.stdout:
    print(f"stdout: {result.stdout[:500]}")
if result.stderr:
    print(f"stderr: {result.stderr[:500]}")

# Check what files were created
files = glob.glob(os.path.join(temp_dir, f"{vid}*"))
print(f"\nFiles created: {files}")

for f in files:
    if f.endswith('.vtt'):
        with open(f, 'r', encoding='utf-8') as fh:
            content = fh.read()
        print(f"\nFirst 500 chars of {f}:")
        print(content[:500])
