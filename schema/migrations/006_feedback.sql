-- 006_feedback.sql
-- User-submitted bug reports and suggestions.
--
-- Apply with:
--   wrangler d1 execute starcitizen-catalog --remote --file=schema/migrations/006_feedback.sql
--
-- Snapshot column stores a JSON object captured at submission time when the
-- user opts to "include current search". Shape:
--   {
--     "user_message": "...",
--     "assistant_message": "...",
--     "citations": [ { ref, url, ... }, ... ],
--     "provider": "anthropic",
--     "model": "claude-...",
--     "conversation_title": "..."
--   }
--
-- Storing a snapshot (vs. just a conversation_id pointer) means the feedback
-- record survives the user later deleting the conversation, and lets admins
-- see exactly the query+response the user complained about.

CREATE TABLE IF NOT EXISTS feedback (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL,
  kind            TEXT NOT NULL DEFAULT 'bug',           -- 'bug' | 'suggestion'
  title           TEXT NOT NULL,
  description     TEXT NOT NULL,
  conversation_id TEXT,                                  -- optional, may have been deleted
  message_id      TEXT,                                  -- optional, the assistant turn referenced
  snapshot        TEXT,                                  -- JSON, see above
  status          TEXT NOT NULL DEFAULT 'open',          -- 'open' | 'closed'
  close_notes     TEXT,
  closed_at       INTEGER,
  closed_by       TEXT,                                  -- user_id of admin who closed
  created_at      INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_feedback_status
  ON feedback(status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_feedback_user
  ON feedback(user_id, created_at DESC);
