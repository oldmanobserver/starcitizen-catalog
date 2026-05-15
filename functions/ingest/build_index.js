#!/usr/bin/env node
// functions/ingest/build_index.js
//
// One-off (rerunnable) index builder. Walks the local catalog files, chunks them,
// embeds each chunk via Cloudflare Workers AI, and upserts the vectors into Vectorize.
// It also writes the transcript_corrections map into the API_KEYS KV namespace under
// the key "system:ship_corrections" so the chat endpoint can load it cheaply.
//
// Usage:
//   CF_ACCOUNT_ID=...  CF_API_TOKEN=...  VECTORIZE_INDEX=sc-catalog  API_KEYS_KV_ID=... \
//     node functions/ingest/build_index.js
//
// The API token must have:
//   - Workers AI: Read
//   - Vectorize: Edit
//   - Workers KV Storage: Edit
//
// Re-running is safe: each vector ID is deterministic (sha256 of source path + chunk index).

import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const DATA_DIR = path.join(REPO_ROOT, "functions", "data");

const ACCOUNT_ID = req("CF_ACCOUNT_ID");
const API_TOKEN = req("CF_API_TOKEN");
const VECTORIZE_INDEX = process.env.VECTORIZE_INDEX || "sc-catalog";
const API_KEYS_KV_ID = process.env.API_KEYS_KV_ID || "";
const EMBED_MODEL = process.env.EMBED_MODEL || "@cf/baai/bge-base-en-v1.5";

const CHUNK_TOKENS = 400; // approx; we measure by characters/4
const CHUNK_CHARS = CHUNK_TOKENS * 4;
const CHUNK_OVERLAP = 200;
const BATCH_SIZE = 32;

function req(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing required env var: ${name}`);
    process.exit(1);
  }
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
    // try not to cut a sentence
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
// Source walkers
// ---------------------------------------------------------------------------

async function* walkTranscripts() {
  const youtubeDir = path.join(DATA_DIR, "youtube");
  if (!(await exists(youtubeDir))) return;
  const yearEntries = await fs.readdir(youtubeDir, { withFileTypes: true });
  for (const ye of yearEntries) {
    if (!ye.isDirectory() || !/^\d{4}$/.test(ye.name)) continue;
    const tDir = path.join(youtubeDir, ye.name, "transcripts");
    if (!(await exists(tDir))) continue;
    const files = await fs.readdir(tDir);
    for (const f of files) {
      if (!f.endsWith(".md")) continue;
      yield {
        path: path.join(tDir, f),
        year: ye.name,
        video_id: f.replace(/\.md$/, ""),
      };
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
        yield {
          path: path.join(dir, f),
          year: y.name,
          channel,
        };
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Per-source chunk builders
// ---------------------------------------------------------------------------

async function buildTranscriptChunks(entry) {
  const text = await fs.readFile(entry.path, "utf8");
  const lines = text.split("\n");
  // Title and video URL from header lines.
  const titleLine = lines.find((l) => l.startsWith("# ")) || "";
  const videoLine = lines.find((l) => l.startsWith("**Video:**")) || "";
  const dateLine = lines.find((l) => l.startsWith("**Date:**")) || "";
  const title = titleLine.replace(/^#\s*/, "").trim();
  const videoUrlMatch = videoLine.match(/https?:\/\/\S+/);
  const videoUrl = (videoUrlMatch && videoUrlMatch[0]) || `https://www.youtube.com/watch?v=${entry.video_id}`;

  // Skip the header (first ~9 lines) for chunking; group lines into ~400-token windows
  // and remember the first timestamp in each chunk for citation linking.
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
      // overlap: keep tail
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

  return chunks.map((c, idx) => ({
    id: "tx-" + sha1(entry.path + ":" + idx).slice(0, 24),
    metadata: {
      source_type: "transcript",
      year: entry.year,
      video_id: entry.video_id,
      title,
      url: videoUrl,
      date: dateLine.replace(/^\*\*Date:\*\*\s*/, "").trim() || null,
      timestamp_seconds: c.timestamp_seconds || 0,
      text: truncate(c.text, 1800),
    },
    text: c.text,
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

async function buildPatchChunks(entry) {
  const text = await fs.readFile(entry.path, "utf8");
  const titleLine = text.split("\n").find((l) => l.startsWith("# ")) || path.basename(entry.path);
  const title = titleLine.replace(/^#\s*/, "").trim();
  const versionMatch = title.match(/(Alpha\s*[\d.]+|\d+\.\d+(?:\.\d+)?)/i);
  const patchVersion = versionMatch ? versionMatch[1] : null;

  // Split on H2/H3 sections so each chunk is a coherent topic.
  const sections = text.split(/\n(?=##\s)/);
  const out = [];
  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i].trim();
    if (sec.length < 80) continue;
    const pieces = chunkText(sec);
    pieces.forEach((p, j) => {
      out.push({
        id: "pn-" + sha1(entry.path + ":" + i + ":" + j).slice(0, 24),
        metadata: {
          source_type: "patch_note",
          year: entry.year,
          channel: entry.channel,
          title,
          patch_version: patchVersion,
          url: null,
          text: truncate(p, 1800),
        },
        text: p,
      });
    });
  }
  return out;
}

async function buildShipChunks() {
  const file = path.join(DATA_DIR, "ships.json");
  if (!(await exists(file))) return { chunks: [], corrections: {} };
  const json = JSON.parse(await fs.readFile(file, "utf8"));
  const corrections = json.transcript_corrections || {};
  delete corrections._description;

  const chunks = [];
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
      chunks.push({
        id: "sh-" + sha1(name).slice(0, 24),
        metadata: {
          source_type: "ship",
          title: name,
          ship: name,
          manufacturer: maker,
          text: truncate(text, 1800),
        },
        text,
      });
    }
  }
  return { chunks, corrections };
}

function truncate(s, n) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

// ---------------------------------------------------------------------------
// Cloudflare API helpers
// ---------------------------------------------------------------------------

async function cf(pathSegment, init = {}) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}${pathSegment}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      ...(init.headers || {}),
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Cloudflare API ${res.status} ${pathSegment}: ${body.slice(0, 500)}`);
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
  // Vectorize accepts NDJSON via /vectorize/v2/indexes/{name}/upsert
  const ndjson = vectors.map((v) => JSON.stringify(v)).join("\n");
  const res = await cf(`/vectorize/v2/indexes/${VECTORIZE_INDEX}/upsert`, {
    method: "POST",
    headers: { "Content-Type": "application/x-ndjson" },
    body: ndjson,
  });
  await res.text();
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
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("Building index...");
  const all = [];

  console.log("- Ships");
  const { chunks: shipChunks, corrections } = await buildShipChunks();
  console.log(`  ${shipChunks.length} ship chunks`);
  all.push(...shipChunks);

  console.log("- Patch notes");
  let pnCount = 0;
  for await (const entry of walkPatchNotes()) {
    const cs = await buildPatchChunks(entry);
    all.push(...cs);
    pnCount += cs.length;
  }
  console.log(`  ${pnCount} patch-note chunks`);

  console.log("- Transcripts");
  let txCount = 0;
  for await (const entry of walkTranscripts()) {
    const cs = await buildTranscriptChunks(entry);
    all.push(...cs);
    txCount += cs.length;
  }
  console.log(`  ${txCount} transcript chunks`);

  console.log(`Total: ${all.length} chunks. Embedding + upserting in batches of ${BATCH_SIZE}...`);

  for (let i = 0; i < all.length; i += BATCH_SIZE) {
    const batch = all.slice(i, i + BATCH_SIZE);
    const texts = batch.map((b) => b.text);
    const vecs = await embedBatch(texts);
    const vectors = batch.map((b, j) => ({
      id: b.id,
      values: vecs[j],
      metadata: b.metadata,
    }));
    await upsertVectors(vectors);
    process.stdout.write(`  ${Math.min(i + BATCH_SIZE, all.length)}/${all.length}\r`);
  }
  console.log("\nVectorize upserts done.");

  if (API_KEYS_KV_ID) {
    console.log("Writing ship corrections to KV...");
    await putKv(API_KEYS_KV_ID, "system:ship_corrections", JSON.stringify(corrections));
    console.log(`  Wrote ${Object.keys(corrections).length} corrections to KV.`);
  } else {
    console.log("Skipping KV upload (set API_KEYS_KV_ID to enable).");
  }

  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
