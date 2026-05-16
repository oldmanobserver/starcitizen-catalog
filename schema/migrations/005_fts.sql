-- 005_fts.sql
-- Full-text (FTS5) index over every transcript chunk and patch-note section.
-- Lets the RAG layer do deterministic keyword recall for ANY topic
-- (e.g. "pledge", "kickstarter", "stretch goals", "salvage", "M80")
-- without needing a hand-written intent for each one.
--
-- The semantic Vectorize index is still the concept-matching layer; the FTS
-- index complements it for queries where the user literally names a thing.
--
-- Apply with:
--   wrangler d1 execute starcitizen-catalog --remote --file=schema/migrations/005_fts.sql

-- Use a contentless-ish FTS5 table: `text` is the only searchable column,
-- the rest are UNINDEXED metadata we read back when ranking results.
-- Porter stemmer + unicode61 tokenizer gives us word-level matching for
-- English plus reasonable handling of punctuation and accented characters.
DROP TABLE IF EXISTS catalog_text_fts;
CREATE VIRTUAL TABLE catalog_text_fts USING fts5(
  source_type       UNINDEXED,   -- 'transcript' | 'patch_note'
  source_key        UNINDEXED,   -- repo-relative file path; sha1(this).slice(0,24) is the vector-ID prefix
  source_id         UNINDEXED,   -- video_id (transcripts) or file_path (patch notes); used for filtering/joining
  chunk_idx         UNINDEXED,   -- ordinal within source
  title             UNINDEXED,
  timestamp_seconds UNINDEXED,   -- seconds into the video (transcripts only)
  patch_version     UNINDEXED,   -- patch notes only
  channel           UNINDEXED,   -- 'LIVE' | 'PTU' (patch notes only)
  url               UNINDEXED,
  upload_date       UNINDEXED,   -- transcripts only; copied from catalog_videos
  series            UNINDEXED,   -- transcripts only
  text,
  tokenize = 'porter unicode61 remove_diacritics 2'
);
