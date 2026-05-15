// functions/lib/providers/xai.js
// xAI Grok (OpenAI-compatible Chat Completions endpoint).

import { parseSSE } from "./_sse.js";

export async function* streamChat({ apiKey, model, messages, system, signal }) {
  const out = [];
  if (system) out.push({ role: "system", content: system });
  for (const m of messages) {
    if (!m.role) continue;
    out.push({ role: m.role, content: m.content });
  }
  const res = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, stream: true, messages: out }),
    signal,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`xAI ${res.status}: ${text.slice(0, 500)}`);
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
