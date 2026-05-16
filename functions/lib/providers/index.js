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
    { id: "gpt-5.5", label: "GPT-5.5" },
    { id: "gpt-5.4", label: "GPT-5.4" },
    { id: "gpt-5.4-mini", label: "GPT-5.4 mini" },
    { id: "gpt-5.4-nano", label: "GPT-5.4 nano" },
  ],
  anthropic: [
    { id: "claude-opus-4-7", label: "Claude Opus 4.7" },
    { id: "claude-sonnet-4-6", label: "Claude Sonnet 4.6" },
    { id: "claude-haiku-4-5", label: "Claude Haiku 4.5" },
  ],
  google: [
    { id: "gemini-3.1-pro-preview", label: "Gemini 3.1 Pro (Preview)" },
    { id: "gemini-3-flash-preview", label: "Gemini 3 Flash (Preview)" },
    { id: "gemini-3.1-flash-lite", label: "Gemini 3.1 Flash-Lite" },
    { id: "gemini-2.5-pro", label: "Gemini 2.5 Pro" },
    { id: "gemini-2.5-flash", label: "Gemini 2.5 Flash" },
  ],
  xai: [
    { id: "grok-4.3", label: "Grok 4.3" },
  ],
  openrouter: [
    { id: "anthropic/claude-opus-4.7", label: "Claude Opus 4.7 (via OpenRouter)" },
    { id: "anthropic/claude-sonnet-4.6", label: "Claude Sonnet 4.6 (via OpenRouter)" },
    { id: "openai/gpt-5.5", label: "GPT-5.5 (via OpenRouter)" },
    { id: "openai/gpt-5.4-mini", label: "GPT-5.4 mini (via OpenRouter)" },
    { id: "google/gemini-3.1-pro-preview", label: "Gemini 3.1 Pro (via OpenRouter)" },
    { id: "x-ai/grok-4.3", label: "Grok 4.3 (via OpenRouter)" },
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
