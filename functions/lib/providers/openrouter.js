// functions/lib/providers/openrouter.js
// OpenRouter (OpenAI-compatible).

import { parseSSE } from "./_sse.js";

export async function* streamChat({ apiKey, model, messages, system, signal, env }) {
  const out = [];
  if (system) out.push({ role: "system", content: system });
  for (const m of messages) {
    if (!m.role) continue;
    out.push({ role: m.role, content: m.content });
  }
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  if (env && env.APP_URL) headers["HTTP-Referer"] = env.APP_URL;
  if (env && env.APP_NAME) headers["X-Title"] = env.APP_NAME;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers,
    body: JSON.stringify({ model, stream: true, messages: out }),
    signal,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenRouter ${res.status}: ${text.slice(0, 500)}`);
  }
  let usage = null;
  for await (const evt of parseSSE(res)) {
    const choice = evt.choices && evt.choices[0];
    if (!choice) {
      if (evt.usage) usage = evt.usage;
      continue;
    }
    const delta = choice.delta || {};
    if (typeof delta.content === "string" && delta.content.length) {
      yield { type: "delta", text: delta.content };
    }
  }
  yield { type: "done", usage };
}
