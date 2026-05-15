// functions/lib/rag.js
// Hybrid retrieval: structured D1 catalog + Vectorize semantic search.

import { classifyIntent } from "./catalog.js";

const EMBED_MODEL = "@cf/baai/bge-base-en-v1.5";
const SEMANTIC_TOPK = 12;            // pure-semantic fallback breadth
const PER_DOC_TOPK = 60;             // when fetching all chunks for a doc by metadata filter

/**
 * Embed text with Workers AI. Returns number[] of length 768.
 */
export async function embed(env, text) {
  if (!env.AI) throw new Error("Workers AI binding is not configured");
  const res = await env.AI.run(EMBED_MODEL, { text: [text] });
  const v = res && (res.data ? res.data[0] : res[0]);
  if (!Array.isArray(v)) throw new Error("Embedding response was malformed");
  return v;
}

/**
 * Top-level retrieval entry point. Returns:
 *   { matches: VectorizeMatch[], intent: object|null, focusDocs: [{ kind, label, ... }] }
 *
 * `focusDocs` describes which specific documents we believe the user is asking
 * about — surfaced to the LLM in the system prompt so it can ground its answer.
 */
export async function retrieveSmart(env, query) {
  const intent = classifyIntent(query);
  const focusDocs = [];
  let matches = [];

  if (intent) {
    try {
      const result = await retrieveByIntent(env, query, intent);
      matches = result.matches;
      focusDocs.push(...result.focusDocs);
    } catch (e) {
      console.error("intent retrieval failed", e);
    }
  }

  // If we couldn't find anything via structured lookup, fall back to semantic.
  if (matches.length === 0) {
    matches = await retrieveSemantic(env, query, SEMANTIC_TOPK);
  } else if (matches.length < SEMANTIC_TOPK) {
    // Top up with semantic results that aren't already in matches.
    const have = new Set(matches.map((m) => m.id));
    const extra = await retrieveSemantic(env, query, SEMANTIC_TOPK);
    for (const m of extra) {
      if (!have.has(m.id)) matches.push(m);
      if (matches.length >= SEMANTIC_TOPK + 4) break;
    }
  }

  return { matches, intent, focusDocs };
}

/**
 * Pure-semantic retrieval. Used as fallback and as a top-up.
 */
async function retrieveSemantic(env, query, topK) {
  if (!env.VECTORIZE) return [];
  const vector = await embed(env, query);
  const result = await env.VECTORIZE.query(vector, {
    topK,
    returnMetadata: "all",
  });
  return (result && result.matches) || [];
}

/**
 * Backwards-compat shim used by older call sites.
 */
export async function retrieve(env, query, topK = SEMANTIC_TOPK) {
  return retrieveSemantic(env, query, topK);
}

// ---------------------------------------------------------------------------
// Intent-driven retrieval
// ---------------------------------------------------------------------------

async function retrieveByIntent(env, query, intent) {
  if (!env.DB) return { matches: [], focusDocs: [] };

  if (intent.kind === "latest_series") {
    const rows = await env.DB.prepare(
      `SELECT video_id, title, upload_date, url, series, has_transcript
       FROM catalog_videos
       WHERE series = ? AND has_transcript = 1
       ORDER BY upload_date DESC
       LIMIT 1`
    ).bind(intent.series).all();
    const videos = (rows.results || []);
    if (!videos.length) return { matches: [], focusDocs: [] };
    const focusDocs = videos.map((v) => ({
      kind: "video",
      video_id: v.video_id,
      title: v.title,
      series: v.series,
      upload_date: v.upload_date,
      url: v.url,
      label: `${v.series} — ${v.title} (${fmtDate(v.upload_date)})`,
    }));
    const matches = await fetchAllChunksForVideos(env, query, videos.map((v) => v.video_id));
    return { matches, focusDocs };
  }

  if (intent.kind === "series_any") {
    // Don't pre-filter; just enrich the system prompt with focusDocs of the
    // top 5 most recent videos in that series so the LLM knows what we're
    // working with, but let semantic search still drive retrieval.
    const rows = await env.DB.prepare(
      `SELECT video_id, title, upload_date, url, series
       FROM catalog_videos
       WHERE series = ? AND has_transcript = 1
       ORDER BY upload_date DESC
       LIMIT 5`
    ).bind(intent.series).all();
    const focusDocs = (rows.results || []).map((v) => ({
      kind: "video",
      video_id: v.video_id,
      title: v.title,
      series: v.series,
      upload_date: v.upload_date,
      url: v.url,
      label: `${v.series} — ${v.title} (${fmtDate(v.upload_date)})`,
    }));
    return { matches: [], focusDocs };
  }

  if (intent.kind === "patch") {
    // Find patch-note files matching the version (and optionally channel).
    let sql = `SELECT id, channel, version, title, file_path FROM catalog_patches WHERE version = ?`;
    const params = [intent.version];
    if (intent.channel) {
      sql += ` AND channel = ?`;
      params.push(intent.channel);
    }
    sql += ` ORDER BY channel = 'LIVE' DESC, channel = 'PTU' DESC, id DESC LIMIT 5`;
    const rows = await env.DB.prepare(sql).bind(...params).all();
    const patches = rows.results || [];
    if (!patches.length) return { matches: [], focusDocs: [] };

    const focusDocs = patches.map((p) => ({
      kind: "patch",
      patch_version: p.version,
      channel: p.channel,
      title: p.title,
      label: `Patch ${p.version || ""} ${p.channel}: ${p.title}`,
    }));
    const matches = await fetchAllChunksForPatch(env, query, intent.version, intent.channel);
    return { matches, focusDocs };
  }

  if (intent.kind === "latest_patch") {
    const rows = await env.DB.prepare(
      `SELECT id, channel, version, title FROM catalog_patches
       WHERE channel = ? AND version IS NOT NULL
       ORDER BY version DESC LIMIT 1`
    ).bind(intent.channel).all();
    const patches = rows.results || [];
    if (!patches.length) return { matches: [], focusDocs: [] };
    const top = patches[0];
    const focusDocs = [{
      kind: "patch",
      patch_version: top.version,
      channel: top.channel,
      title: top.title,
      label: `Patch ${top.version} ${top.channel}: ${top.title}`,
    }];
    const matches = await fetchAllChunksForPatch(env, query, top.version, top.channel);
    return { matches, focusDocs };
  }

  return { matches: [], focusDocs: [] };
}

/**
 * Fetch all available chunks for one or more videos, ranked by relevance to the query.
 * Uses Vectorize's metadata filter (requires a `video_id` metadata index).
 */
async function fetchAllChunksForVideos(env, query, videoIds) {
  if (!env.VECTORIZE || !videoIds.length) return [];
  const vector = await embed(env, query);
  const all = [];
  for (const id of videoIds) {
    try {
      const result = await env.VECTORIZE.query(vector, {
        topK: PER_DOC_TOPK,
        returnMetadata: "all",
        filter: { video_id: id },
      });
      for (const m of (result.matches || [])) all.push(m);
    } catch (e) {
      // Metadata filter not yet indexed → fail soft, semantic fallback handles it.
      console.error(`vectorize filter video_id=${id}`, e);
    }
  }
  return all;
}

async function fetchAllChunksForPatch(env, query, version, channel) {
  if (!env.VECTORIZE || !version) return [];
  const vector = await embed(env, query);
  try {
    const filter = { patch_version: version };
    if (channel) filter.channel = channel;
    const result = await env.VECTORIZE.query(vector, {
      topK: PER_DOC_TOPK,
      returnMetadata: "all",
      filter,
    });
    return result.matches || [];
  } catch (e) {
    console.error("vectorize filter patch", e);
    return [];
  }
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

/**
 * Render retrieved matches into a compact context block + citation list.
 */
export function renderContext(matches) {
  const citations = [];
  const lines = [];
  matches.forEach((m, i) => {
    const md = m.metadata || {};
    const tag = `[#${i + 1}]`;
    citations.push({
      ref: i + 1,
      score: m.score,
      source_type: md.source_type,
      title: md.title || null,
      video_id: md.video_id || null,
      timestamp_seconds: md.timestamp_seconds || null,
      url: buildCitationUrl(md),
      patch_version: md.patch_version || null,
      channel: md.channel || null,
      ship: md.ship || null,
    });
    lines.push(`${tag} (${md.source_type || "?"} ${citationLabel(md)})\n${md.text || ""}`);
  });
  return { contextText: lines.join("\n\n"), citations };
}

function citationLabel(md) {
  if (md.source_type === "transcript") {
    const ts = md.timestamp_seconds ? ` @ ${fmtTs(md.timestamp_seconds)}` : "";
    return `${md.title || "video"}${ts}`;
  }
  if (md.source_type === "patch_note") {
    return `Patch ${md.patch_version || ""} ${md.channel || ""}`.trim();
  }
  if (md.source_type === "ship") {
    return `Ship: ${md.ship || md.title || ""}`;
  }
  return md.title || "";
}

function fmtTs(s) {
  s = Math.floor(Number(s) || 0);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`
    : `${m}:${String(ss).padStart(2, "0")}`;
}

function fmtDate(d) {
  if (!d || d.length < 8) return d || "";
  return `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
}

function buildCitationUrl(md) {
  if (md.source_type === "transcript" && md.video_id) {
    const t = md.timestamp_seconds ? `&t=${Math.floor(md.timestamp_seconds)}s` : "";
    return `https://www.youtube.com/watch?v=${md.video_id}${t}`;
  }
  if (md.source_type === "patch_note" && md.url) return md.url;
  return md.url || null;
}

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------

/**
 * Assemble the system prompt used for every chat turn.
 * - shipCorrections: { wrong: "Correct Name" } map
 * - contextText: rendered chunks string (from renderContext)
 * - focusDocs: optional [{ label, ... }] from intent detection
 */
export function buildSystemPrompt({ shipCorrections, contextText, focusDocs }) {
  const today = new Date().toISOString().slice(0, 10);

  const guidance = [
    `You are the Star Citizen Catalog assistant. Today's date is ${today}.`,
    "You answer player questions about Star Citizen ships, patch notes, and community video discussions.",
    "Ground every factual claim in the supplied CONTEXT snippets and cite them inline with their [#n] tag.",
    "If the CONTEXT does not contain enough information to answer, say so plainly and do not invent details.",
    "When you mention a ship or vehicle, always use the official canonical name from the corrections map below (preserving the manufacturer prefix).",
    "When citing video content, include a clickable timestamp link of the form https://www.youtube.com/watch?v=VIDEO_ID&t=SECONDSs.",
    "When citing patch notes, mention the patch version (e.g. 'Alpha 4.5 PTU') so the reader knows which release the change applies to.",
    "If asked about 'the latest' or 'most recent' content, prefer entries from the FOCUS DOCUMENTS block below; those have already been selected by date.",
  ].join(" ");

  const focusBlock = focusDocs && focusDocs.length
    ? `FOCUS DOCUMENTS (the user is most likely asking about these):\n${focusDocs.map((d, i) => `- ${d.label}`).join("\n")}`
    : "";

  const correctionsBlock = shipCorrections && Object.keys(shipCorrections).length
    ? `SHIP NAME CORRECTIONS (wrong -> correct):\n${Object.entries(shipCorrections)
        .slice(0, 200)
        .map(([k, v]) => `- ${k} -> ${v}`)
        .join("\n")}`
    : "";

  const contextBlock = contextText
    ? `CONTEXT:\n${contextText}`
    : "CONTEXT: (no relevant snippets found — say so if the user asks for specifics)";

  return [guidance, focusBlock, correctionsBlock, contextBlock].filter(Boolean).join("\n\n");
}
