import yt_dlp
ydl = yt_dlp.YoutubeDL({'quiet': True, 'skip_download': True, 'no_warnings': True})
info = ydl.extract_info('https://www.youtube.com/watch?v=yB09wPqOorc', download=False)
print(f"OK - upload_date: {info.get('upload_date')}")
