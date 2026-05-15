// functions/lib/providers/google.js
// Google Gemini streaming via REST (streamGenerateContent with alt=sse).

import { parseSSE } from "./_sse.js";

export async function* streamChat({ apiKey, model, messages, system, signal }) {
  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/` +
    `${encodeURIComponent(model)}:streamGenerateContent?alt=sse&key=${encodeURIComponent(apiKey)}`;

  const contents = [];
  for (const m of messages) {
    if (m.role === "system") continue;
    contents.push({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    });
  }

  const body = {
    contents,
    systemInstruction: system ? { parts: [{ text: system }] } : undefined,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Google ${res.status}: ${text.slice(0, 500)}`);
  }
  let usage = null;
  for await (const evt of parseSSE(res)) {
    const cand = evt.candidates && evt.candidates[0];
    if (!cand) continue;
    const parts = cand.content && cand.content.parts;
    if (Array.isArray(parts)) {
      for (const p of parts) {
        if (typeof p.text === "string" && p.text.length) {
          yield { type: "delta", text: p.text };
        }
      }
    }
    if (evt.usageMetadata) usage = evt.usageMetadata;
  }
  yield { type: "done", usage };
}
