#!/usr/bin/env node
// functions/ingest/sync_catalog.js
//
// Fast (~5-30s) sync of structured catalog metadata into D1. No embeddings.
// Idempotent. Designed to be run from a GitHub Actions workflow whenever
// transcripts or patch notes change.
//
// Required env:
//   CF_ACCOUNT_ID
//   CF_API_TOKEN     (with D1: Edit)
//   D1_DATABASE_ID
//
// Optional:
//   D1_DATABASE_NAME (default 'starcitizen-catalog' — informational only)
//   ACTOR            (e.g. github username; written to last_sync_by)
//
// Usage:  node functions/ingest/sync_catalog.js

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { detectSeries, extractPatchVersion } from "../lib/catalog.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const DATA_DIR = path.join(REPO_ROOT, "functions", "data");

const ACCOUNT_ID = req("CF_ACCOUNT_ID");
const API_TOKEN = req("CF_API_TOKEN");
const DB_ID = req("D1_DATABASE_ID");
const ACTOR = process.env.ACTOR || "ingest";
// Optional: when set, the sync also writes the alias→canonical map to KV so
// the worker can detect ship-mention intents without a D1 round-trip.
const API_KEYS_KV_ID = process.env.API_KEYS_KV_ID || null;

function req(name) {
  const v = process.env[name];
  if (!v) { console.error(`Missing required env var: ${name}`); process.exit(1); }
  return v;
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

// ---- D1 helpers ----------------------------------------------------------

async function d1Exec(sql, params = []) {
  // Cloudflare D1 REST API:
  //   POST /accounts/{id}/d1/database/{db}/query   { sql, params }
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DB_ID}/query`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
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

async function d1Batch(statements) {
  // Cloudflare's REST API does not support transactional batches over HTTP,
  // but it does accept multiple statements per request via the same /query
  // endpoint when called sequentially. We just chunk to keep request bodies small.
  const CHUNK = 20;
  for (let i = 0; i < statements.length; i += CHUNK) {
    const slice = statements.slice(i, i + CHUNK);
    // Execute sequentially in one request so D1 amortises connection overhead.
    // Each element is its own {sql, params}.
    await Promise.all(slice.map((s) => d1Exec(s.sql, s.params)));
  }
}

// ---- Source walkers ------------------------------------------------------

async function* walkYears(root) {
  if (!(await exists(root))) return;
  const entries = await fs.readdir(root, { withFileTypes: true });
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    if (!/^\d{4}$/.test(e.name)) continue;
    yield { year: e.name, dir: path.join(root, e.name) };
  }
}

async function collectVideos() {
  const root = path.join(DATA_DIR, "youtube");
  const out = [];
  for await (const { year, dir } of walkYears(root)) {
    const listFile = path.join(dir, `video_list_${year}.json`);
    let videos = [];
    if (await exists(listFile)) {
      try {
        videos = JSON.parse(await fs.readFile(listFile, "utf8"));
      } catch (e) {
        console.warn(`! Could not parse ${listFile}: ${e.message}`);
      }
    }
    const transcriptDir = path.join(dir, "transcripts");
    const transcriptIds = new Set();
    if (await exists(transcriptDir)) {
      const files = await fs.readdir(transcriptDir);
      for (const f of files) {
        if (f.endsWith(".md")) transcriptIds.add(f.replace(/\.md$/, ""));
      }
    }
    for (const v of videos) {
      if (!v || !v.id) continue;
      out.push({
        video_id: v.id,
        title: v.title || "(untitled)",
        series: detectSeries(v.title),
        upload_date: v.upload_date || `${year}0101`,
        upload_year: Number(year),
        duration_s: typeof v.duration === "number" ? v.duration : null,
        has_transcript: transcriptIds.has(v.id) ? 1 : 0,
        url: `https://www.youtube.com/watch?v=${v.id}`,
        description: v.description ? String(v.description).slice(0, 4000) : null,
      });
    }
    // Also surface transcripts that don't appear in any video_list (rare).
    for (const id of transcriptIds) {
      if (!videos.some((v) => v && v.id === id)) {
        out.push({
          video_id: id,
          title: id,
          series: null,
          upload_date: `${year}0101`,
          upload_year: Number(year),
          duration_s: null,
          has_transcript: 1,
          url: `https://www.youtube.com/watch?v=${id}`,
          description: null,
        });
      }
    }
  }
  return out;
}

// ---- Ship-name index ----------------------------------------------------

/**
 * Build the alias → canonical map from ships.json. Includes:
 *  - the canonical name itself
 *  - the canonical name minus its manufacturer prefix (e.g. "M80" from "Origin M80")
 *  - every entry in `aliases`
 *  - every key in `transcript_corrections` (community misspellings + nicknames)
 *
 * Returns:
 *   {
 *     canonicalSet: Set<string>,                        // every canonical ship name
 *     aliasMap: Map<string, { canonical, alias }>,      // alias_lower -> info
 *     patterns: Array<{ alias_lower, canonical, regex, alias }>  // ordered longest-first
 *   }
 */
async function buildShipAliasIndex() {
  const file = path.join(DATA_DIR, "ships.json");
  if (!(await exists(file))) {
    return { canonicalSet: new Set(), aliasMap: new Map(), patterns: [] };
  }
  const json = JSON.parse(await fs.readFile(file, "utf8"));
  const canonicalSet = new Set();
  const aliasMap = new Map();

  const addAlias = (raw, canonical) => {
    if (!raw || !canonical) return;
    const norm = String(raw).trim().toLowerCase().replace(/\s+/g, " ");
    if (norm.length < 2) return;
    // Don't let a generic word like "the" or "cat" collide unless it's an
    // explicit alias the maintainer added. We accept anything that came from
    // ships.json on the maintainer's authority.
    if (!aliasMap.has(norm)) {
      aliasMap.set(norm, { canonical, alias: raw });
    }
  };

  const manufacturers = json.manufacturers || {};
  for (const [maker, info] of Object.entries(manufacturers)) {
    const prefix = info.prefix || "";
    for (const ship of (info.ships || [])) {
      const name = ship.name;
      if (!name) continue;
      canonicalSet.add(name);
      addAlias(name, name);
      // Stripped-of-prefix variant, e.g. "M80" from "Origin M80",
      // "Carrack" from "Anvil Carrack". Only when it's distinctive enough
      // (>=3 chars, contains a letter or a digit). Skips the bare prefix word.
      if (prefix && name.toLowerCase().startsWith(prefix.toLowerCase() + " ")) {
        const stripped = name.slice(prefix.length + 1).trim();
        if (stripped.length >= 3 && /[A-Za-z0-9]/.test(stripped)) {
          addAlias(stripped, name);
        }
      }
      for (const a of (ship.aliases || [])) addAlias(a, name);
    }
  }

  const corrections = json.transcript_corrections || {};
  for (const [wrong, right] of Object.entries(corrections)) {
    if (wrong.startsWith("_")) continue;
    if (!canonicalSet.has(right)) continue;
    addAlias(wrong, right);
  }

  // Build word-boundary regexes ordered longest-first so "Origin M80" wins
  // over "M80" when both could match the same span of text.
  const patterns = [...aliasMap.entries()]
    .sort((a, b) => b[0].length - a[0].length)
    .map(([alias_lower, info]) => ({
      alias_lower,
      canonical: info.canonical,
      alias: info.alias,
      // Word-boundary match. `\b` works on \w so we anchor explicitly to
      // start/end-of-string-or-non-alphanumeric to also handle punctuation
      // around things like "M80." and "M80,". Special chars in the alias
      // are escaped.
      regex: new RegExp(
        `(^|[^A-Za-z0-9])(${escapeRegex(info.alias)})(?=$|[^A-Za-z0-9])`,
        "gi"
      ),
    }));

  return { canonicalSet, aliasMap, patterns };
}

function escapeRegex(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Scan one transcript file for ship mentions. Returns a Map keyed by canonical
 * ship name with { count, first_timestamp } values. `patterns` is the
 * longest-first list from buildShipAliasIndex(); we walk it in order and mask
 * each match out of the working buffer so longer aliases ("Origin M80") win
 * over shorter ones ("M80") on overlapping spans.
 */
function extractShipMentionsFromTranscript(text, patterns) {
  // We need to know the timestamp of each match. The transcripts have
  // per-line `[H:MM:SS]` / `[MM:SS]` prefixes, so we walk line-by-line.
  const out = new Map();
  const lines = text.split("\n");
  // Build a parallel scratch buffer per line so we can mask consumed matches.
  const scratch = lines.slice();

  for (const p of patterns) {
    for (let li = 0; li < scratch.length; li++) {
      const line = scratch[li];
      if (!line) continue;
      // Reset stateful regex.
      p.regex.lastIndex = 0;
      let m;
      let consumed = "";
      let lastIdx = 0;
      let found = false;
      while ((m = p.regex.exec(line)) !== null) {
        found = true;
        const ts = parseLineTimestamp(lines[li]);
        const entry = out.get(p.canonical) || { count: 0, first_timestamp: null };
        entry.count += 1;
        if (entry.first_timestamp === null && ts !== null) entry.first_timestamp = ts;
        out.set(p.canonical, entry);
        // Mask this match out so a shorter alias can't double-count it.
        const startOfAlias = m.index + (m[1] ? m[1].length : 0);
        const endOfAlias = startOfAlias + m[2].length;
        consumed += line.slice(lastIdx, startOfAlias) + " ".repeat(endOfAlias - startOfAlias);
        lastIdx = endOfAlias;
        // Guard against zero-length matches.
        if (m.index === p.regex.lastIndex) p.regex.lastIndex++;
      }
      if (found) {
        scratch[li] = consumed + line.slice(lastIdx);
      }
    }
  }
  return out;
}

function parseLineTimestamp(line) {
  const m = /^\[(?:(\d{1,2}):)?(\d{1,2}):(\d{2})\]/.exec(line);
  if (!m) return null;
  const h = parseInt(m[1] || "0", 10);
  const mm = parseInt(m[2], 10);
  const ss = parseInt(m[3], 10);
  return h * 3600 + mm * 60 + ss;
}

async function collectShipMentions(aliasIndex) {
  const root = path.join(DATA_DIR, "youtube");
  const out = []; // { video_id, ship_name, mention_count, first_timestamp }
  if (!(await exists(root))) return out;
  for await (const { year, dir } of walkYears(root)) {
    const transcriptDir = path.join(dir, "transcripts");
    if (!(await exists(transcriptDir))) continue;
    const files = await fs.readdir(transcriptDir);
    for (const f of files) {
      if (!f.endsWith(".md")) continue;
      const videoId = f.replace(/\.md$/, "");
      const text = await fs.readFile(path.join(transcriptDir, f), "utf8");
      const mentions = extractShipMentionsFromTranscript(text, aliasIndex.patterns);
      for (const [shipName, info] of mentions) {
        out.push({
          video_id: videoId,
          ship_name: shipName,
          mention_count: info.count,
          first_timestamp: info.first_timestamp,
        });
      }
    }
  }
  return out;
}

async function collectPatches() {
  const root = path.join(DATA_DIR, "Patch Notes");
  const out = [];
  for await (const { year, dir } of walkYears(root)) {
    for (const channel of ["LIVE", "PTU"]) {
      const chanDir = path.join(dir, channel);
      if (!(await exists(chanDir))) continue;
      const files = await fs.readdir(chanDir);
      for (const f of files) {
        if (!f.endsWith(".md")) continue;
        const full = path.join(chanDir, f);
        const rel = path.relative(REPO_ROOT, full).replace(/\\/g, "/");
        const text = await fs.readFile(full, "utf8");
        const firstH1 = (text.split("\n").find((l) => l.startsWith("# ")) || "").replace(/^#\s*/, "").trim();
        out.push({
          id: rel,
          channel,
          patch_year: Number(year),
          version: extractPatchVersion(f),
          title: firstH1 || f.replace(/\.md$/, ""),
          file_path: rel,
        });
      }
    }
  }
  return out;
}

// ---- Main ----------------------------------------------------------------

async function main() {
  console.log("Sync starting...");

  console.log("- Scanning videos...");
  const videos = await collectVideos();
  console.log(`  ${videos.length} videos`);

  console.log("- Scanning patch notes...");
  const patches = await collectPatches();
  console.log(`  ${patches.length} patch notes`);

  console.log("- Building ship-name alias index...");
  const aliasIndex = await buildShipAliasIndex();
  console.log(`  ${aliasIndex.aliasMap.size} aliases covering ${aliasIndex.canonicalSet.size} ships`);

  console.log("- Scanning transcripts for ship mentions...");
  const shipMentions = await collectShipMentions(aliasIndex);
  console.log(`  ${shipMentions.length} (video, ship) mentions across ${new Set(shipMentions.map((m) => m.video_id)).size} videos`);

  console.log("- Upserting to D1...");
  const now = Math.floor(Date.now() / 1000);

  // Clear + bulk-insert keeps things simple and correctly removes deleted rows.
  await d1Exec("DELETE FROM catalog_videos");
  await d1Exec("DELETE FROM catalog_patches");
  // Ship-mentions / aliases tables are added by migration 004; tolerate the
  // tables being missing on a database that hasn't been migrated yet so the
  // catalog sync itself isn't blocked.
  let shipTablesPresent = true;
  try {
    await d1Exec("DELETE FROM catalog_ship_mentions");
    await d1Exec("DELETE FROM catalog_ship_aliases");
  } catch (e) {
    console.warn(
      `! Ship-mention tables missing — skipping ship index. ` +
      `Apply schema/migrations/004_ship_mentions.sql to enable. (${(e.message || e).toString().slice(0, 200)})`
    );
    shipTablesPresent = false;
  }

  // D1's /query endpoint caps bound parameters at 100 per request. Pick a
  // rows-per-request value that stays well under that for each row width.
  await chunkedInsert(
    "INSERT INTO catalog_videos (video_id, title, series, upload_date, upload_year, duration_s, has_transcript, url, description, updated_at) VALUES",
    "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    videos.map((v) => [
      v.video_id, v.title, v.series, v.upload_date, v.upload_year,
      v.duration_s, v.has_transcript, v.url, v.description, now,
    ]),
    9  // 9 rows × 10 cols = 90 params per request (D1 cap is 100)
  );

  await chunkedInsert(
    "INSERT INTO catalog_patches (id, channel, patch_year, version, title, file_path, updated_at) VALUES",
    "(?, ?, ?, ?, ?, ?, ?)",
    patches.map((p) => [
      p.id, p.channel, p.patch_year, p.version, p.title, p.file_path, now,
    ]),
    12  // 12 rows × 7 cols = 84 params per request
  );

  if (shipTablesPresent) {
    if (shipMentions.length) {
      await chunkedInsert(
        "INSERT INTO catalog_ship_mentions (video_id, ship_name, mention_count, first_timestamp, updated_at) VALUES",
        "(?, ?, ?, ?, ?)",
        shipMentions.map((m) => [
          m.video_id, m.ship_name, m.mention_count, m.first_timestamp, now,
        ]),
        18  // 18 × 5 = 90 params per request
      );
    }
    const aliasRows = [...aliasIndex.aliasMap.entries()].map(
      ([alias_lower, info]) => [alias_lower, info.canonical, alias_lower.length, now]
    );
    if (aliasRows.length) {
      await chunkedInsert(
        "INSERT INTO catalog_ship_aliases (alias_lower, canonical, alias_len, updated_at) VALUES",
        "(?, ?, ?, ?)",
        aliasRows,
        22  // 22 × 4 = 88 params per request
      );
    }
  }

  // Mirror the alias map into KV so the worker can detect ship-mention intents
  // without a D1 round-trip on every chat turn. Best-effort; tolerated if KV
  // creds aren't available locally.
  if (API_KEYS_KV_ID && shipTablesPresent) {
    try {
      const kvPayload = [...aliasIndex.aliasMap.entries()].map(
        ([alias_lower, info]) => [alias_lower, info.canonical]
      );
      await putKv(API_KEYS_KV_ID, "system:ship_aliases", JSON.stringify(kvPayload));
      console.log(`  Wrote ${kvPayload.length} aliases to KV (system:ship_aliases).`);
    } catch (e) {
      console.warn(`! Could not write ship_aliases to KV: ${(e.message || e).toString().slice(0, 200)}`);
    }
  }

  await d1Exec(
    `UPDATE catalog_sync_state SET videos_count=?, patches_count=?, last_sync_at=?, last_sync_by=? WHERE id=1`,
    [videos.length, patches.length, now, ACTOR]
  );

  console.log(
    `Done. ${videos.length} videos, ${patches.length} patch notes, ` +
    `${shipTablesPresent ? shipMentions.length : 0} ship mentions synced.`
  );
}

async function putKv(namespaceId, key, value) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${namespaceId}/values/${encodeURIComponent(key)}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { Authorization: `Bearer ${API_TOKEN}`, "Content-Type": "text/plain" },
    body: typeof value === "string" ? value : JSON.stringify(value),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`KV ${res.status}: ${text.slice(0, 300)}`);
  }
}

async function chunkedInsert(prefix, rowTemplate, rows, perRequest) {
  for (let i = 0; i < rows.length; i += perRequest) {
    const slice = rows.slice(i, i + perRequest);
    const values = slice.map(() => rowTemplate).join(", ");
    const params = slice.flat();
    await d1Exec(`${prefix} ${values}`, params);
    if (i % (perRequest * 20) === 0) {
      process.stdout.write(`  ${Math.min(i + perRequest, rows.length)}/${rows.length}\r`);
    }
  }
  process.stdout.write(`  ${rows.length}/${rows.length}\n`);
}

main().catch((e) => { console.error(e); process.exit(1); });
