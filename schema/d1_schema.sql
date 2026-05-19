-- Star Citizen Catalog - D1 schema
-- Apply with: wrangler d1 execute starcitizen-catalog --file=schema/d1_schema.sql --remote

PRAGMA foreign_keys = ON;

-- ----------------------------------------------------------------------------
-- Users (one row per Twitch login)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id                  TEXT PRIMARY KEY,            -- twitch user id (string)
  login               TEXT NOT NULL,               -- twitch login (lowercase)
  display_name        TEXT NOT NULL,
  email               TEXT,
  profile_image_url   TEXT,
  created_at          INTEGER NOT NULL,            -- unix seconds
  last_login_at       INTEGER NOT NULL,
  theme               TEXT NOT NULL DEFAULT 'system', -- 'light' | 'dark' | 'system'
  default_provider    TEXT,                        -- e.g. 'anthropic'
  default_model       TEXT
);

CREATE INDEX IF NOT EXISTS idx_users_login ON users(login);

-- ----------------------------------------------------------------------------
-- Conversations
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS conversations (
  id           TEXT PRIMARY KEY,                   -- uuid
  user_id      TEXT NOT NULL,
  title        TEXT NOT NULL DEFAULT 'New conversation',
  provider     TEXT,                               -- last provider used
  model        TEXT,                               -- last model used
  pinned       INTEGER NOT NULL DEFAULT 0,         -- 0 / 1
  created_at   INTEGER NOT NULL,
  updated_at   INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_conv_user
  ON conversations(user_id, pinned DESC, updated_at DESC);

-- ----------------------------------------------------------------------------
-- Messages
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS messages (
  id               TEXT PRIMARY KEY,               -- uuid
  conversation_id  TEXT NOT NULL,
  role             TEXT NOT NULL,                  -- 'user' | 'assistant' | 'system'
  content          TEXT NOT NULL,
  citations        TEXT,                           -- JSON array of citation objects
  provider         TEXT,
  model            TEXT,
  tokens_in        INTEGER,
  tokens_out       INTEGER,
  created_at       INTEGER NOT NULL,
  FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_msg_conv ON messages(conversation_id, created_at);

-- ----------------------------------------------------------------------------
-- Audit log (lightweight; never store prompts or keys here)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS audit_log (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id     TEXT,
  action      TEXT NOT NULL,        -- 'login' | 'logout' | 'key_set' | 'key_delete' | 'chat'
  meta        TEXT,                 -- JSON, e.g. {"provider":"openai","status":200}
  created_at  INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_audit_user ON audit_log(user_id, created_at DESC);
-- ----------------------------------------------------------------------------
-- Feedback (bug reports / suggestions; see migrations/006_feedback.sql)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS feedback (
  id              TEXT PRIMARY KEY,
  user_id         TEXT NOT NULL,
  kind            TEXT NOT NULL DEFAULT 'bug',
  title           TEXT NOT NULL,
  description     TEXT NOT NULL,
  conversation_id TEXT,
  message_id      TEXT,
  snapshot        TEXT,
  status          TEXT NOT NULL DEFAULT 'open',
  close_notes     TEXT,
  closed_at       INTEGER,
  closed_by       TEXT,
  created_at      INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_feedback_status ON feedback(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_user ON feedback(user_id, created_at DESC);