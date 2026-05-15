-- 002_admin.sql
-- Adds an is_admin flag to users and seeds the project owner (oldmanobserver).
--
-- Apply with:
--   wrangler d1 execute starcitizen-catalog --remote --file=schema/migrations/002_admin.sql
--
-- Safe to re-run: ALTER TABLE ... ADD COLUMN fails silently if the column
-- already exists when wrapped in a CREATE/IF-NOT-EXISTS pattern, but SQLite
-- doesn't support that cleanly, so we just accept a one-time noisy error if
-- you run it twice.

ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0;

-- Mark the project owner as admin. If the user hasn't signed in yet this
-- updates zero rows; the same statement run again after first login does the job.
UPDATE users SET is_admin = 1 WHERE login = 'oldmanobserver';
