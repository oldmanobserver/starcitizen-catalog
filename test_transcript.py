"""Test the youtube-transcript-api to find correct usage."""
from youtube_transcript_api import YouTubeTranscriptApi

# Check what methods are available
print("Available methods/attrs:")
for attr in dir(YouTubeTranscriptApi):
    if not attr.startswith('_'):
        print(f"  {attr}")

# Try the new API
print("\nTesting with a known video...")
try:
    ytt_api = YouTubeTranscriptApi()
    # Try fetch method
    result = ytt_api.fetch("yB09wPqOorc", languages=['en'])
    print(f"Type: {type(result)}")
    print(f"Result preview: {str(result)[:500]}")
except Exception as e:
    print(f"fetch failed: {e}")

try:
    result = ytt_api.list("yB09wPqOorc")
    print(f"\nlist result type: {type(result)}")
    print(f"list result: {result}")
except Exception as e:
    print(f"list failed: {e}")
