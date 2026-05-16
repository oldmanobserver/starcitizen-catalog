// functions/ingest/chunkers.js
//
// Shared chunkers used by both the vector-index builder (build_index.js) and
// the catalog/FTS sync (sync_catalog.js). They MUST produce identical chunk
// boundaries and chunk indices, so a vector ID and an FTS row for the same
// chunk line up exactly.
//
// Pure module — no Cloudflare / Node-runtime dependencies beyond standard
// library imports. Safe to import from either ingest script.

import crypto from "node:crypto";
import path from "node:path";
import { detectSeries, extractPatchVersion } from "../lib/catalog.js";

export const CHUNK_TOKENS = 400;
export const CHUNK_CHARS = CHUNK_TOKENS * 4;
export const CHUNK_OVERLAP = 200;

export function sha1(s) {
  return crypto.createHash("sha1").update(s).digest("hex");
}

export function truncate(s, n) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n - 1) + "\u2026" : s;
}

/**
 * Generic sliding-window text chunker for unstructured prose (used inside
 * patch-note sections). Tries to break at the nearest paragraph or sentence
 * boundary when one falls in the back half of the window.
 */
export function chunkText(text, opts = {}) {
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

export function parseTs(s) {
  const m = String(s || "").match(/\[(?:(\d{1,2}):)?(\d{1,2}):(\d{2})\]/);
  if (!m) return null;
  const h = parseInt(m[1] || "0", 10);
  const mm = parseInt(m[2], 10);
  const ss = parseInt(m[3], 10);
  return h * 3600 + mm * 60 + ss;
}

/**
 * Chunk a transcript markdown file. `entry` provides {year, video_id, key}
 * where `key` is the repo-relative path used to derive the vector ID prefix.
 * Returns chunks in narrative order with deterministic IDs.
 */
export function buildTranscriptChunks(entry, text) {
  const lines = text.split("\n");
  const titleLine = lines.find((l) => l.startsWith("# ")) || "";
  const videoLine = lines.find((l) => l.startsWith("**Video:**")) || "";
  const dateLine = lines.find((l) => l.startsWith("**Date:**")) || "";
  const title = titleLine.replace(/^#\s*/, "").trim();
  const videoUrlMatch = videoLine.match(/https?:\/\/\S+/);
  const videoUrl =
    (videoUrlMatch && videoUrlMatch[0]) ||
    `https://www.youtube.com/watch?v=${entry.video_id}`;
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
    chunk_idx: idx,
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

/**
 * Chunk a patch-note markdown file. `entry` provides {year, channel, full, key}.
 * Sections are split on H2 boundaries; sections that exceed CHUNK_CHARS are
 * further sliced with the generic chunker.
 *
 * We deliberately prefer the official robertsspaceindustries.com comm-link
 * Patch-Notes URL (e.g. .../comm-link/Patch-Notes/20934-Star-Citizen-Alpha-450)
 * over the Spectrum forum URL recorded at the top of the file. The Spectrum
 * forum requires login to render properly and is not the canonical source for
 * patch-note content, so we never expose it to either the LLM or the user.
 */
export function buildPatchChunks(entry, text) {
  const rawLines = text.split("\n");
  const titleLine = rawLines.find((l) => l.startsWith("# ")) || path.basename(entry.full);
  const title = titleLine.replace(/^#\s*/, "").trim();
  const patchVersion =
    extractPatchVersion(path.basename(entry.full)) ||
    (title.match(/(\d+\.\d+(?:\.\d+)?)/) || [])[1] ||
    null;

  // Strip the preamble (Title / Date / URL metadata + leading --- divider).
  // The preamble carries the Spectrum forum URL, which we don't want bleeding
  // into chunk text where the LLM might pick it up as a citation source.
  let bodyStart = 0;
  for (let i = 0; i < rawLines.length; i++) {
    const ln = rawLines[i];
    if (/^\*\*(Title|Date|URL):\*\*/i.test(ln)) continue;
    if (/^---\s*$/.test(ln)) { bodyStart = i + 1; continue; }
    if (ln.trim() === "" && bodyStart === i) { bodyStart = i + 1; continue; }
    break;
  }
  const body = rawLines.slice(bodyStart).join("\n");

  // Prefer the official comm-link Patch-Notes URL embedded in the body
  // (every modern patch note links to its full release notes page). Fall back
  // to a generic Patch-Notes URL anywhere in the file. We intentionally do
  // NOT fall back to the Spectrum forum URL from the preamble.
  const officialUrl = extractOfficialPatchUrl(text);

  const sections = body.split(/\n(?=##\s)/);
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
        chunk_idx: chunkIdx,
        text: p,
        metadata: {
          source_type: "patch_note",
          year: entry.year,
          channel: entry.channel,
          title,
          patch_version: patchVersion,
          url: officialUrl,
          text: truncate(p, 1800),
        },
      });
      chunkIdx++;
    }
  }
  return out;
}

/**
 * Return the first robertsspaceindustries.com Patch-Notes comm-link URL in the
 * given text, normalised (no trailing punctuation, https scheme). Returns null
 * if no such URL is present.
 */
function extractOfficialPatchUrl(text) {
  const re = /https?:\/\/(?:www\.)?robertsspaceindustries\.com\/(?:[a-z]{2}\/)?comm-link\/Patch-Notes\/[^\s)\]>"']+/i;
  const m = text.match(re);
  if (!m) return null;
  return m[0].replace(/[.,;:]+$/, "");
}
