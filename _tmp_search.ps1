$files = Get-ChildItem -Path "functions\data\Patch Notes\2022" -Recurse -Filter *.md | Where-Object {
  $head = Get-Content $_.FullName -TotalCount 5 -ErrorAction SilentlyContinue
  $titleLine = $head | Where-Object { $_ -match "^\*\*Title:\*\*" }
  $titleLine -match "3\.17\.0(\D|$)"
}
Write-Host "Found $($files.Count) files matching 3.17.0 in title"
foreach ($f in $files) {
  $content = Get-Content $f.FullName -Raw
  $parts = $content -split "---", 2
  $body = if ($parts.Count -gt 1) { $parts[1] } else { $content }
  $m = [regex]::Match($body, "https?://[^\s\)\]]*comm-link/Patch-Notes[^\s\)\]]*")
  if ($m.Success) {
    Write-Host "$($f.FullName) -> $($m.Value)"
  } else {
    Write-Host "$($f.FullName) -> (no comm-link/Patch-Notes URL)"
  }
}
