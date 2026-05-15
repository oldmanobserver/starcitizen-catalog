// functions/lib/providers/anthropic.js
// Anthropic Messages API (streaming).

import { parseSSE } from "./_sse.js";

export async function* streamChat({ apiKey, model, messages, system, signal }) {
  const body = {
    model,
    max_tokens: 4096,
    stream: true,
    system: system || undefined,
    messages: messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content })),
  };
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Anthropic ${res.status}: ${text.slice(0, 500)}`);
  }
  let usage = null;
  for await (const evt of parseSSE(res)) {
    if (evt.type === "content_block_delta" && evt.delta) {
      const d = evt.delta;
      if (d.type === "text_delta" && d.text) {
        yield { type: "delta", text: d.text };
      }
    } else if (evt.type === "message_delta" && evt.usage) {
      usage = evt.usage;
    } else if (evt.type === "message_stop") {
      break;
    }
  }
  yield { type: "done", usage };
}
