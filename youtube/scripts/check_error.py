"""Quick test to see what error we're getting from YouTube."""
from youtube_transcript_api import YouTubeTranscriptApi
import traceback

ytt_api = YouTubeTranscriptApi()

# Try a video that should have a transcript
test_vid = "vtGNTL1A7Nc"  # RSI Aurora Mk II - was NOT in the first 40 successes
try:
    result = ytt_api.fetch(test_vid, languages=['en'])
    print(f"SUCCESS: got {len(result.snippets)} snippets")
except Exception as e:
    print(f"ERROR type: {type(e).__name__}")
    print(f"ERROR: {e}")
    traceback.print_exc()
