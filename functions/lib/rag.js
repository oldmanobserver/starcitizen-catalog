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
  let intent = classifyIntent(query);
  const focusDocs = [];
  let matches = [];

  // Lexical ship-mention detection. Runs when the regex-based classifier
  // didn't already find a strong structured intent (or when it only found a
  // generic "series_any"), and the query contains a known ship name/alias.
  // Falls back gracefully if the alias map / D1 table isn't populated yet.
  if (!intent || intent.kind === "series_any") {
    try {
      const hits = await detectShipMentionsInQuery(env, query);
      if (hits.length) {
        intent = { kind: "ship_mention", ships: hits, series: intent ? intent.series : null };
      }
    } catch (e) {
      console.error("ship-mention intent detect failed", e);
    }
  }

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

// ---------------------------------------------------------------------------
// Ship-name detection
// ---------------------------------------------------------------------------

// Module-cached alias list. Loaded lazily from KV; falls back to a D1 query
// if KV isn't populated. Either way, we cache it for the lifetime of the
// worker isolate so this is a one-time cost per cold start.
let SHIP_ALIASES_CACHE = null;        // Array<[alias_lower, canonical]> sorted longest-first
let SHIP_ALIASES_CACHE_AT = 0;
const SHIP_ALIASES_TTL_MS = 10 * 60 * 1000;

async function loadShipAliases(env) {
  const now = Date.now();
  if (SHIP_ALIASES_CACHE && (now - SHIP_ALIASES_CACHE_AT) < SHIP_ALIASES_TTL_MS) {
    return SHIP_ALIASES_CACHE;
  }
  let aliases = null;
  try {
    if (env.API_KEYS) {
      const raw = await env.API_KEYS.get("system:ship_aliases");
      if (raw) aliases = JSON.parse(raw);
    }
  } catch (e) {
    console.error("ship_aliases KV load", e);
  }
  if (!aliases && env.DB) {
    try {
      const res = await env.DB.prepare(
        `SELECT alias_lower, canonical FROM catalog_ship_aliases ORDER BY alias_len DESC`
      ).all();
      aliases = (res.results || []).map((r) => [r.alias_lower, r.canonical]);
    } catch (e) {
      // Table may not exist yet (migration not applied).
      console.error("ship_aliases D1 load", e);
    }
  }
  if (!aliases) aliases = [];
  // Make sure longest-first ordering is enforced even when loaded from KV.
  aliases.sort((a, b) => b[0].length - a[0].length);
  SHIP_ALIASES_CACHE = aliases;
  SHIP_ALIASES_CACHE_AT = now;
  return aliases;
}

/**
 * Scan the user's query for any known ship alias. Returns an array of
 * canonical names (deduped, in match order). Longer aliases win over shorter
 * overlapping ones (e.g. "Origin M80" beats "M80").
 */
async function detectShipMentionsInQuery(env, query) {
  if (!query) return [];
  const aliases = await loadShipAliases(env);
  if (!aliases.length) return [];
  // Work on a lowercased copy with a parallel "consumed" mask so overlapping
  // shorter aliases don't re-match the same span.
  const lower = String(query).toLowerCase();
  const consumed = new Uint8Array(lower.length);
  const found = [];
  const seen = new Set();
  for (const [alias, canonical] of aliases) {
    if (alias.length < 2) continue;
    let from = 0;
    while (from <= lower.length - alias.length) {
      const idx = lower.indexOf(alias, from);
      if (idx === -1) break;
      from = idx + 1;
      // Word boundary check on both sides.
      const before = idx === 0 ? "" : lower[idx - 1];
      const after = idx + alias.length >= lower.length ? "" : lower[idx + alias.length];
      if (before && /[a-z0-9]/.test(before)) continue;
      if (after && /[a-z0-9]/.test(after)) continue;
      // Skip if any character of the span is already consumed.
      let blocked = false;
      for (let i = idx; i < idx + alias.length; i++) {
        if (consumed[i]) { blocked = true; break; }
      }
      if (blocked) continue;
      for (let i = idx; i < idx + alias.length; i++) consumed[i] = 1;
      if (!seen.has(canonical)) {
        seen.add(canonical);
        found.push(canonical);
      }
    }
  }
  return found;
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

  if (intent.kind === "ship_mention") {
    return retrieveShipMention(env, query, intent);
  }

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

  if (intent.kind === "earliest_videos") {
    // Temporal-ASC lookup. Pulls the oldest transcripts on record (optionally
    // restricted to a series) so the model has real early-era content instead
    // of whatever semantic search happens to surface. Vehicle-themed queries
    // ("first vehicle ever mentioned") get a wider net and a ship-y probe.
    const wantsVehicle = !!intent.vehicle_bias;
    const limit = wantsVehicle ? 12 : 6;
    let rows;
    if (intent.series) {
      rows = await env.DB.prepare(
        `SELECT video_id, title, upload_date, url, series, has_transcript
         FROM catalog_videos
         WHERE series = ? AND has_transcript = 1
         ORDER BY upload_date ASC, video_id ASC
         LIMIT ?`
      ).bind(intent.series, limit).all();
    } else {
      rows = await env.DB.prepare(
        `SELECT video_id, title, upload_date, url, series, has_transcript
         FROM catalog_videos
         WHERE has_transcript = 1
         ORDER BY upload_date ASC, video_id ASC
         LIMIT ?`
      ).bind(limit).all();
    }
    const videos = rows.results || [];
    if (!videos.length) return { matches: [], focusDocs: [] };
    const focusDocs = videos.map((v) => ({
      kind: "video",
      video_id: v.video_id,
      title: v.title,
      series: v.series,
      upload_date: v.upload_date,
      url: v.url,
      label: `${v.series || "Video"} — ${v.title} (${fmtDate(v.upload_date)}) — ${v.url}`,
    }));
    // Use a vehicle-flavored probe when the question is about ships/vehicles
    // so chunk ranking inside each video prefers ship-mentioning passages.
    const probeQuery = wantsVehicle
      ? `${query} ship vehicle fighter spacecraft manufacturer concept model`
      : query;
    const matches = await fetchAllChunksForVideos(env, probeQuery, videos.map((v) => v.video_id));
    return { matches, focusDocs };
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

  if (intent.kind === "recent_videos") {
    // Anchor the window on the newest upload_date we have in the catalog,
    // NOT on `new Date()` — the server clock and the data set don't always
    // agree (and Pages workers don't have access to "today" semantics that
    // line up with the YYYYMMDD format anyway). This way "this week" always
    // means "the most recent N days of content we actually have".
    const newest = await env.DB.prepare(
      `SELECT MAX(upload_date) AS max_date FROM catalog_videos`
    ).all();
    const maxDate = (newest.results && newest.results[0] && newest.results[0].max_date) || null;
    if (!maxDate) return { matches: [], focusDocs: [] };
    const cutoff = subtractDaysYYYYMMDD(maxDate, intent.window_days || 7);
    const rows = await env.DB.prepare(
      `SELECT video_id, title, series, upload_date, url, has_transcript
       FROM catalog_videos
       WHERE upload_date >= ?
       ORDER BY upload_date DESC, video_id ASC
       LIMIT 25`
    ).bind(cutoff).all();
    const videos = rows.results || [];
    if (!videos.length) return { matches: [], focusDocs: [] };

    const focusDocs = videos.map((v) => ({
      kind: "video",
      video_id: v.video_id,
      title: v.title,
      series: v.series,
      upload_date: v.upload_date,
      url: v.url,
      label: v.has_transcript
        ? `${v.series || "Video"} — ${v.title} (${fmtDate(v.upload_date)}) — ${v.url}`
        : `\u26a0\ufe0f No transcript indexed for: ${v.title} (${fmtDate(v.upload_date)}) — ${v.url}`,
    }));

    // Fetch transcript chunks for the videos that have them, so the model has
    // actual content to summarize. Cap at 6 videos worth of chunks to keep the
    // context budget under control.
    const withTranscripts = videos.filter((v) => v.has_transcript).slice(0, 6).map((v) => v.video_id);
    let matches = [];
    if (withTranscripts.length) {
      matches = await fetchAllChunksForVideos(env, query, withTranscripts);
    }
    return { matches, focusDocs };
  }

  return { matches: [], focusDocs: [] };
}

/**
 * Subtract N days from a YYYYMMDD string and return YYYYMMDD.
 * Returns a string strictly comparable with other YYYYMMDD values.
 */
function subtractDaysYYYYMMDD(yyyymmdd, days) {
  const s = String(yyyymmdd);
  if (s.length !== 8) return s;
  const y = parseInt(s.slice(0, 4), 10);
  const m = parseInt(s.slice(4, 6), 10);
  const d = parseInt(s.slice(6, 8), 10);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() - Math.max(0, Number(days) || 0));
  const yy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(dt.getUTCDate()).padStart(2, "0");
  return `${yy}${mm}${dd}`;
}

/**
 * Handle a ship-mention intent: look up every video that names the ship(s)
 * in question via the catalog_ship_mentions lexical index, surface up to
 * `MAX_SHIP_VIDEOS` of them as focus docs (most recent first, biased toward
 * higher mention counts), and pull transcript chunks for the top few so the
 * model has actual quoted context to summarize.
 */
const MAX_SHIP_VIDEOS_FOCUS = 25;     // shown to the LLM as focus docs
const MAX_SHIP_VIDEOS_CHUNKS = 6;     // how many of those we actually pull chunks for

async function retrieveShipMention(env, query, intent) {
  const ships = intent.ships || [];
  if (!ships.length) return { matches: [], focusDocs: [] };

  // Pull mention rows for every detected ship, joined to videos for ordering.
  // We rank by (date DESC, mention_count DESC) so the most recent discussion
  // surfaces first, but a high-mention older episode still appears.
  let rows;
  try {
    const placeholders = ships.map(() => "?").join(", ");
    const res = await env.DB.prepare(
      `SELECT sm.video_id        AS video_id,
              sm.ship_name       AS ship_name,
              sm.mention_count   AS mention_count,
              sm.first_timestamp AS first_timestamp,
              v.title            AS title,
              v.series           AS series,
              v.upload_date      AS upload_date,
              v.url              AS url,
              v.has_transcript   AS has_transcript
       FROM catalog_ship_mentions sm
       JOIN catalog_videos v ON v.video_id = sm.video_id
       WHERE sm.ship_name IN (${placeholders})
       ORDER BY v.upload_date DESC, sm.mention_count DESC
       LIMIT 100`
    ).bind(...ships).all();
    rows = res.results || [];
  } catch (e) {
    console.error("retrieveShipMention D1", e);
    return { matches: [], focusDocs: [] };
  }

  if (!rows.length) return { matches: [], focusDocs: [] };

  // Dedupe by video_id, keeping the row with the highest mention_count when a
  // video mentions multiple of the named ships.
  const byVideo = new Map();
  for (const r of rows) {
    const cur = byVideo.get(r.video_id);
    if (!cur || (r.mention_count || 0) > (cur.mention_count || 0)) {
      byVideo.set(r.video_id, r);
    }
  }
  const ordered = [...byVideo.values()]
    .sort((a, b) => {
      if ((b.upload_date || "") !== (a.upload_date || "")) return (b.upload_date || "").localeCompare(a.upload_date || "");
      return (b.mention_count || 0) - (a.mention_count || 0);
    });

  // Optional series narrowing — if the original intent included a series, prefer
  // those videos but don't exclude others (they might still be valuable).
  if (intent.series) {
    ordered.sort((a, b) => (b.series === intent.series ? 1 : 0) - (a.series === intent.series ? 1 : 0));
  }

  const focusVideos = ordered.slice(0, MAX_SHIP_VIDEOS_FOCUS);
  const shipsLabel = ships.join(", ");
  const focusDocs = focusVideos.map((v) => {
    const tsTag = v.first_timestamp
      ? ` — first mention @ ${fmtTs(v.first_timestamp)}`
      : "";
    const linkBase = v.url || `https://www.youtube.com/watch?v=${v.video_id}`;
    const link = v.first_timestamp
      ? `${linkBase}${linkBase.includes("?") ? "&" : "?"}t=${Math.floor(v.first_timestamp)}s`
      : linkBase;
    const seriesTag = v.series ? `${v.series} — ` : "";
    return {
      kind: "video",
      video_id: v.video_id,
      title: v.title,
      series: v.series,
      upload_date: v.upload_date,
      url: link,
      ship: v.ship_name,
      mention_count: v.mention_count,
      label: `${seriesTag}${v.title} (${fmtDate(v.upload_date)}) — mentions ${v.ship_name} ×${v.mention_count}${tsTag} — ${link}`,
    };
  });

  // Pull transcript chunks from the top few videos so the model has real text
  // to quote. We bias the embedding probe toward the ship name + a vehicle
  // vocabulary so we get the chunk where the ship is actually discussed.
  const topIds = focusVideos.filter((v) => v.has_transcript).slice(0, MAX_SHIP_VIDEOS_CHUNKS).map((v) => v.video_id);
  let matches = [];
  if (topIds.length) {
    const probe = `${query} ${shipsLabel} ship vehicle manufacturer concept reveal`;
    matches = await fetchAllChunksForVideos(env, probe, topIds);
  }

  // Add a header focus doc summarizing the lexical index hit. Useful for the
  // model so it knows the total number of videos rather than only the slice
  // we pulled chunks for.
  const summaryDoc = {
    kind: "ship_mention_summary",
    ship: shipsLabel,
    label: `\u2139\ufe0f Lexical index: ${ordered.length} video(s) mention ${shipsLabel}. Showing the ${focusVideos.length} most recent. List ALL of them in the answer.`,
  };

  return { matches, focusDocs: [summaryDoc, ...focusDocs] };
}

/**
 * Fetch all available chunks for one or more videos, ranked by relevance to the query.
 * Tries Vectorize's metadata filter first (requires a `video_id` metadata index);
 * if the filter returns nothing (index missing, or vectors pre-date the index),
 * falls back to a wide semantic query then client-side filters by video_id.
 */
async function fetchAllChunksForVideos(env, query, videoIds) {
  if (!env.VECTORIZE || !videoIds.length) return [];
  const wanted = new Set(videoIds);
  const seen = new Set();
  const all = [];

  // Build a set of probe embeddings. The user query alone often misses chunks
  // about tangential topics in the same video. Adding the title, a generic
  // "what is discussed" probe, and the description gives us better coverage
  // across the document's chunks. Each probe is its own topK=50 query.
  const probeTexts = [String(query || "").slice(0, 1000)];
  let titles = [];
  try {
    const placeholders = videoIds.map(() => "?").join(", ");
    const rows = await env.DB.prepare(
      `SELECT title, description FROM catalog_videos WHERE video_id IN (${placeholders})`
    ).bind(...videoIds).all();
    for (const r of (rows.results || [])) {
      if (r.title) titles.push(r.title);
      if (r.title) probeTexts.push(r.title);
      if (r.description) probeTexts.push(String(r.description).slice(0, 600));
    }
  } catch (e) {
    console.error("d1 probe titles", e);
  }
  // Add a generic discussion-topics probe to surface any chunk that talks about
  // things, ships, features, mechanics, etc.
  probeTexts.push(`${titles.join(", ")} ships vehicles mechanics features discussion summary`);

  const probes = [];
  for (const t of probeTexts) {
    if (!t || !t.trim()) continue;
    try { probes.push(await embed(env, t)); } catch { /* noop */ }
  }
  if (!probes.length) return [];

  let filterWorked = false;

  // Pass 1: filtered queries per video, per probe. With the metadata index in
  // place this is the fastest path to "all chunks of this video".
  for (const id of videoIds) {
    for (const probe of probes) {
      try {
        const result = await env.VECTORIZE.query(probe, {
          topK: MAX_TOPK,
          returnMetadata: "all",
          filter: { video_id: id },
        });
        const hits = (result && result.matches) || [];
        if (hits.length) filterWorked = true;
        for (const m of hits) {
          if (seen.has(m.id)) continue;
          seen.add(m.id);
          all.push(m);
        }
      } catch (e) {
        // Filter unsupported / no index → break out and use the unfiltered
        // fallback below.
        console.error(`vectorize filter video_id=${id}`, e);
        break;
      }
    }
  }

  // Pass 2 fallback: only used if filtering didn't work at all (no metadata index).
  if (!filterWorked) {
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

  // Sort by chunk order within each video so the LLM sees content in narrative
  // order, not by descending similarity (which jumbles the story).
  all.sort((a, b) => {
    const av = (a.metadata && a.metadata.timestamp_seconds) || 0;
    const bv = (b.metadata && b.metadata.timestamp_seconds) || 0;
    return av - bv;
  });

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
    // Compose a header that gives the LLM everything it needs to cite this
    // chunk without making anything up: source label + a fully-formed link.
    const header = chunkHeader(tag, md);
    lines.push(`${header}\n${md.text || ""}`);
  });
  return { contextText: lines.join("\n\n"), citations };
}

function chunkHeader(tag, md) {
  if (md.source_type === "transcript" && md.video_id) {
    const ts = Math.floor(md.timestamp_seconds || 0);
    const tsLabel = ts ? ` @ ${fmtTs(ts)}` : "";
    const link = `https://www.youtube.com/watch?v=${md.video_id}${ts ? `&t=${ts}s` : ""}`;
    return `${tag} (video) ${md.title || "video"}${tsLabel}\nLink: ${link}`;
  }
  if (md.source_type === "patch_note") {
    const v = md.patch_version || "";
    const c = md.channel || "";
    return `${tag} (patch_note) Alpha ${v} ${c}${md.title ? ` — ${md.title}` : ""}`;
  }
  if (md.source_type === "ship") {
    return `${tag} (ship) ${md.ship || md.title || ""}`;
  }
  return `${tag} (${md.source_type || "?"}) ${md.title || ""}`;
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
    "When the user asks 'what's new this week' or 'recent videos', the FOCUS DOCUMENTS block contains the authoritative list of videos in that window. ALWAYS list every focus-document video that matches the window (title, series, date, and the link from the label) before summarizing; do not say you don't have recent videos when the focus block is populated. If a focus video has no transcript chunks in CONTEXT, list it with a note that no transcript is available rather than omitting it.",
    "When the user asks 'what videos mention/discuss/talk about <ship>', the FOCUS DOCUMENTS block contains a LEXICAL INDEX of every video that names that ship (sourced from a deterministic scan of the transcripts, not semantic similarity). Treat the focus list as authoritative and comprehensive — list every focus-document video (title, series, date, link) even if the CONTEXT block doesn't include a chunk for it. Order your answer by date (most recent first). If the summary line says 'N videos mention X, showing the most recent K', tell the user the total and present the visible slice; do not pretend fewer videos exist.",
    "If neither FOCUS DOCUMENTS nor CONTEXT contains enough information to answer, say so plainly and do not invent details.",
    "When you mention a ship or vehicle, always use the official canonical name from the corrections map below (preserving the manufacturer prefix).",
    "When linking to a video, ALWAYS copy the exact 'Link:' URL shown in the relevant CONTEXT chunk. Each transcript chunk has a 'Link:' line with a ready-to-use https://www.youtube.com/watch?v=...&t=...s URL — use that verbatim. NEVER output the literal placeholders 'VIDEO_ID' or 'SECONDS' — those are not real URLs. NEVER ask the user to fill in the video ID — it is in the chunk header.",
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
