#!/usr/bin/env node
// functions/ingest/apply_migrations.js
//
// Idempotent applier for D1 schema migrations in schema/migrations/*.sql.
// Tracks applied migrations in a `schema_migrations` table so reruns are
// no-ops. Designed to run from a GitHub Actions workflow before the rest of
// the catalog/index sync, so a fresh deploy lights up new tables without
// any manual `wrangler d1 execute` step.
//
// Required env:
//   CF_ACCOUNT_ID
//   CF_API_TOKEN     (with D1: Edit)
//   D1_DATABASE_ID
//
// Behavior:
//   - Reads schema/migrations/*.sql in lexical order (the leading numeric
//     prefix is your version, e.g. 001_*, 002_*, ...).
//   - Skips any migration whose (name, sha1) is already recorded.
//   - For each pending migration, splits on `;` and runs statements one by
//     one (D1's REST /query endpoint accepts a single statement per request).
//   - Records the migration in schema_migrations on success.
//
// Flags:
//   --bootstrap            Record EVERY existing migration as already-applied
//                          without running any statements. Use this once when
//                          adopting the tracker on a database where all
//                          migrations were already applied manually.
//   --bootstrap-only=...   Same idea but only marks the named files as applied
//                          (comma-separated). All other migrations still run
//                          normally. Useful when most migrations are safe to
//                          re-run but one or two would error (e.g. an
//                          ALTER TABLE ADD COLUMN that's already been added).
//                          Example:
//                            --bootstrap-only=002_admin.sql
//   --dry-run              Print what would happen; don't change the database.
//
// Statements MUST be ;-terminated and the script intentionally drops empty
// statements / comment-only chunks. Statements that contain a `;` inside
// a string literal are NOT supported (we don't have any of those).
//
// Usage:
//   node functions/ingest/apply_migrations.js
//   node functions/ingest/apply_migrations.js --bootstrap                    # mark all as applied
//   node functions/ingest/apply_migrations.js --bootstrap-only=002_admin.sql # mark only 002 as applied; run the rest
//   node functions/ingest/apply_migrations.js --dry-run

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const MIGRATIONS_DIR = path.join(REPO_ROOT, "schema", "migrations");

const ACCOUNT_ID = req("CF_ACCOUNT_ID");
const API_TOKEN = req("CF_API_TOKEN");
const DB_ID = req("D1_DATABASE_ID");
const BOOTSTRAP = process.argv.includes("--bootstrap");
const DRY_RUN = process.argv.includes("--dry-run");
// --bootstrap-only=name1.sql,name2.sql  → mark those specific files as
// already-applied without executing them; other files run normally.
const BOOTSTRAP_ONLY = (() => {
  const arg = process.argv.find((a) => a.startsWith("--bootstrap-only="));
  if (!arg) return null;
  return new Set(
    arg.slice("--bootstrap-only=".length)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  );
})();

function req(name) {
  const v = process.env[name];
  if (!v) { console.error(`Missing required env var: ${name}`); process.exit(1); }
  return v;
}

function sha1(s) {
  return crypto.createHash("sha1").update(s).digest("hex");
}

async function d1Exec(sql, params = []) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB_ID}/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${API_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ sql, params }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`D1 ${res.status}: ${text.slice(0, 500)}`);
  }
  const json = await res.json();
  if (!json.success) {
    throw new Error(`D1 error: ${JSON.stringify(json.errors || json).slice(0, 500)}`);
  }
  return json.result;
}

/**
 * Split a .sql file into individual statements. Strips line comments and
 * blank lines, then splits on `;` at the end of a logical statement. This
 * does NOT understand `;` inside strings, but our schema files never have
 * one. Empty/whitespace-only chunks are dropped.
 */
function splitStatements(sql) {
  const cleaned = sql
    .split("\n")
    .filter((l) => !/^\s*--/.test(l))
    .join("\n");
  return cleaned
    .split(/;\s*(?:\n|$)/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * Return true when the D1/SQLite error means "this statement is already in
 * effect", so the migration can continue. We intentionally only swallow the
 * specific known-safe phrases — anything else still aborts the run.
 *
 * Covered cases:
 *   - ALTER TABLE x ADD COLUMN y     → "duplicate column name: y"
 *   - CREATE TABLE x (without IF NOT EXISTS)   → "table x already exists"
 *   - CREATE INDEX x (without IF NOT EXISTS)   → "index x already exists"
 *   - CREATE VIRTUAL TABLE x         → "table x already exists"
 *   - CREATE UNIQUE INDEX            → same as above
 */
function isHarmlessRerunError(err, stmt) {
  const msg = String(err && err.message || "").toLowerCase();
  if (!msg) return false;
  if (msg.includes("duplicate column name")) return true;
  if (msg.includes("already exists")) {
    // Only treat as harmless for DDL statements; "already exists" on an
    // INSERT (e.g. unique-constraint violation) is a real error.
    const head = stmt.trim().slice(0, 24).toLowerCase();
    if (head.startsWith("create table") ||
        head.startsWith("create virtual") ||
        head.startsWith("create index") ||
        head.startsWith("create unique")) {
      return true;
    }
  }
  return false;
}

async function ensureMigrationsTable() {
  await d1Exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name        TEXT PRIMARY KEY,
      sha1        TEXT NOT NULL,
      applied_at  INTEGER NOT NULL
    )
  `);
}

async function loadAppliedMigrations() {
  const res = await d1Exec(`SELECT name, sha1 FROM schema_migrations`);
  const out = new Map();
  // D1 REST shape: result is an array; first element holds .results
  const block = Array.isArray(res) ? res[0] : res;
  const rows = (block && (block.results || block.rows)) || [];
  for (const r of rows) out.set(r.name, r.sha1);
  return out;
}

async function main() {
  if (BOOTSTRAP) {
    console.log("BOOTSTRAP MODE: recording ALL existing migrations as already-applied without running them.");
  }
  if (BOOTSTRAP_ONLY) {
    console.log(`BOOTSTRAP-ONLY: marking these files as applied without running: ${[...BOOTSTRAP_ONLY].join(", ")}`);
  }
  if (DRY_RUN) console.log("DRY RUN: no statements will be executed.");
  console.log(`Reading migrations from ${path.relative(REPO_ROOT, MIGRATIONS_DIR)} ...`);
  let files;
  try {
    files = (await fs.readdir(MIGRATIONS_DIR))
      .filter((f) => f.endsWith(".sql"))
      .sort();
  } catch (e) {
    console.error(`No migrations directory at ${MIGRATIONS_DIR}: ${e.message}`);
    process.exit(0);
  }
  if (!files.length) {
    console.log("No migration files found; nothing to do.");
    return;
  }

  if (!DRY_RUN) await ensureMigrationsTable();
  const applied = DRY_RUN ? new Map() : await loadAppliedMigrations();

  let appliedCount = 0;
  let skippedCount = 0;
  let bootstrappedCount = 0;
  const now = Math.floor(Date.now() / 1000);

  for (const file of files) {
    const full = path.join(MIGRATIONS_DIR, file);
    const sql = await fs.readFile(full, "utf8");
    const sha = sha1(sql);
    const prev = applied.get(file);
    if (prev === sha) {
      skippedCount++;
      continue;
    }

    const shouldBootstrap = BOOTSTRAP || (BOOTSTRAP_ONLY && BOOTSTRAP_ONLY.has(file));
    if (shouldBootstrap) {
      console.log(`- ${file} → recording as applied (bootstrap, no statements executed)`);
      if (!DRY_RUN) {
        await d1Exec(
          `INSERT INTO schema_migrations (name, sha1, applied_at) VALUES (?, ?, ?)
           ON CONFLICT(name) DO UPDATE SET sha1=excluded.sha1, applied_at=excluded.applied_at`,
          [file, sha, now]
        );
      }
      bootstrappedCount++;
      continue;
    }

    if (prev && prev !== sha) {
      console.warn(
        `! ${file} content changed since it was first applied. ` +
        `Schema migrations are append-only; create a new migration file instead. ` +
        `Re-applying anyway.`
      );
    }
    console.log(`- ${file} (${prev ? "rerunning (changed)" : "new"})`);
    const stmts = splitStatements(sql);
    for (const s of stmts) {
      if (DRY_RUN) {
        console.log(`    [dry-run] would run: ${s.slice(0, 100).replace(/\s+/g, " ")}...`);
        continue;
      }
      try {
        await d1Exec(s);
      } catch (e) {
        if (isHarmlessRerunError(e, s)) {
          // SQLite raised an error that just means "this statement is
          // already-applied" (duplicate column, table already exists, etc.).
          // That's exactly the situation we expect when a pre-tracker
          // migration is being recorded for the first time, so swallow it.
          console.log(`    skipped (already applied): ${e.message.slice(0, 160)}`);
          continue;
        }
        console.error(`  FAILED on statement:\n${s.slice(0, 400)}\n  Error: ${e.message}`);
        throw e;
      }
    }
    if (!DRY_RUN) {
      await d1Exec(
        `INSERT INTO schema_migrations (name, sha1, applied_at) VALUES (?, ?, ?)
         ON CONFLICT(name) DO UPDATE SET sha1=excluded.sha1, applied_at=excluded.applied_at`,
        [file, sha, now]
      );
    }
    appliedCount++;
  }

  console.log(
    `Done. ${appliedCount} applied, ${bootstrappedCount} bootstrapped, ` +
    `${skippedCount} unchanged, ${files.length} total.`
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
