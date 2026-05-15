-- 003_catalog.sql
-- Structured metadata for the catalog. Lets the RAG layer answer questions like
-- "latest Star Citizen Live" or "what changed in 4.5 PTU" without depending on
-- semantic similarity to find the right document.
--
-- Apply with:
--   wrangler d1 execute starcitizen-catalog --remote --file=schema/migrations/003_catalog.sql

CREATE TABLE IF NOT EXISTS catalog_videos (
  video_id      TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  series        TEXT,                       -- e.g. 'Star Citizen Live', 'Inside Star Citizen', 'Calling All Devs', NULL = unclassified
  upload_date   TEXT NOT NULL,              -- YYYYMMDD as stored in video_list_{year}.json
  upload_year   INTEGER NOT NULL,
  duration_s    INTEGER,
  has_transcript INTEGER NOT NULL DEFAULT 0,
  url           TEXT NOT NULL,              -- https://www.youtube.com/watch?v=...
  description   TEXT,
  updated_at    INTEGER NOT NULL            -- unix seconds; when this row was last synced
);

CREATE INDEX IF NOT EXISTS idx_videos_series_date ON catalog_videos(series, upload_date DESC);
CREATE INDEX IF NOT EXISTS idx_videos_year ON catalog_videos(upload_year, upload_date DESC);

CREATE TABLE IF NOT EXISTS catalog_patches (
  id           TEXT PRIMARY KEY,           -- file_path
  channel      TEXT NOT NULL,              -- 'LIVE' | 'PTU' | 'Evocati'
  patch_year   INTEGER NOT NULL,
  version      TEXT,                       -- e.g. '4.5.0', extracted from filename when possible
  title        TEXT NOT NULL,              -- first H1 of the file, else filename
  file_path    TEXT NOT NULL UNIQUE,       -- relative path inside the repo
  updated_at   INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_patches_chan_year ON catalog_patches(channel, patch_year DESC, version DESC);
CREATE INDEX IF NOT EXISTS idx_patches_version ON catalog_patches(version);

-- Last-sync bookkeeping for the catalog tables.
CREATE TABLE IF NOT EXISTS catalog_sync_state (
  id            INTEGER PRIMARY KEY CHECK (id = 1),
  videos_count  INTEGER NOT NULL DEFAULT 0,
  patches_count INTEGER NOT NULL DEFAULT 0,
  last_sync_at  INTEGER NOT NULL DEFAULT 0,
  last_sync_by  TEXT                                  -- audit: who triggered the sync
);
INSERT OR IGNORE INTO catalog_sync_state (id) VALUES (1);
