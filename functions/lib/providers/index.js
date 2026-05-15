// functions/lib/providers/index.js
// Provider dispatcher. Each provider exports streamChat({ apiKey, model, messages, system })
// returning an async generator that yields { type: 'delta', text } or { type: 'done', usage? }.

import * as openai from "./openai.js";
import * as anthropic from "./anthropic.js";
import * as google from "./google.js";
import * as xai from "./xai.js";
import * as openrouter from "./openrouter.js";

const REGISTRY = { openai, anthropic, google, xai, openrouter };

export const DEFAULT_MODELS = {
  openai: [
    { id: "gpt-4o", label: "GPT-4o" },
    { id: "gpt-4o-mini", label: "GPT-4o mini" },
    { id: "gpt-4.1", label: "GPT-4.1" },
    { id: "gpt-4.1-mini", label: "GPT-4.1 mini" },
  ],
  anthropic: [
    { id: "claude-opus-4-5", label: "Claude Opus 4.5" },
    { id: "claude-sonnet-4-5", label: "Claude Sonnet 4.5" },
    { id: "claude-3-5-haiku-latest", label: "Claude 3.5 Haiku" },
  ],
  google: [
    { id: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
    { id: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
  ],
  xai: [
    { id: "grok-2-latest", label: "Grok 2" },
    { id: "grok-beta", label: "Grok Beta" },
  ],
  openrouter: [
    { id: "anthropic/claude-3.5-sonnet", label: "Claude 3.5 Sonnet (via OpenRouter)" },
    { id: "openai/gpt-4o", label: "GPT-4o (via OpenRouter)" },
    { id: "google/gemini-pro-1.5", label: "Gemini 1.5 Pro (via OpenRouter)" },
  ],
};

export function listProviders() {
  return Object.keys(REGISTRY);
}

export async function streamChat({ provider, ...opts }) {
  const p = REGISTRY[provider];
  if (!p) throw new Error(`Unsupported provider: ${provider}`);
  return p.streamChat(opts);
}
