// functions/api/providers.js
// GET /api/providers -> list of supported providers and known models (for the UI dropdown).

import { json } from "../lib/http.js";
import { listProviders, DEFAULT_MODELS } from "../lib/providers/index.js";

export async function onRequestGet() {
  const providers = listProviders().map((id) => ({
    id,
    label: prettyLabel(id),
    models: DEFAULT_MODELS[id] || [],
  }));
  return json({ providers });
}

function prettyLabel(id) {
  switch (id) {
    case "openai": return "OpenAI";
    case "anthropic": return "Anthropic (Claude)";
    case "google": return "Google (Gemini)";
    case "xai": return "xAI (Grok)";
    case "openrouter": return "OpenRouter";
    default: return id;
  }
}
