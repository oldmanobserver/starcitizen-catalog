// functions/lib/rag.js
// Retrieval against Cloudflare Vectorize + assembling the system prompt.

const EMBED_MODEL = "@cf/baai/bge-base-en-v1.5";

/**
 * Embed text with Workers AI. Returns Float32Array-like number[] of length 768.
 */
export async function embed(env, text) {
  if (!env.AI) throw new Error("Workers AI binding is not configured");
  const res = await env.AI.run(EMBED_MODEL, { text: [text] });
  // Worker AI shape: { shape:[1,768], data: [[...]] }
  const v = res && (res.data ? res.data[0] : res[0]);
  if (!Array.isArray(v)) throw new Error("Embedding response was malformed");
  return v;
}

/**
 * Retrieve top-k matches from Vectorize for a query string.
 */
export async function retrieve(env, query, topK = 8) {
  if (!env.VECTORIZE) return [];
  const vector = await embed(env, query);
  const result = await env.VECTORIZE.query(vector, {
    topK,
    returnMetadata: "all",
  });
  return (result && result.matches) || [];
}

/**
 * Render retrieved matches into a compact context block + citation list.
 * Returns { contextText, citations[] }.
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

function buildCitationUrl(md) {
  if (md.source_type === "transcript" && md.video_id) {
    const t = md.timestamp_seconds ? `&t=${Math.floor(md.timestamp_seconds)}s` : "";
    return `https://www.youtube.com/watch?v=${md.video_id}${t}`;
  }
  if (md.source_type === "patch_note" && md.url) return md.url;
  return md.url || null;
}

/**
 * Assemble the system prompt used for every chat turn.
 * Includes the transcript-corrections map so the model normalizes ship names.
 */
export function buildSystemPrompt({ shipCorrections, contextText }) {
  const guidance = [
    "You are the Star Citizen Catalog assistant. You answer player questions about Star Citizen ships, patch notes, and community video discussions.",
    "Ground every factual claim in the supplied CONTEXT snippets and cite them inline with their [#n] tag. If the answer is not supported by the context, say so plainly and do not invent details.",
    "When you mention a ship or vehicle, always use the official canonical name from the corrections map below (preserving manufacturer prefix when given).",
    "When relevant, link to the cited YouTube video using its timestamp.",
    "Star Citizen is in active development; patch notes for the same feature may differ across versions. Prefer the most recent patch note when citing mechanics.",
  ].join(" ");

  const correctionsBlock = shipCorrections && Object.keys(shipCorrections).length
    ? `SHIP NAME CORRECTIONS (wrong -> correct):\n${Object.entries(shipCorrections)
        .slice(0, 200)
        .map(([k, v]) => `- ${k} -> ${v}`)
        .join("\n")}`
    : "";

  const contextBlock = contextText
    ? `CONTEXT:\n${contextText}`
    : "CONTEXT: (no relevant snippets found — say so if the user asks for specifics)";

  return [guidance, correctionsBlock, contextBlock].filter(Boolean).join("\n\n");
}
