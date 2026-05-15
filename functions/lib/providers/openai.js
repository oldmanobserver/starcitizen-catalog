// functions/lib/providers/openai.js
// OpenAI Chat Completions (streaming).

import { parseSSE } from "./_sse.js";

export async function* streamChat({ apiKey, model, messages, system, signal }) {
  const body = {
    model,
    stream: true,
    messages: buildMessages(messages, system),
  };
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI ${res.status}: ${text.slice(0, 500)}`);
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
    if (choice.finish_reason) {
      // wait for stream end; loop will close
    }
  }
  yield { type: "done", usage };
}

function buildMessages(messages, system) {
  const out = [];
  if (system) out.push({ role: "system", content: system });
  for (const m of messages) {
    if (!m || !m.role) continue;
    out.push({ role: m.role, content: m.content });
  }
  return out;
}
