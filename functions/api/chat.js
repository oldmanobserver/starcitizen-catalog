// functions/api/chat.js
// POST /api/chat -> SSE stream of assistant tokens.
//
// Request body:
//   { conversation_id: string, provider: string, model: string, message: string }
//
// Response (SSE):
//   event: meta      data: { conversation_id, message_id, citations:[...] }
//   event: delta     data: { text }
//   event: done      data: { tokens_in?, tokens_out? }
//   event: error     data: { message }

import { requireSession } from "../lib/session.js";
import { error, checkOrigin, rateLimit } from "../lib/http.js";
import {
  getConversation,
  createConversation,
  updateConversation,
  insertMessage,
  listMessages,
  audit,
} from "../lib/db.js";
import { decryptApiKey } from "../lib/crypto.js";
import { randomToken } from "../lib/crypto.js";
import { streamChat } from "../lib/providers/index.js";
import { retrieveSmart, renderContext, buildSystemPrompt } from "../lib/rag.js";

const SUPPORTED = ["openai", "anthropic", "google", "xai", "openrouter"];

let SHIP_CORRECTIONS_CACHE = null;
async function loadShipCorrections(env) {
  if (SHIP_CORRECTIONS_CACHE) return SHIP_CORRECTIONS_CACHE;
  try {
    // Pages bundles project files into the worker bundle via fetch on ASSETS isn't available here;
    // instead, the ingest pipeline writes a tiny KV-backed copy. Fall back to empty.
    const raw = await env.API_KEYS.get("system:ship_corrections");
    if (raw) {
      SHIP_CORRECTIONS_CACHE = JSON.parse(raw);
      return SHIP_CORRECTIONS_CACHE;
    }
  } catch {
    /* noop */
  }
  SHIP_CORRECTIONS_CACHE = {};
  return SHIP_CORRECTIONS_CACHE;
}

export async function onRequestPost({ request, env }) {
  const guard = checkOrigin(request, env);
  if (guard) return guard;
  const { session, response } = await requireSession(request, env);
  if (response) return response;

  const limited = await rateLimit(env, session.user_id, "chat");
  if (limited) return limited;

  let body;
  try {
    body = await request.json();
  } catch {
    return error(400, "invalid_json");
  }

  const provider = String(body.provider || "").toLowerCase();
  const model = String(body.model || "");
  const userText = String(body.message || "").trim();
  let conversationId = body.conversation_id ? String(body.conversation_id) : null;

  if (!SUPPORTED.includes(provider)) return error(400, "unsupported_provider");
  if (!model) return error(400, "missing_model");
  if (!userText) return error(400, "empty_message");
  if (userText.length > 16000) return error(413, "message_too_long");

  // Resolve / create the conversation.
  let conv = null;
  if (conversationId) {
    conv = await getConversation(env, session.user_id, conversationId);
    if (!conv) return error(404, "conversation_not_found");
  } else {
    conversationId = "c_" + randomToken(12);
    conv = await createConversation(
      env,
      session.user_id,
      conversationId,
      userText.slice(0, 60)
    );
  }

  // Decrypt the user's API key for this provider.
  const blob = await env.API_KEYS.get(`key:${session.user_id}:${provider}`);
  if (!blob) return error(412, "missing_api_key", { provider });
  let apiKey;
  try {
    apiKey = await decryptApiKey(env.MASTER_KEY, session.user_id, provider, blob);
  } catch (e) {
    console.error("decryptApiKey", e);
    return error(500, "key_decrypt_failed");
  }

  // Persist the user message.
  const userMsgId = "m_" + randomToken(12);
  await insertMessage(env, {
    id: userMsgId,
    conversation_id: conversationId,
    role: "user",
    content: userText,
    created_at: Math.floor(Date.now() / 1000),
  });

  // Build chat history (last ~20 messages).
  const prior = await listMessages(env, conversationId);
  const history = prior
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-20)
    .map((m) => ({ role: m.role, content: m.content }));

  // Retrieve context for this query using hybrid (catalog + semantic) retrieval.
  let citations = [];
  let contextText = "";
  let focusDocs = [];
  try {
    const { matches, focusDocs: fd } = await retrieveSmart(env, userText);
    const rendered = renderContext(matches);
    citations = rendered.citations;
    contextText = rendered.contextText;
    focusDocs = fd || [];
  } catch (e) {
    console.error("rag retrieve", e);
  }

  const shipCorrections = await loadShipCorrections(env);
  const system = buildSystemPrompt({ shipCorrections, contextText, focusDocs });

  const assistantMsgId = "m_" + randomToken(12);

  // Open SSE stream back to the client.
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const enc = new TextEncoder();
  const send = (event, data) =>
    writer.write(enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));

  (async () => {
    try {
      await send("meta", {
        conversation_id: conversationId,
        message_id: assistantMsgId,
        citations,
      });

      let accumulated = "";
      let usage = null;
      const gen = await streamChat({
        provider,
        apiKey,
        model,
        messages: history,
        system,
        env,
      });
      for await (const evt of gen) {
        if (evt.type === "delta") {
          accumulated += evt.text;
          await send("delta", { text: evt.text });
        } else if (evt.type === "done") {
          usage = evt.usage || null;
        }
      }

      await insertMessage(env, {
        id: assistantMsgId,
        conversation_id: conversationId,
        role: "assistant",
        content: accumulated,
        citations,
        provider,
        model,
        tokens_in: usage && (usage.prompt_tokens || usage.input_tokens),
        tokens_out: usage && (usage.completion_tokens || usage.output_tokens),
        created_at: Math.floor(Date.now() / 1000),
      });
      await updateConversation(env, session.user_id, conversationId, {
        provider,
        model,
        // refresh title from first user message if it's still the default
        ...(conv.title === "New conversation" ? { title: userText.slice(0, 60) } : {}),
      });
      await audit(env, session.user_id, "chat", { provider, model, status: 200 });

      await send("done", {
        tokens_in: usage && (usage.prompt_tokens || usage.input_tokens),
        tokens_out: usage && (usage.completion_tokens || usage.output_tokens),
      });
    } catch (e) {
      console.error("chat stream", e);
      await send("error", { message: scrubError(e) });
      await audit(env, session.user_id, "chat", {
        provider,
        model,
        status: "error",
        error: scrubError(e),
      });
    } finally {
      try { await writer.close(); } catch { /* noop */ }
    }
  })();

  return new Response(readable, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

function scrubError(e) {
  let msg = (e && e.message) || String(e);
  // Belt-and-suspenders: never let a key leak into an error body.
  msg = msg.replace(/sk-[a-zA-Z0-9_-]{10,}/g, "sk-[redacted]");
  msg = msg.replace(/Bearer\s+[a-zA-Z0-9._-]+/gi, "Bearer [redacted]");
  return msg.slice(0, 500);
}
