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

async function collectPatches() {
  const root = path.join(DATA_DIR, "Patch Notes");
  const out = [];
  for await (const { year, dir } of walkYears(root)) {
    for (const channel of ["LIVE", "PTU", "Evocati"]) {
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

  console.log("- Upserting to D1...");
  const now = Math.floor(Date.now() / 1000);

  // Clear + bulk-insert keeps things simple and correctly removes deleted rows.
  await d1Exec("DELETE FROM catalog_videos");
  await d1Exec("DELETE FROM catalog_patches");

  // Insert in chunks of ~50 rows per statement using parameterized VALUES.
  await chunkedInsert(
    "INSERT INTO catalog_videos (video_id, title, series, upload_date, upload_year, duration_s, has_transcript, url, description, updated_at) VALUES",
    "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    videos.map((v) => [
      v.video_id, v.title, v.series, v.upload_date, v.upload_year,
      v.duration_s, v.has_transcript, v.url, v.description, now,
    ]),
    10  // chunk of 10 rows = 100 params per request
  );

  await chunkedInsert(
    "INSERT INTO catalog_patches (id, channel, patch_year, version, title, file_path, updated_at) VALUES",
    "(?, ?, ?, ?, ?, ?, ?)",
    patches.map((p) => [
      p.id, p.channel, p.patch_year, p.version, p.title, p.file_path, now,
    ]),
    15
  );

  await d1Exec(
    `UPDATE catalog_sync_state SET videos_count=?, patches_count=?, last_sync_at=?, last_sync_by=? WHERE id=1`,
    [videos.length, patches.length, now, ACTOR]
  );

  console.log(`Done. ${videos.length} videos, ${patches.length} patch notes synced.`);
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
