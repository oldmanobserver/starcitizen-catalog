// functions/lib/rag.js
// Hybrid retrieval: structured D1 catalog + Vectorize semantic search.

import { classifyIntent } from "./catalog.js";

const EMBED_MODEL = "@cf/baai/bge-base-en-v1.5";
// Cloudflare Vectorize: returnMetadata:"all" caps topK at 50.
// returnMetadata:"indexed" allows up to 100 but only returns metadata that has
// a metadata index — which we don't yet have, so we'd lose `text`, `title`,
// `timestamp_seconds`, etc. Keeping `all` and capping at 50 is the safe choice.
const MAX_TOPK = 50;
const SEMANTIC_TOPK = 20;            // pure-semantic fallback breadth
const PER_DOC_TOPK = 50;             // when fetching all chunks for a doc by metadata filter

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
    topK: Math.min(topK || SEMANTIC_TOPK, MAX_TOPK),
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

  if (intent.kind === "title_match") {
    // Try a series of progressively-looser D1 lookups for the title.
    const videos = await searchVideosByTitle(env, intent.title, intent.series);
    if (videos.length) {
      const matches = await fetchAllChunksForVideos(env, query, videos.map((v) => v.video_id));
      if (matches.length) {
        const focusDocs = videos.map((v) => ({
          kind: "video",
          video_id: v.video_id,
          title: v.title,
          series: v.series,
          upload_date: v.upload_date,
          url: v.url,
          label: `${v.series || "Video"} — ${v.title} (${fmtDate(v.upload_date)})`,
        }));
        return { matches, focusDocs };
      }
      // We identified the video but have no transcript chunks for it — record
      // that fact for the system prompt and fall through to patch / semantic.
      const noChunksNote = videos.map((v) => ({
        kind: "missing_transcript",
        title: v.title,
        url: v.url,
        upload_date: v.upload_date,
        label: `\u26a0\ufe0f No transcript indexed for: ${v.title} (${fmtDate(v.upload_date)}) — ${v.url}`,
      }));
      if (intent.series && intent.patch_version) {
        const sp = await retrieveByIntent(env, query, {
          kind: "series_patch",
          series: intent.series,
          patch_version: intent.patch_version,
        });
        return { matches: sp.matches, focusDocs: [...noChunksNote, ...sp.focusDocs] };
      }
      if (intent.patch_version) {
        const patchResult = await retrieveByIntent(env, query, {
          kind: "patch",
          version: intent.patch_version,
          channel: null,
        });
        return {
          matches: patchResult.matches,
          focusDocs: [...noChunksNote, ...patchResult.focusDocs],
        };
      }
      return { matches: [], focusDocs: noChunksNote };
    }
    // No video matched.
    //  Prefer series+patch lookup if both signals were present in the query.
    if (intent.series && intent.patch_version) {
      return retrieveByIntent(env, query, {
        kind: "series_patch",
        series: intent.series,
        patch_version: intent.patch_version,
      });
    }
    if (intent.patch_version) {
      return retrieveByIntent(env, query, { kind: "patch", version: intent.patch_version, channel: null });
    }
    return { matches: [], focusDocs: [] };
  }

  if (intent.kind === "series_patch") {
    const v = intent.patch_version;
    const versionFormats = patchVersionVariants(v);
    const patterns = [];
    for (const vf of versionFormats) {
      patterns.push(`%${vf}%`, `%Alpha ${vf}%`, `%Alpha-${vf}%`);
    }
    let videos = [];
    for (const pattern of patterns) {
      const rows = await env.DB.prepare(
        `SELECT video_id, title, upload_date, url, series, has_transcript
         FROM catalog_videos
         WHERE series = ? AND has_transcript = 1 AND LOWER(title) LIKE LOWER(?)
         ORDER BY upload_date DESC LIMIT 3`
      ).bind(intent.series, pattern).all();
      if (rows.results && rows.results.length) { videos = rows.results; break; }
    }

    if (videos.length) {
      const matches = await fetchAllChunksForVideos(env, query, videos.map((vrow) => vrow.video_id));
      if (matches.length) {
        const focusDocs = videos.map((vrow) => ({
          kind: "video",
          video_id: vrow.video_id,
          title: vrow.title,
          series: vrow.series,
          upload_date: vrow.upload_date,
          url: vrow.url,
          label: `${vrow.series} — ${vrow.title} (${fmtDate(vrow.upload_date)})`,
        }));
        return { matches, focusDocs };
      }
      // Identified the video but no transcript chunks indexed for it.
      const noChunksNote = videos.map((vrow) => ({
        kind: "missing_transcript",
        title: vrow.title,
        url: vrow.url,
        upload_date: vrow.upload_date,
        label: `\u26a0\ufe0f No transcript indexed for: ${vrow.title} (${fmtDate(vrow.upload_date)}) — ${vrow.url}`,
      }));
      const patchResult = await retrieveByIntent(env, query, { kind: "patch", version: v, channel: null });
      return {
        matches: patchResult.matches,
        focusDocs: [...noChunksNote, ...patchResult.focusDocs],
      };
    }
    // No episode mentions the patch in its title — fall through to a patch-note lookup
    // so the user at least gets the patch notes for that version.
    return retrieveByIntent(env, query, { kind: "patch", version: v, channel: null });
  }

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
    const matches = await fetchAllChunksForVideos(env, query, videos.map((v) => v.video_id));
    if (matches.length) {
      const focusDocs = videos.map((v) => ({
        kind: "video",
        video_id: v.video_id,
        title: v.title,
        series: v.series,
        upload_date: v.upload_date,
        url: v.url,
        label: `${v.series} — ${v.title} (${fmtDate(v.upload_date)})`,
      }));
      return { matches, focusDocs };
    }
    // Identified the video but no chunks indexed — surface that and fall through.
    const noChunksNote = videos.map((v) => ({
      kind: "missing_transcript",
      title: v.title,
      url: v.url,
      upload_date: v.upload_date,
      label: `\u26a0\ufe0f No transcript indexed for: ${v.title} (${fmtDate(v.upload_date)}) — ${v.url}`,
    }));
    return { matches: [], focusDocs: noChunksNote };
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
    // Match the version loosely: "4.8" should find "4.8" and "4.8.0".
    const variants = patchVersionVariants(intent.version);
    const placeholders = variants.map(() => "?").join(", ");
    let sql = `SELECT id, channel, version, title, file_path FROM catalog_patches WHERE version IN (${placeholders})`;
    const params = [...variants];
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
    // Use whichever stored version we actually found; the metadata on the
    // chunks matches the patch-note files, not the user's typed version.
    const storedVersion = patches[0].version || intent.version;
    const matches = await fetchAllChunksForPatch(env, query, storedVersion, intent.channel);
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
 * Tries Vectorize's metadata filter first (requires a `video_id` metadata index);
 * if the filter returns nothing (index missing, or vectors pre-date the index),
 * falls back to a wide semantic query then client-side filters by video_id.
 */
async function fetchAllChunksForVideos(env, query, videoIds) {
  if (!env.VECTORIZE || !videoIds.length) return [];
  const vector = await embed(env, query);
  const all = [];
  let filterWorked = false;

  for (const id of videoIds) {
    try {
      const result = await env.VECTORIZE.query(vector, {
        topK: PER_DOC_TOPK,
        returnMetadata: "all",
        filter: { video_id: id },
      });
      const hits = (result && result.matches) || [];
      if (hits.length) {
        filterWorked = true;
        for (const m of hits) all.push(m);
      }
    } catch (e) {
      console.error(`vectorize filter video_id=${id}`, e);
    }
  }

  // Fallback: the metadata index either doesn't exist yet or wasn't populated
  // when these vectors were inserted. Do a wide unfiltered search and
  // client-side filter by video_id from the chunk metadata. We're capped at
  // topK=50 per request, so probe a few different query embeddings to cover
  // more of the index. The query embedding plus a few keyword embeddings
  // built from each video title give us decent coverage of that document.
  if (!filterWorked) {
    const wanted = new Set(videoIds);
    const seen = new Set();
    const probes = [vector];
    // Look up titles in D1 to build extra probes.
    try {
      const placeholders = videoIds.map(() => "?").join(", ");
      const rows = await env.DB.prepare(
        `SELECT title FROM catalog_videos WHERE video_id IN (${placeholders})`
      ).bind(...videoIds).all();
      for (const r of (rows.results || [])) {
        if (r.title) {
          try { probes.push(await embed(env, r.title)); } catch { /* noop */ }
        }
      }
    } catch (e) {
      console.error("d1 probe titles", e);
    }
    for (const probe of probes) {
      try {
        const result = await env.VECTORIZE.query(probe, {
          topK: MAX_TOPK,
          returnMetadata: "all",
        });
        for (const m of (result.matches || [])) {
          if (seen.has(m.id)) continue;
          seen.add(m.id);
          const md = m.metadata || {};
          if (wanted.has(md.video_id)) all.push(m);
        }
      } catch (e) {
        console.error("vectorize unfiltered fallback", e);
      }
    }
  }

  return all;
}

/**
 * Look up videos in D1 by title. Returns up to 3 candidate videos.
 * Strategy (most → least specific):
 *   1. Exact (case-insensitive) match.
 *   2. LIKE %title% (substring).
 *   3. LIKE on the most distinctive tokens of the title.
 *
 * `series` is an optional bias — if we know the user mentioned a series,
 * matches inside that series get returned first.
 */
async function searchVideosByTitle(env, title, series) {
  if (!env.DB || !title) return [];
  const stripped = String(title).replace(/[|"“”:\-]+/g, " ").replace(/\s+/g, " ").trim();
  if (!stripped) return [];
  const likeFull = `%${stripped}%`;

  // 1. Exact match.
  const exact = await env.DB.prepare(
    `SELECT video_id, title, series, upload_date, url
     FROM catalog_videos
     WHERE has_transcript = 1 AND LOWER(title) = LOWER(?)
     ORDER BY upload_date DESC LIMIT 3`
  ).bind(stripped).all();
  if (exact.results && exact.results.length) return exact.results;

  // 2. Substring match (the full normalized title appears verbatim).
  const substr = await env.DB.prepare(
    `SELECT video_id, title, series, upload_date, url
     FROM catalog_videos
     WHERE has_transcript = 1 AND LOWER(title) LIKE LOWER(?)
     ORDER BY (series = ?) DESC, upload_date DESC LIMIT 3`
  ).bind(likeFull, series || "").all();
  if (substr.results && substr.results.length) return substr.results;

  // 3. Tokenize. Keep:
  //    - any alphanumeric token of length >= 2 (so we keep "4.8")
  //    - drop the most generic stop-words that appear in many SC titles.
  //    Distinguish "distinctive" tokens (versions, proper nouns) from "common"
  //    ones so we can favour matches that contain a version number.
  const stopWords = /^(inside|star|citizen|the|and|with|video|episode|alpha|patch|report|live|ptu|evocati|all|ships|ship|in|of|to|for|from|about|what|are|discussed|give|each|nice|chart|format|new|update|updates)$/i;
  const rawTokens = stripped.split(/\s+/);
  const tokens = rawTokens
    .map((t) => t.replace(/^[^a-z0-9.]+|[^a-z0-9.]+$/gi, "")) // trim punctuation
    .filter((t) => t.length >= 2 && !stopWords.test(t));
  // Distinctive = version-like or contains a digit or is long.
  const distinctive = tokens.filter((t) => /\d/.test(t) || t.length >= 6);
  const others = tokens.filter((t) => !distinctive.includes(t));

  // 3a. If there's at least one distinctive token, require it AND optionally rank
  //     extra matches via others.
  if (distinctive.length) {
    const required = distinctive[0];
    const optional = [...distinctive.slice(1), ...others].slice(0, 4);

    // Build a relevance score: 1 for required match (already enforced), +1 per optional hit.
    const scoreExpr = optional.length
      ? optional.map(() => "(LOWER(title) LIKE LOWER(?))").join(" + ")
      : "0";
    const params = [];
    if (optional.length) params.push(...optional.map((t) => `%${t}%`));
    params.push(`%${required}%`);
    params.push(series || "");

    const tok = await env.DB.prepare(
      `SELECT video_id, title, series, upload_date, url,
              (${scoreExpr}) AS relevance
       FROM catalog_videos
       WHERE has_transcript = 1
         AND LOWER(title) LIKE LOWER(?)
       ORDER BY (series = ?) DESC, relevance DESC, upload_date DESC
       LIMIT 5`
    ).bind(...params).all();
    if (tok.results && tok.results.length) return tok.results;
  }

  // 3b. Fall back to series + any token match if a series is in scope.
  if (series && tokens.length) {
    const likes = tokens.slice(0, 3).map(() => "LOWER(title) LIKE LOWER(?)").join(" OR ");
    const params = tokens.slice(0, 3).map((t) => `%${t}%`);
    const tok = await env.DB.prepare(
      `SELECT video_id, title, series, upload_date, url
       FROM catalog_videos
       WHERE has_transcript = 1 AND series = ? AND (${likes})
       ORDER BY upload_date DESC LIMIT 5`
    ).bind(series, ...params).all();
    if (tok.results && tok.results.length) return tok.results;
  }

  return [];
}

async function fetchAllChunksForPatch(env, query, version, channel) {
  if (!env.VECTORIZE || !version) return [];
  const vector = await embed(env, query);
  let filtered = [];
  try {
    const filter = { patch_version: version };
    if (channel) filter.channel = channel;
    const result = await env.VECTORIZE.query(vector, {
      topK: PER_DOC_TOPK,
      returnMetadata: "all",
      filter,
    });
    filtered = (result && result.matches) || [];
  } catch (e) {
    console.error("vectorize filter patch", e);
  }
  if (filtered.length) return filtered;

  // Fallback: wide search + client-side filter. We're capped at topK=50, so
  // build extra probes from the patch version/channel to cover more ground.
  const probes = [vector];
  try {
    probes.push(await embed(env, `Alpha ${version} ${channel || ""} patch notes`));
  } catch { /* noop */ }
  try {
    probes.push(await embed(env, `${version} release notes`));
  } catch { /* noop */ }
  const out = [];
  const seen = new Set();
  for (const probe of probes) {
    try {
      const result = await env.VECTORIZE.query(probe, {
        topK: MAX_TOPK,
        returnMetadata: "all",
      });
      for (const m of (result.matches || [])) {
        if (seen.has(m.id)) continue;
        seen.add(m.id);
        const md = m.metadata || {};
        if (md.source_type !== "patch_note") continue;
        if (md.patch_version !== version) continue;
        if (channel && md.channel !== channel) continue;
        out.push(m);
      }
    } catch (e) {
      console.error("vectorize unfiltered patch fallback", e);
    }
  }
  return out;
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

/**
 * Given a user-supplied patch version, return common stored variants.
 * "4.8" -> ["4.8", "4.8.0"]
 * "4.8.0" -> ["4.8.0", "4.8"]
 * "4.8.1" -> ["4.8.1"]
 */
function patchVersionVariants(v) {
  if (!v) return [];
  const out = new Set([v]);
  // "X.Y"  -> add "X.Y.0"
  if (/^\d+\.\d+$/.test(v)) out.add(v + ".0");
  // "X.Y.0" -> also accept "X.Y"
  const m = /^(\d+\.\d+)\.0$/.exec(v);
  if (m) out.add(m[1]);
  return [...out];
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
    "If a FOCUS DOCUMENTS entry is marked '⚠️ No transcript indexed', tell the user the transcript isn't available and then ANSWER USING THE OTHER CONTEXT (such as patch notes for the same release). Do not refuse the whole question.",
    "If neither FOCUS DOCUMENTS nor CONTEXT contains enough information to answer, say so plainly and do not invent details.",
    "When you mention a ship or vehicle, always use the official canonical name from the corrections map below (preserving the manufacturer prefix).",
    "When citing video content, include a clickable timestamp link of the form https://www.youtube.com/watch?v=VIDEO_ID&t=SECONDSs.",
    "When citing patch notes, mention the patch version (e.g. 'Alpha 4.5 PTU') so the reader knows which release the change applies to.",
    "If asked about 'the latest' or 'most recent' content, prefer entries from the FOCUS DOCUMENTS block below; those have already been selected by date.",
  ].join(" ");

  const focusBlock = focusDocs && focusDocs.length
    ? `FOCUS DOCUMENTS (the user is most likely asking about these):\n${focusDocs.map((d) => `- ${d.label}`).join("\n")}`
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
