#!/usr/bin/env node
// functions/ingest/build_index.js
//
// Rerunnable Vectorize index builder.
//
// Modes:
//   --incremental  (default) only re-embed source files whose content changed
//                  since the previous run (tracked via a sha1 manifest in KV).
//                  Also deletes vectors for source files that have been
//                  removed from the repo, and trailing vectors for files that
//                  shrank (so old chunk IDs don't linger).
//   --full         ignore the manifest and re-embed everything. Use after
//                  changing chunking logic, the embedding model, or if you
//                  ever suspect the manifest is out of sync.
//
// Required env:
//   CF_ACCOUNT_ID
//   CF_API_TOKEN     (Workers AI Read, Vectorize Edit, Workers KV Edit)
//   API_KEYS_KV_ID   (used for ship-corrections + the ingest manifest)
//
// Optional env:
//   VECTORIZE_INDEX  default "sc-catalog"
//   EMBED_MODEL      default "@cf/baai/bge-base-en-v1.5"
//   BATCH_SIZE       default 32
//
// Vector ID convention: stable per (source, chunk index), so a re-embed of an
// unchanged chunk is a no-op. Trailing-vector cleanup uses the same scheme.

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { detectSeries, extractPatchVersion } from "../lib/catalog.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const DATA_DIR = path.join(REPO_ROOT, "functions", "data");

const ACCOUNT_ID = req("CF_ACCOUNT_ID");
const API_TOKEN = req("CF_API_TOKEN");
const API_KEYS_KV_ID = req("API_KEYS_KV_ID");
const VECTORIZE_INDEX = process.env.VECTORIZE_INDEX || "sc-catalog";
const EMBED_MODEL = process.env.EMBED_MODEL || "@cf/baai/bge-base-en-v1.5";
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || "32", 10) || 32;

const CHUNK_TOKENS = 400;
const CHUNK_CHARS = CHUNK_TOKENS * 4;
const CHUNK_OVERLAP = 200;

const MODE = (process.argv.includes("--full") || process.env.MODE === "full") ? "full" : "incremental";
const MANIFEST_KEY = "system:ingest_manifest";

function req(name) {
  const v = process.env[name];
  if (!v) { console.error(`Missing required env var: ${name}`); process.exit(1); }
  return v;
}

function sha1(s) {
  return crypto.createHash("sha1").update(s).digest("hex");
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

// ---------------------------------------------------------------------------
// Chunkers
// ---------------------------------------------------------------------------

function chunkText(text, opts = {}) {
  const max = opts.max || CHUNK_CHARS;
  const overlap = opts.overlap || CHUNK_OVERLAP;
  const out = [];
  let i = 0;
  while (i < text.length) {
    let end = Math.min(text.length, i + max);
    if (end < text.length) {
      const window = text.slice(i, end);
      const lastBreak = Math.max(
        window.lastIndexOf("\n\n"),
        window.lastIndexOf(". "),
        window.lastIndexOf("? "),
        window.lastIndexOf("! ")
      );
      if (lastBreak > max * 0.5) end = i + lastBreak + 1;
    }
    out.push(text.slice(i, end).trim());
    if (end === text.length) break;
    i = Math.max(end - overlap, i + 1);
  }
  return out.filter((c) => c.length > 40);
}

// ---------------------------------------------------------------------------
// Source enumeration
// ---------------------------------------------------------------------------

/**
 * Each "source" is one logical document. We build all chunks for it from raw
 * source content + return a sha1 of that raw content. The manifest stores the
 * sha1 keyed by `kind:path`; if the sha matches, we skip the whole source.
 *
 * Vector IDs are derived from `idPrefix + ":" + index` where index is the
 * chunk's position in the document. That gives us a deterministic vector ID
 * AND a stable way to enumerate "all vectors for this source" when we need
 * to delete trailing/orphan chunks.
 */

function transcriptSources() {
  return walkTranscripts();
}

async function* walkTranscripts() {
  const youtubeDir = path.join(DATA_DIR, "youtube");
  if (!(await exists(youtubeDir))) return;
  const years = await fs.readdir(youtubeDir, { withFileTypes: true });
  for (const ye of years) {
    if (!ye.isDirectory() || !/^\d{4}$/.test(ye.name)) continue;
    const tDir = path.join(youtubeDir, ye.name, "transcripts");
    if (!(await exists(tDir))) continue;
    const files = await fs.readdir(tDir);
    for (const f of files) {
      if (!f.endsWith(".md")) continue;
      const full = path.join(tDir, f);
      const rel = path.relative(REPO_ROOT, full).replace(/\\/g, "/");
      yield { kind: "transcript", key: rel, full, year: ye.name, video_id: f.replace(/\.md$/, "") };
    }
  }
}

async function* walkPatchNotes() {
  const root = path.join(DATA_DIR, "Patch Notes");
  if (!(await exists(root))) return;
  const years = await fs.readdir(root, { withFileTypes: true });
  for (const y of years) {
    if (!y.isDirectory() || !/^\d{4}$/.test(y.name)) continue;
    for (const channel of ["LIVE", "PTU", "Evocati"]) {
      const dir = path.join(root, y.name, channel);
      if (!(await exists(dir))) continue;
      const files = await fs.readdir(dir);
      for (const f of files) {
        if (!f.endsWith(".md")) continue;
        const full = path.join(dir, f);
        const rel = path.relative(REPO_ROOT, full).replace(/\\/g, "/");
        yield { kind: "patch_note", key: rel, full, year: y.name, channel };
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Per-source chunk builders
// ---------------------------------------------------------------------------

async function buildTranscriptChunks(entry, text) {
  const lines = text.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# ")) || "";
  const videoLine = lines.find((l) => l.startsWith("**Video:**")) || "";
  const dateLine = lines.find((l) => l.startsWith("**Date:**")) || "";
  const title = titleLine.replace(/^#\s*/, "").trim();
  const videoUrlMatch = videoLine.match(/https?:\/\/\S+/);
  const videoUrl = (videoUrlMatch && videoUrlMatch[0]) || `https://www.youtube.com/watch?v=${entry.video_id}`;
  const series = detectSeries(title);

  const tsRegex = /^\[(\d{1,2}:)?\d{1,2}:\d{2}\]\s*/;
  const body = [];
  for (const line of lines) {
    if (line.startsWith("#") || line.startsWith("**Video:") || line.startsWith("**Date:")) continue;
    if (!line.trim()) continue;
    body.push(line);
  }

  const chunks = [];
  let buf = [];
  let chars = 0;
  let firstTs = null;
  for (const line of body) {
    const m = line.match(tsRegex);
    if (m && firstTs === null) firstTs = parseTs(m[0]);
    buf.push(line);
    chars += line.length + 1;
    if (chars >= CHUNK_CHARS) {
      chunks.push({ text: buf.join("\n"), timestamp_seconds: firstTs });
      const tail = [];
      let tailChars = 0;
      for (let i = buf.length - 1; i >= 0; i--) {
        tail.unshift(buf[i]);
        tailChars += buf[i].length + 1;
        if (tailChars >= CHUNK_OVERLAP) break;
      }
      buf = tail;
      chars = tailChars;
      const tailFirst = tail[0] && tail[0].match(tsRegex);
      firstTs = tailFirst ? parseTs(tailFirst[0]) : null;
    }
  }
  if (buf.length) chunks.push({ text: buf.join("\n"), timestamp_seconds: firstTs });

  const idPrefix = "tx-" + sha1(entry.key).slice(0, 24);
  return chunks.map((c, idx) => ({
    id: `${idPrefix}:${idx}`,
    text: c.text,
    metadata: {
      source_type: "transcript",
      year: entry.year,
      video_id: entry.video_id,
      title,
      series,
      url: videoUrl,
      date: dateLine.replace(/^\*\*Date:\*\*\s*/, "").trim() || null,
      timestamp_seconds: c.timestamp_seconds || 0,
      text: truncate(c.text, 1800),
    },
  }));
}

function parseTs(s) {
  const m = s.match(/\[(?:(\d{1,2}):)?(\d{1,2}):(\d{2})\]/);
  if (!m) return null;
  const h = parseInt(m[1] || "0", 10);
  const mm = parseInt(m[2], 10);
  const ss = parseInt(m[3], 10);
  return h * 3600 + mm * 60 + ss;
}

async function buildPatchChunks(entry, text) {
  const titleLine = text.split("\n").find((l) => l.startsWith("# ")) || path.basename(entry.full);
  const title = titleLine.replace(/^#\s*/, "").trim();
  const patchVersion = extractPatchVersion(path.basename(entry.full)) ||
    (title.match(/(\d+\.\d+(?:\.\d+)?)/) || [])[1] || null;

  const sections = text.split(/\n(?=##\s)/);
  const idPrefix = "pn-" + sha1(entry.key).slice(0, 24);
  const out = [];
  let chunkIdx = 0;
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i].trim();
    if (sec.length < 80) continue;
    const pieces = chunkText(sec);
    for (const p of pieces) {
      out.push({
        id: `${idPrefix}:${chunkIdx}`,
        text: p,
        metadata: {
          source_type: "patch_note",
          year: entry.year,
          channel: entry.channel,
          title,
          patch_version: patchVersion,
          url: null,
          text: truncate(p, 1800),
        },
      });
      chunkIdx++;
    }
  }
  return out;
}

function shipSourceKey(name) { return `ship:${name}`; }

async function buildShipSources() {
  const file = path.join(DATA_DIR, "ships.json");
  if (!(await exists(file))) return { entries: [], corrections: {}, fileHash: null };
  const raw = await fs.readFile(file, "utf8");
  const json = JSON.parse(raw);
  const corrections = json.transcript_corrections || {};
  delete corrections._description;
  const entries = [];
  const manufacturers = json.manufacturers || {};
  for (const [maker, info] of Object.entries(manufacturers)) {
    const ships = info.ships || [];
    for (const ship of ships) {
      const name = ship.name || ship;
      const aliases = (ship.aliases || []).join(", ");
      const role = ship.role || ship.type || "";
      const desc = ship.description || "";
      const text = [
        `${name} (${maker})`,
        role && `Role: ${role}`,
        aliases && `Also known as: ${aliases}`,
        desc,
      ].filter(Boolean).join("\n");
      if (text.length < 30) continue;
      const key = shipSourceKey(name);
      const sha = sha1(`${maker}\n${text}`);
      const idPrefix = "sh-" + sha1(key).slice(0, 24);
      entries.push({
        key,
        sha,
        chunks: [{
          id: `${idPrefix}:0`,
          text,
          metadata: {
            source_type: "ship",
            title: name,
            ship: name,
            manufacturer: maker,
            text: truncate(text, 1800),
          },
        }],
      });
    }
  }
  return { entries, corrections, fileHash: sha1(raw) };
}

function truncate(s, n) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n - 1) + "\u2026" : s;
}

// ---------------------------------------------------------------------------
// Cloudflare API helpers
// ---------------------------------------------------------------------------

async function cf(pathSegment, init = {}) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}${pathSegment}`;
  const res = await fetch(url, {
    ...init,
    headers: { Authorization: `Bearer ${API_TOKEN}`, ...(init.headers || {}) },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Cloudflare ${res.status} ${pathSegment}: ${body.slice(0, 500)}`);
  }
  return res;
}

async function embedBatch(texts) {
  const res = await cf(`/ai/run/${EMBED_MODEL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: texts }),
  });
  const json = await res.json();
  const vecs = json && json.result && json.result.data;
  if (!Array.isArray(vecs)) throw new Error("Embedding response malformed: " + JSON.stringify(json).slice(0, 300));
  return vecs;
}

async function upsertVectors(vectors) {
  const ndjson = vectors.map((v) => JSON.stringify(v)).join("\n");
  const res = await cf(`/vectorize/v2/indexes/${VECTORIZE_INDEX}/upsert`, {
    method: "POST",
    headers: { "Content-Type": "application/x-ndjson" },
    body: ndjson,
  });
  await res.text();
}

async function deleteVectorIds(ids) {
  if (!ids.length) return;
  // Vectorize delete-by-ids endpoint accepts up to ~1000 at a time.
  const CHUNK = 500;
  for (let i = 0; i < ids.length; i += CHUNK) {
    const slice = ids.slice(i, i + CHUNK);
    await cf(`/vectorize/v2/indexes/${VECTORIZE_INDEX}/delete-by-ids`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: slice }),
    });
  }
}

async function getKv(namespaceId, key) {
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${namespaceId}/values/${encodeURIComponent(key)}`,
    { headers: { Authorization: `Bearer ${API_TOKEN}` } }
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`KV GET ${res.status}: ${await res.text()}`);
  return res.text();
}

async function putKv(namespaceId, key, value) {
  const res = await cf(`/storage/kv/namespaces/${namespaceId}/values/${encodeURIComponent(key)}`, {
    method: "PUT",
    headers: { "Content-Type": "text/plain" },
    body: typeof value === "string" ? value : JSON.stringify(value),
  });
  await res.text();
}

// ---------------------------------------------------------------------------
// Manifest
// ---------------------------------------------------------------------------

async function loadManifest() {
  try {
    const raw = await getKv(API_KEYS_KV_ID, MANIFEST_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (e) {
    console.warn(`! Manifest load failed (${e.message}); treating as empty.`);
    return {};
  }
}

async function saveManifest(manifest) {
  await putKv(API_KEYS_KV_ID, MANIFEST_KEY, JSON.stringify(manifest));
}

/**
 * Given a source's id prefix and its previous + current chunk count, return
 * the vector IDs of any trailing chunks that should be deleted from Vectorize.
 */
function trailingIdsToDelete(idPrefix, prevCount, newCount) {
  if (!prevCount || prevCount <= newCount) return [];
  const ids = [];
  for (let i = newCount; i < prevCount; i++) ids.push(`${idPrefix}:${i}`);
  return ids;
}

function idPrefixForKey(kind, key) {
  if (kind === "transcript") return "tx-" + sha1(key).slice(0, 24);
  if (kind === "patch_note") return "pn-" + sha1(key).slice(0, 24);
  if (kind === "ship") return "sh-" + sha1(key).slice(0, 24);
  return null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Building index in ${MODE} mode...`);
  const manifest = (MODE === "full") ? {} : await loadManifest();
  const seenKeys = new Set();
  const allChunks = [];
  const idsToDelete = [];
  const counters = { skipped: 0, rebuilt: 0, new: 0, deleted_files: 0 };

  // ---- Ships --------------------------------------------------------------
  console.log("- Ships");
  const ships = await buildShipSources();
  for (const ent of ships.entries) {
    seenKeys.add(ent.key);
    const prev = manifest[ent.key];
    if (MODE !== "full" && prev && prev.sha1 === ent.sha) {
      counters.skipped++;
      continue;
    }
    const newCount = ent.chunks.length;
    if (prev && prev.chunk_count > newCount) {
      const idPrefix = idPrefixForKey("ship", ent.key);
      idsToDelete.push(...trailingIdsToDelete(idPrefix, prev.chunk_count, newCount));
    }
    allChunks.push(...ent.chunks);
    manifest[ent.key] = { kind: "ship", sha1: ent.sha, chunk_count: newCount };
    if (prev) counters.rebuilt++; else counters.new++;
  }
  console.log(`  ${ships.entries.length} ships; ${counters.skipped} unchanged so far`);

  // ---- Patch notes --------------------------------------------------------
  console.log("- Patch notes");
  for await (const entry of walkPatchNotes()) {
    seenKeys.add(entry.key);
    const raw = await fs.readFile(entry.full, "utf8");
    const sha = sha1(raw);
    const prev = manifest[entry.key];
    if (MODE !== "full" && prev && prev.sha1 === sha) {
      counters.skipped++;
      continue;
    }
    const chunks = await buildPatchChunks(entry, raw);
    const newCount = chunks.length;
    if (prev && prev.chunk_count > newCount) {
      const idPrefix = idPrefixForKey("patch_note", entry.key);
      idsToDelete.push(...trailingIdsToDelete(idPrefix, prev.chunk_count, newCount));
    }
    allChunks.push(...chunks);
    manifest[entry.key] = { kind: "patch_note", sha1: sha, chunk_count: newCount };
    if (prev) counters.rebuilt++; else counters.new++;
  }

  // ---- Transcripts --------------------------------------------------------
  console.log("- Transcripts");
  for await (const entry of walkTranscripts()) {
    seenKeys.add(entry.key);
    const raw = await fs.readFile(entry.full, "utf8");
    const sha = sha1(raw);
    const prev = manifest[entry.key];
    if (MODE !== "full" && prev && prev.sha1 === sha) {
      counters.skipped++;
      continue;
    }
    const chunks = await buildTranscriptChunks(entry, raw);
    const newCount = chunks.length;
    if (prev && prev.chunk_count > newCount) {
      const idPrefix = idPrefixForKey("transcript", entry.key);
      idsToDelete.push(...trailingIdsToDelete(idPrefix, prev.chunk_count, newCount));
    }
    allChunks.push(...chunks);
    manifest[entry.key] = { kind: "transcript", sha1: sha, chunk_count: newCount };
    if (prev) counters.rebuilt++; else counters.new++;
  }

  // ---- Orphaned source files ---------------------------------------------
  // Any manifest entry whose key no longer exists in seenKeys is a source
  // that's been removed from the repo. Delete all its vectors.
  for (const [key, info] of Object.entries(manifest)) {
    if (seenKeys.has(key)) continue;
    const idPrefix = idPrefixForKey(info.kind, key);
    if (!idPrefix) continue;
    const ids = [];
    for (let i = 0; i < (info.chunk_count || 0); i++) ids.push(`${idPrefix}:${i}`);
    idsToDelete.push(...ids);
    delete manifest[key];
    counters.deleted_files++;
  }

  console.log(
    `Source plan: ${counters.new} new, ${counters.rebuilt} changed, ${counters.skipped} unchanged, ` +
    `${counters.deleted_files} removed files, ${idsToDelete.length} orphan/trailing vectors.`
  );
  console.log(`Total chunks to (re-)embed: ${allChunks.length}`);

  // ---- Delete first, so trailing IDs don't outlive their replacements -----
  if (idsToDelete.length) {
    console.log(`Deleting ${idsToDelete.length} stale vectors...`);
    await deleteVectorIds(idsToDelete);
  }

  // ---- Embed + upsert -----------------------------------------------------
  for (let i = 0; i < allChunks.length; i += BATCH_SIZE) {
    const batch = allChunks.slice(i, i + BATCH_SIZE);
    const texts = batch.map((b) => b.text);
    const vecs = await embedBatch(texts);
    const vectors = batch.map((b, j) => ({ id: b.id, values: vecs[j], metadata: b.metadata }));
    await upsertVectors(vectors);
    if (i % (BATCH_SIZE * 10) === 0 || i + BATCH_SIZE >= allChunks.length) {
      process.stdout.write(`  ${Math.min(i + BATCH_SIZE, allChunks.length)}/${allChunks.length}\r`);
    }
  }
  if (allChunks.length) console.log();

  // ---- Persist manifest + ship corrections --------------------------------
  console.log("Saving manifest...");
  await saveManifest(manifest);

  console.log("Writing ship corrections to KV...");
  await putKv(API_KEYS_KV_ID, "system:ship_corrections", JSON.stringify(ships.corrections));
  console.log(`  Wrote ${Object.keys(ships.corrections).length} corrections.`);

  console.log("Done.");
  console.log(JSON.stringify({ mode: MODE, ...counters, embedded: allChunks.length, deleted_ids: idsToDelete.length }, null, 2));
}

main().catch((e) => { console.error(e); process.exit(1); });
