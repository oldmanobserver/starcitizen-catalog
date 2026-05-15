// functions/lib/providers/_sse.js
// Helpers for consuming Server-Sent Events from provider HTTP streams.

/**
 * Async generator that parses an SSE stream (Response.body) and yields parsed JSON events.
 * Lines that aren't `data: <json>` are skipped. The literal `data: [DONE]` ends the stream.
 */
export async function* parseSSE(response) {
  if (!response.body) return;
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buf = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n")) !== -1) {
        const line = buf.slice(0, idx).replace(/\r$/, "");
        buf = buf.slice(idx + 1);
        if (!line) continue;
        if (line.startsWith(":")) continue;
        if (line.startsWith("data:")) {
          const payload = line.slice(5).trim();
          if (payload === "[DONE]") return;
          if (!payload) continue;
          try {
            yield JSON.parse(payload);
          } catch {
            /* skip malformed */
          }
        }
      }
    }
  } finally {
    try { reader.releaseLock(); } catch { /* noop */ }
  }
}

/**
 * Parse newline-delimited JSON streams (used by Google Gemini).
 */
export async function* parseNdjson(response) {
  if (!response.body) return;
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buf = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n")) !== -1) {
        const line = buf.slice(0, idx).trim();
        buf = buf.slice(idx + 1);
        if (!line) continue;
        try {
          yield JSON.parse(line);
        } catch {
          /* skip */
        }
      }
    }
    if (buf.trim()) {
      try { yield JSON.parse(buf); } catch { /* noop */ }
    }
  } finally {
    try { reader.releaseLock(); } catch { /* noop */ }
  }
}
