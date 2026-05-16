-- 004_ship_mentions.sql
-- Lexical index of which transcripts mention which ships. Built by
-- sync_catalog.js by scanning every transcript .md for canonical ship
-- names + their known aliases / nicknames (sourced from ships.json).
--
-- Lets the RAG layer answer "what videos talk about the M80?" deterministically
-- without depending on semantic similarity to surface the right chunks.
--
-- Apply with:
--   wrangler d1 execute starcitizen-catalog --remote --file=schema/migrations/004_ship_mentions.sql

CREATE TABLE IF NOT EXISTS catalog_ship_mentions (
  video_id        TEXT NOT NULL,
  ship_name       TEXT NOT NULL,             -- canonical name from ships.json
  mention_count   INTEGER NOT NULL DEFAULT 0,
  first_timestamp INTEGER,                   -- seconds into the video where the ship is first named
  updated_at      INTEGER NOT NULL,
  PRIMARY KEY (video_id, ship_name)
);

CREATE INDEX IF NOT EXISTS idx_ship_mentions_ship ON catalog_ship_mentions(ship_name, mention_count DESC);
CREATE INDEX IF NOT EXISTS idx_ship_mentions_video ON catalog_ship_mentions(video_id);

-- Alias → canonical name lookup. Populated from ships.json each sync. The
-- worker loads this once per cold start so the chat handler can detect when a
-- user query mentions a known ship (by any of its aliases) and route to a
-- structured ship_mention intent.
CREATE TABLE IF NOT EXISTS catalog_ship_aliases (
  alias_lower TEXT PRIMARY KEY,              -- lowercased, whitespace-collapsed alias
  canonical   TEXT NOT NULL,                 -- canonical ship name from ships.json
  alias_len   INTEGER NOT NULL,              -- length in characters (used to prefer the longest match in the query)
  updated_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_ship_aliases_canonical ON catalog_ship_aliases(canonical);
CREATE INDEX IF NOT EXISTS idx_ship_aliases_len ON catalog_ship_aliases(alias_len DESC);
