// functions/api/admin/diag.js
//
// Admin-only diagnostic endpoint. Given a query string, runs the retrieval
// pipeline and returns what it found WITHOUT calling any LLM. Useful for
// inspecting why a particular chat response went sideways.
//
// GET  /api/admin/diag?q=...    -> JSON summary
// POST /api/admin/diag          -> { q: "..." } same thing

import { requireAdmin } from "../../lib/admin.js";
import { json, error } from "../../lib/http.js";
import { classifyIntent } from "../../lib/catalog.js";
import { retrieveSmart, renderContext, embed } from "../../lib/rag.js";

export async function onRequestGet({ request, env }) {
  const { response } = await requireAdmin(request, env);
  if (response) return response;

  const url = new URL(request.url);
  const videoId = url.searchParams.get("video_id");
  if (videoId) return probeVideo(env, videoId);
  const q = (url.searchParams.get("q") || "").trim();
  if (!q) return error(400, "missing_q");
  return runDiag(env, q);
}

export async function onRequestPost({ request, env }) {
  const { response } = await requireAdmin(request, env);
  if (response) return response;
  let body;
  try { body = await request.json(); } catch { return error(400, "invalid_json"); }
  if (body && body.video_id) return probeVideo(env, String(body.video_id));
  const q = String(body && body.q || "").trim();
  if (!q) return error(400, "missing_q");
  return runDiag(env, q);
}

/**
 * Probe Vectorize for chunks of a specific video. Returns counts via both
 * the metadata-filtered query (definitive if the metadata index exists)
 * AND an unfiltered wide scan (works without the index).
 */
async function probeVideo(env, videoId) {
  const out = {
    video_id: videoId,
    metadata_filter: { ok: false, count: 0, error: null, sample: [] },
    unfiltered_scan: { topK: 1000, count: 0, sample: [] },
    d1_catalog_row: null,
  };

  // Catalog row
  try {
    const row = await env.DB.prepare(
      `SELECT * FROM catalog_videos WHERE video_id = ?`
    ).bind(videoId).first();
    out.d1_catalog_row = row || null;
  } catch (e) {
    out.d1_catalog_row = { error: String(e.message || e) };
  }

  // We need a vector to query with; embed the video_id itself (content is irrelevant
  // for a metadata-filtered query — only the filter and topK matter).
  let vector;
  try {
    vector = await embed(env, videoId);
  } catch (e) {
    return json({ ...out, error: "embed_failed: " + String(e.message || e) });
  }

  // 1) Filtered query, multi-probe — same path the chat uses for a video.
  //    Probes: the title, the description, a generic "topics" probe.
  const filterProbeTexts = [];
  if (out.d1_catalog_row && out.d1_catalog_row.title) {
    filterProbeTexts.push(out.d1_catalog_row.title);
    filterProbeTexts.push(`${out.d1_catalog_row.title} ships vehicles features mechanics summary`);
  }
  if (out.d1_catalog_row && out.d1_catalog_row.description) {
    filterProbeTexts.push(String(out.d1_catalog_row.description).slice(0, 600));
  }
  const filterProbes = [vector];
  for (const t of filterProbeTexts) {
    try { filterProbes.push(await embed(env, t)); } catch { /* noop */ }
  }
  const seenFilter = new Set();
  const filterHits = [];
  for (const probe of filterProbes) {
    try {
      const res = await env.VECTORIZE.query(probe, {
        topK: 50,
        returnMetadata: "all",
        filter: { video_id: videoId },
      });
      const hits = (res && res.matches) || [];
      out.metadata_filter.ok = true;
      for (const m of hits) {
        if (seenFilter.has(m.id)) continue;
        seenFilter.add(m.id);
        filterHits.push(m);
      }
    } catch (e) {
      out.metadata_filter.error = String(e.message || e).slice(0, 300);
    }
  }
  filterHits.sort((a, b) => {
    const av = (a.metadata && a.metadata.timestamp_seconds) || 0;
    const bv = (b.metadata && b.metadata.timestamp_seconds) || 0;
    return av - bv;
  });
  out.metadata_filter.probes = filterProbes.length;
  out.metadata_filter.count = filterHits.length;
  out.metadata_filter.sample = filterHits.slice(0, 8).map((m) => ({
    id: m.id,
    score: m.score,
    timestamp_seconds: m.metadata && m.metadata.timestamp_seconds,
    text_preview: m.metadata && m.metadata.text ? String(m.metadata.text).slice(0, 160) : null,
  }));

  // 2) Unfiltered wide scan with multiple probes, client-side filter.
  out.unfiltered_scan.topK = 50;
  const probes = [vector];
  if (out.d1_catalog_row && out.d1_catalog_row.title) {
    try { probes.push(await embed(env, out.d1_catalog_row.title)); } catch { /* noop */ }
  }
  try { probes.push(await embed(env, videoId + " transcript")); } catch { /* noop */ }
  const seen = new Set();
  const ours = [];
  for (const probe of probes) {
    try {
      const res = await env.VECTORIZE.query(probe, {
        topK: 50,
        returnMetadata: "all",
      });
      for (const m of (res.matches || [])) {
        if (seen.has(m.id)) continue;
        seen.add(m.id);
        if (m.metadata && m.metadata.video_id === videoId) ours.push(m);
      }
    } catch (e) {
      out.unfiltered_scan.error = String(e.message || e).slice(0, 300);
    }
  }
  out.unfiltered_scan.probes = probes.length;
  out.unfiltered_scan.count = ours.length;
  out.unfiltered_scan.sample = ours.slice(0, 5).map((m) => ({
    id: m.id,
    score: m.score,
    timestamp_seconds: m.metadata && m.metadata.timestamp_seconds,
    text_preview: m.metadata && m.metadata.text ? String(m.metadata.text).slice(0, 160) : null,
  }));

  return json(out);
}

async function runDiag(env, q) {
  const intent = classifyIntent(q);
  let smart = null;
  let err = null;
  try {
    smart = await retrieveSmart(env, q);
  } catch (e) {
    err = String(e && e.message || e).slice(0, 500);
  }

  let citations = [];
  if (smart) {
    citations = renderContext(smart.matches).citations;
  }

  // Compact view: each match becomes {score, source_type, title, video_id, ts, patch}.
  const matches = (smart && smart.matches ? smart.matches : []).map((m, i) => {
    const md = m.metadata || {};
    return {
      rank: i + 1,
      score: m.score,
      id: m.id,
      // Indicates where this hit originated: "lexical" if it came (at least
      // partly) from the FTS5 index; otherwise assume vector/semantic.
      provenance: md.lexical ? "lexical" : "semantic",
      source_type: md.source_type,
      title: md.title,
      video_id: md.video_id || null,
      timestamp_seconds: md.timestamp_seconds || null,
      patch_version: md.patch_version || null,
      channel: md.channel || null,
      text_preview: md.text ? String(md.text).slice(0, 200) : null,
    };
  });

  return json({
    query: q,
    intent,
    focus_docs: smart ? smart.focusDocs : [],
    match_count: matches.length,
    matches: matches.slice(0, 30),
    citations: citations.slice(0, 30),
    error: err,
  });
}
