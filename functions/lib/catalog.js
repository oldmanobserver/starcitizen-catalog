// functions/lib/catalog.js
//
// Pure helpers shared between the ingest pipeline (Node) and the Worker
// runtime (rag.js / chat.js). NO Workers or Node-specific imports.

/** Detect a known recurring video series from its title. */
export function detectSeries(title) {
  if (!title) return null;
  const t = title.toLowerCase();

  // Order matters: more specific patterns first.
  if (/\bstar citizen live\b/.test(t)) return "Star Citizen Live";
  if (/\binside star citizen\b/.test(t)) return "Inside Star Citizen";
  if (/\bcalling all devs\b/.test(t)) return "Calling All Devs";
  if (/\bloremaker'?s? guide(?: to the galaxy)?\b/.test(t)) return "Loremaker's Guide";
  if (/\baround the verse\b/.test(t)) return "Around the Verse";
  if (/\bcitizencon\b/.test(t)) return "CitizenCon";
  if (/\bbugsmashers!?\b/.test(t)) return "Bugsmashers";
  if (/\breverse the verse\b/.test(t)) return "Reverse the Verse";
  if (/\bsubscriber'?s? town hall\b/.test(t)) return "Subscribers Town Hall";
  if (/\bmonthly (?:studio )?report\b/.test(t)) return "Monthly Studio Report";
  if (/\bletter from the chairman\b/.test(t)) return "Letter from the Chairman";
  if (/\bship shape\b/.test(t)) return "Ship Shape";
  if (/\bstar citizen \| .*trailer\b/i.test(title)) return "Trailer";
  if (/\bsquadron 42\b/.test(t)) return "Squadron 42";
  if (/\bjump point\b/.test(t)) return "Jump Point";
  return null;
}

/** Extract a patch version from a release-notes filename. */
export function extractPatchVersion(filename) {
  if (!filename) return null;
  const m = filename.toLowerCase().match(/alpha[-_ ]?(\d+(?:[-_.]\d+){1,3})/);
  if (!m) return null;
  return m[1].replace(/[-_]/g, ".");
}

/** Compose the user-facing label for a video citation. */
export function videoUrlWithTimestamp(videoId, seconds) {
  const base = `https://www.youtube.com/watch?v=${videoId}`;
  if (!seconds || seconds <= 0) return base;
  return `${base}&t=${Math.floor(seconds)}s`;
}

const QUERY_PATTERNS = {
  // "latest" / "most recent" / "newest"
  latest: /\b(latest|most[- ]recent|newest|recent(?:ly)?|last(?: week| month)?|this (?:week|month))\b/i,
  // "this week" / "this month" / "last week" / "today" / "yesterday" — a stronger
  // signal that the user wants a date-bounded list, even without "videos".
  recentWindow: /\b(this (?:week|month)|last (?:week|month)|today|yesterday|new(?:ly)? (?:released|posted|uploaded)|just (?:released|posted|uploaded)|past (?:few )?(?:days|week))\b/i,
  // mention of "video(s)" — distinguishes "what's new this week (in videos)"
  // from "what's new in 4.8" (which should hit patch-notes paths instead).
  videoWord: /\b(videos?|episodes?|streams?|broadcasts?|uploads?)\b/i,
  // explicit episode # or date
  episode: /\b(episode|ep\.?)\s*#?(\d{1,3})\b/i,
  // "in patch 4.5" / "alpha 4.5.1" / "PTU 4.0"
  patchVersion: /\b(?:alpha[- ]?)?(\d+\.\d+(?:\.\d+)?)\b/i,
  channel: /\b(LIVE|PTU)\b/i,
  // A quoted title in the query: "Inside Star Citizen | Alpha 4.8 Patch Report"
  // Accepts straight and smart quotes.
  quotedTitle: /["“”]([^"“”]{8,200})["“”]/,
  // "in the video X" / "from the video X" / "in the X video"
  videoMention: /\b(?:in|from|about)\s+(?:the\s+)?(?:video|episode|show|stream)\s+([^?!.\n]{4,200})/i,
};

const SERIES_LOOKUP = [
  ["Star Citizen Live", /\bstar citizen live\b/i],
  ["Inside Star Citizen", /\binside star citizen\b|\bISC\b/i],
  ["Calling All Devs", /\bcalling all devs\b|\bCAD\b/i],
  ["Loremaker's Guide", /\bloremaker'?s? guide\b/i],
  ["Around the Verse", /\baround the verse\b|\bATV\b/i],
  ["CitizenCon", /\bcitizencon\b/i],
  ["Bugsmashers", /\bbugsmashers\b/i],
  ["Reverse the Verse", /\breverse the verse\b/i],
  ["Subscribers Town Hall", /\b(subscribers? town hall|STH)\b/i],
  ["Monthly Studio Report", /\bmonthly (?:studio )?report\b/i],
  ["Squadron 42", /\bsquadron 42\b|\bSQ42\b/i],
];

/**
 * Classify the user's natural-language query into a structured intent.
 * Returns null if nothing structured matches; the caller should fall back to
 * pure semantic search.
 */
export function classifyIntent(query) {
  if (!query) return null;
  const q = String(query);

  const wantsLatest = QUERY_PATTERNS.latest.test(q);

  let series = null;
  for (const [name, re] of SERIES_LOOKUP) {
    if (re.test(q)) { series = name; break; }
  }

  const patchMatch = q.match(QUERY_PATTERNS.patchVersion);
  const channelMatch = q.match(QUERY_PATTERNS.channel);
  const quotedMatch = q.match(QUERY_PATTERNS.quotedTitle);
  const mentionMatch = q.match(QUERY_PATTERNS.videoMention);

  // A quoted phrase is the strongest signal — almost certainly the title.
  if (quotedMatch) {
    return {
      kind: "title_match",
      title: quotedMatch[1].trim(),
      series,
      patch_version: patchMatch ? patchMatch[1] : null,
    };
  }
  // "in the video X" — extract everything after the cue word and try to match it.
  if (mentionMatch) {
    return {
      kind: "title_match",
      title: mentionMatch[1].trim().replace(/^"|"$/g, ""),
      series,
      patch_version: patchMatch ? patchMatch[1] : null,
    };
  }
  if (wantsLatest && series) {
    return { kind: "latest_series", series };
  }
  // Series + patch version with no quotes: "Inside Star Citizen Alpha 4.8 Patch Report"
  // -> search that series for a title that mentions the version.
  if (series && patchMatch) {
    return { kind: "series_patch", series, patch_version: patchMatch[1] };
  }
  if (series && !wantsLatest) {
    return { kind: "series_any", series };
  }
  if (patchMatch) {
    return {
      kind: "patch",
      version: patchMatch[1],
      channel: channelMatch ? channelMatch[1].toUpperCase() : null,
    };
  }
  if (wantsLatest && channelMatch) {
    return {
      kind: "latest_patch",
      channel: channelMatch[1].toUpperCase(),
    };
  }

  // "What's new this week?", "any new videos?", "what videos came out recently?"
  // No series, no patch version — the user wants a date-bounded list of recent
  // videos. Pick a window based on which time word they used.
  const recentWindow = QUERY_PATTERNS.recentWindow.test(q);
  const mentionsVideos = QUERY_PATTERNS.videoWord.test(q);
  // Bare "new videos" / "any new videos" — treat as latest week.
  const newVideosMention = /\b(new|any new|whats new|what's new)\b.*\b(videos?|episodes?|streams?|uploads?)\b/i.test(q)
    || /\b(videos?|episodes?|streams?|uploads?)\b.*\bnew\b/i.test(q);
  if (recentWindow || (wantsLatest && mentionsVideos) || newVideosMention) {
    let windowDays = 7;
    if (/\b(this|last|past)\s+month\b/i.test(q)) windowDays = 31;
    else if (/\btoday\b/i.test(q)) windowDays = 2;
    else if (/\byesterday\b/i.test(q)) windowDays = 3;
    else if (/\bpast few days\b/i.test(q)) windowDays = 5;
    return { kind: "recent_videos", window_days: windowDays };
  }

  return null;
}
