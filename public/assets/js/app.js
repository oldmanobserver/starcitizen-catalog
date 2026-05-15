// public/assets/js/app.js
// Chat page logic.

import { apiJson, api, renderMarkdown, renderFooter, showModal, escapeHtml } from "./common.js";

const state = {
  user: null,
  providers: [],
  keys: [],
  conversations: [],
  activeId: null,
  messages: [],
  streaming: false,
  abortController: null,
};

const els = {};

document.addEventListener("DOMContentLoaded", async () => {
  cacheEls();
  bindUi();
  renderFooter("#site-footer");

  try {
    const [me, provData, keysData, convs] = await Promise.all([
      apiJson("/api/auth/me"),
      apiJson("/api/providers"),
      apiJson("/api/keys"),
      apiJson("/api/conversations"),
    ]);
    state.user = me;
    state.providers = provData.providers || [];
    state.keys = (keysData.keys || []).map((k) => k.provider);
    state.conversations = convs.conversations || [];
  } catch (e) {
    console.error(e);
    return;
  }

  renderUser();
  renderProviderSelect();
  renderConversations();
  els.composer.focus();
});

function cacheEls() {
  els.userInfo = document.querySelector("#user-info");
  els.providerSelect = document.querySelector("#provider-select");
  els.modelSelect = document.querySelector("#model-select");
  els.sidebar = document.querySelector("#sidebar");
  els.convList = document.querySelector("#conv-list");
  els.messages = document.querySelector("#messages");
  els.composer = document.querySelector("#composer-input");
  els.composerForm = document.querySelector("#composer-form");
  els.sendBtn = document.querySelector("#send-btn");
  els.newConvBtn = document.querySelector("#new-conv-btn");
  els.collapseBtn = document.querySelector("#collapse-btn");
  els.shell = document.querySelector("#chat-shell");
  els.title = document.querySelector("#conv-title");
}

function bindUi() {
  els.composerForm.addEventListener("submit", onSendMessage);
  els.composer.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage(e);
    }
  });
  els.providerSelect.addEventListener("change", renderModelSelect);
  els.newConvBtn.addEventListener("click", startNewConversation);
  els.collapseBtn.addEventListener("click", () => {
    els.shell.classList.toggle("collapsed");
  });
}

function renderUser() {
  if (!state.user) return;
  const u = state.user;
  els.userInfo.innerHTML = `
    ${u.profile_image_url ? `<img class="avatar" src="${escapeHtml(u.profile_image_url)}" alt="">` : ""}
    <span class="muted small">${escapeHtml(u.display_name)}</span>
    ${u.is_admin ? `<a class="btn ghost small" href="/admin.html">Admin</a>` : ""}
    <a class="btn ghost small" href="/settings.html">Settings</a>
    <button class="btn ghost small" id="logout-btn">Log out</button>
  `;
  document.querySelector("#logout-btn").addEventListener("click", async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" });
    location.href = "/";
  });
}

function renderProviderSelect() {
  els.providerSelect.innerHTML = "";
  const usable = state.providers.filter((p) => state.keys.includes(p.id));
  const list = usable.length ? usable : state.providers;
  for (const p of list) {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.label + (state.keys.includes(p.id) ? "" : " (no key)");
    if (!state.keys.includes(p.id)) opt.disabled = true;
    els.providerSelect.appendChild(opt);
  }
  // Pick the user's saved default if usable, else first usable.
  const preferred =
    (state.user && state.user.default_provider && state.keys.includes(state.user.default_provider))
      ? state.user.default_provider
      : (usable[0] && usable[0].id);
  if (preferred) els.providerSelect.value = preferred;
  renderModelSelect();
}

function renderModelSelect() {
  const providerId = els.providerSelect.value;
  const prov = state.providers.find((p) => p.id === providerId);
  els.modelSelect.innerHTML = "";
  if (!prov) return;
  for (const m of prov.models) {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.textContent = m.label;
    els.modelSelect.appendChild(opt);
  }
  if (state.user && state.user.default_model) {
    if ([...els.modelSelect.options].some((o) => o.value === state.user.default_model)) {
      els.modelSelect.value = state.user.default_model;
    }
  }
}

function renderConversations() {
  els.convList.innerHTML = "";
  const pinned = state.conversations.filter((c) => c.pinned);
  const rest = state.conversations.filter((c) => !c.pinned);

  if (pinned.length) {
    const g = document.createElement("div");
    g.className = "group-label";
    g.textContent = "Pinned";
    els.convList.appendChild(g);
    for (const c of pinned) els.convList.appendChild(convItem(c));
  }
  if (rest.length) {
    const g = document.createElement("div");
    g.className = "group-label";
    g.textContent = "Recent";
    els.convList.appendChild(g);
    for (const c of rest) els.convList.appendChild(convItem(c));
  }
  if (!state.conversations.length) {
    const empty = document.createElement("div");
    empty.className = "group-label";
    empty.textContent = "No conversations yet.";
    els.convList.appendChild(empty);
  }
}

function convItem(c) {
  const el = document.createElement("div");
  el.className = "conv-item" + (c.id === state.activeId ? " active" : "") + (c.pinned ? " pinned" : "");
  el.dataset.id = c.id;
  el.innerHTML = `
    <span class="title" title="${escapeHtml(c.title)}">${escapeHtml(c.title)}</span>
    <span class="actions">
      <button class="icon-btn pin" title="${c.pinned ? "Unpin" : "Pin"}">${c.pinned ? "📌" : "📍"}</button>
      <button class="icon-btn del" title="Delete">🗑</button>
    </span>
  `;
  el.querySelector(".title").addEventListener("click", () => loadConversation(c.id));
  el.querySelector(".pin").addEventListener("click", async (e) => {
    e.stopPropagation();
    await apiJson(`/api/conversations/${c.id}`, {
      method: "PATCH",
      body: { pinned: !c.pinned },
    });
    c.pinned = !c.pinned;
    state.conversations.sort(sortConvs);
    renderConversations();
  });
  el.querySelector(".del").addEventListener("click", async (e) => {
    e.stopPropagation();
    const ok = await showModal({
      title: "Delete this conversation?",
      body: `"${c.title}" will be permanently removed.`,
      confirmLabel: "Delete",
      danger: true,
    });
    if (!ok) return;
    await apiJson(`/api/conversations/${c.id}`, { method: "DELETE" });
    state.conversations = state.conversations.filter((x) => x.id !== c.id);
    if (state.activeId === c.id) {
      state.activeId = null;
      state.messages = [];
      els.messages.innerHTML = "";
      els.title.textContent = "New conversation";
    }
    renderConversations();
  });
  return el;
}

function sortConvs(a, b) {
  if ((b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) !== 0) {
    return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
  }
  return (b.updated_at || 0) - (a.updated_at || 0);
}

async function loadConversation(id) {
  state.activeId = id;
  const data = await apiJson(`/api/conversations/${id}`);
  state.messages = data.messages || [];
  els.title.textContent = data.conversation.title;
  renderMessages();
  renderConversations();
}

function startNewConversation() {
  state.activeId = null;
  state.messages = [];
  els.title.textContent = "New conversation";
  els.messages.innerHTML = "";
  renderConversations();
  els.composer.focus();
}

function renderMessages() {
  els.messages.innerHTML = "";
  for (const m of state.messages) {
    appendMessage(m);
  }
  scrollToBottom();
}

function appendMessage(m) {
  const wrap = document.createElement("div");
  wrap.className = `message ${m.role}`;
  wrap.dataset.id = m.id || "";
  wrap.innerHTML = `
    <div class="role">${m.role === "user" ? "You" : (m.role === "assistant" ? "Assistant" : m.role)}</div>
    <div class="bubble"></div>
    <div class="citations"></div>
  `;
  const bubble = wrap.querySelector(".bubble");
  bubble.innerHTML = renderMarkdown(m.content || "");
  if (m.citations && m.citations.length) renderCitations(wrap.querySelector(".citations"), m.citations);
  els.messages.appendChild(wrap);
  return wrap;
}

function renderCitations(container, citations) {
  container.innerHTML = "";
  for (const c of citations) {
    const a = document.createElement("a");
    a.className = "citation-chip";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.href = c.url || "#";
    if (!c.url) a.removeAttribute("href");
    a.textContent = `[#${c.ref}] ${citationLabel(c)}`;
    a.title = `Score: ${(c.score || 0).toFixed(3)}`;
    container.appendChild(a);
  }
}

function citationLabel(c) {
  if (c.source_type === "transcript") {
    const ts = c.timestamp_seconds ? ` @ ${fmtTs(c.timestamp_seconds)}` : "";
    return `${c.title || "video"}${ts}`;
  }
  if (c.source_type === "patch_note") {
    return `Patch ${c.patch_version || ""}`.trim();
  }
  if (c.source_type === "ship") {
    return `Ship: ${c.ship || c.title || ""}`;
  }
  return c.title || "source";
}

function fmtTs(s) {
  s = Math.floor(Number(s) || 0);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  return h > 0
    ? `${h}:${String(m).padStart(2, "0")}:${String(ss).padStart(2, "0")}`
    : `${m}:${String(ss).padStart(2, "0")}`;
}

function scrollToBottom() {
  els.messages.scrollTop = els.messages.scrollHeight;
}

async function onSendMessage(e) {
  e.preventDefault();
  if (state.streaming) return;
  const text = els.composer.value.trim();
  if (!text) return;
  const provider = els.providerSelect.value;
  const model = els.modelSelect.value;
  if (!provider || !model) {
    alert("Pick a provider and a model first.");
    return;
  }
  if (!state.keys.includes(provider)) {
    alert("You need to add an API key for this provider in Settings.");
    return;
  }

  els.composer.value = "";
  els.composer.style.height = "auto";

  const userMsg = { role: "user", content: text };
  state.messages.push(userMsg);
  appendMessage(userMsg);
  scrollToBottom();

  const assistantMsg = { role: "assistant", content: "", citations: [] };
  state.messages.push(assistantMsg);
  const assistantEl = appendMessage(assistantMsg);
  const bubble = assistantEl.querySelector(".bubble");
  bubble.textContent = "…";

  state.streaming = true;
  els.sendBtn.disabled = true;
  state.abortController = new AbortController();

  try {
    const res = await api("/api/chat", {
      method: "POST",
      body: {
        conversation_id: state.activeId,
        provider,
        model,
        message: text,
      },
      signal: state.abortController.signal,
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      bubble.textContent = `Error: ${data.error || res.status}`;
      return;
    }

    let accumulated = "";
    for await (const evt of readSSE(res.body)) {
      if (evt.event === "meta") {
        if (evt.data.conversation_id && !state.activeId) {
          state.activeId = evt.data.conversation_id;
          // Reload conversation list to show the new one
          loadConversationsRefresh();
        }
        if (Array.isArray(evt.data.citations)) {
          assistantMsg.citations = evt.data.citations;
          renderCitations(assistantEl.querySelector(".citations"), evt.data.citations);
        }
      } else if (evt.event === "delta") {
        accumulated += evt.data.text || "";
        bubble.innerHTML = renderMarkdown(accumulated);
        scrollToBottom();
      } else if (evt.event === "error") {
        bubble.innerHTML = renderMarkdown(`**Error:** ${evt.data.message || "unknown"}`);
      } else if (evt.event === "done") {
        assistantMsg.content = accumulated;
      }
    }
  } catch (e) {
    bubble.textContent = `Error: ${e.message || e}`;
  } finally {
    state.streaming = false;
    els.sendBtn.disabled = false;
    state.abortController = null;
  }
}

async function loadConversationsRefresh() {
  try {
    const data = await apiJson("/api/conversations");
    state.conversations = data.conversations || [];
    renderConversations();
  } catch (e) {
    /* ignore */
  }
}

// Async generator that reads an SSE response body and yields { event, data } objects.
async function* readSSE(body) {
  const reader = body.getReader();
  const decoder = new TextDecoder("utf-8");
  let buf = "";
  let currentEvent = "message";
  let currentData = "";
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf("\n")) !== -1) {
        const line = buf.slice(0, idx).replace(/\r$/, "");
        buf = buf.slice(idx + 1);
        if (line === "") {
          if (currentData) {
            try {
              yield { event: currentEvent, data: JSON.parse(currentData) };
            } catch {
              /* skip */
            }
          }
          currentEvent = "message";
          currentData = "";
          continue;
        }
        if (line.startsWith(":")) continue;
        if (line.startsWith("event:")) currentEvent = line.slice(6).trim();
        else if (line.startsWith("data:")) currentData += line.slice(5).trim();
      }
    }
  } finally {
    try { reader.releaseLock(); } catch { /* noop */ }
  }
}
