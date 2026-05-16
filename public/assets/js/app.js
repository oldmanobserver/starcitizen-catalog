// public/assets/js/app.js
// Chat page logic.

import {
  apiJson,
  api,
  renderMarkdown,
  renderFooter,
  showModal,
  showPromptModal,
  escapeHtml,
} from "./common.js";

const state = {
  user: null,
  providers: [],
  keys: [],
  conversations: [],
  activeId: null,
  messages: [],
  streaming: false,
  abortController: null,
  searchQuery: "",
  searchResults: null, // array when searching; null when not
  searchTimer: null,
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

  // First-run onboarding: if the user has no API keys stored, prompt them to
  // add one inline so they can start chatting immediately. They can also skip
  // and head to /settings.html later.
  if (!state.keys.length) {
    showOnboardingModal();
  }
});

function showOnboardingModal() {
  const providers = state.providers || [];
  if (!providers.length) return;

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="onb-title">
      <h3 id="onb-title">Add an LLM provider key</h3>
      <p class="muted small" style="margin-top:0">
        This site uses your own LLM provider API key to answer questions about
        Star Citizen ships, patch notes, and transcripts. Pick a provider and
        paste a key to get started — you can manage or replace keys later in
        <a href="/settings.html">Settings</a>.
      </p>
      <div class="field">
        <label for="onb-provider">Provider</label>
        <select id="onb-provider"></select>
      </div>
      <div class="field">
        <label for="onb-key">API key</label>
        <input type="password" id="onb-key" placeholder="paste key here"
               autocomplete="off" spellcheck="false">
        <span class="hint">
          Stored encrypted at rest. Only decrypted in-memory when forwarding
          your prompt to the provider.
        </span>
      </div>
      <div class="hint" id="onb-error" style="color: var(--danger); display:none"></div>
      <div class="actions">
        <button class="cancel" type="button">Skip for now</button>
        <button class="confirm primary" type="button">Save &amp; start chatting</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);

  const provSel = backdrop.querySelector("#onb-provider");
  for (const p of providers) {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.label;
    provSel.appendChild(opt);
  }
  // Default to user's saved default provider if set, else first.
  if (state.user && state.user.default_provider &&
      providers.some((p) => p.id === state.user.default_provider)) {
    provSel.value = state.user.default_provider;
  }

  const keyInput = backdrop.querySelector("#onb-key");
  const errEl = backdrop.querySelector("#onb-error");
  const confirmBtn = backdrop.querySelector(".confirm");
  const cancelBtn = backdrop.querySelector(".cancel");

  function close() { backdrop.remove(); }

  cancelBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });
  keyInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      confirmBtn.click();
    }
  });

  confirmBtn.addEventListener("click", async () => {
    const provider = provSel.value;
    const key = keyInput.value.trim();
    errEl.style.display = "none";
    errEl.textContent = "";
    if (!provider) {
      errEl.textContent = "Please choose a provider.";
      errEl.style.display = "";
      return;
    }
    if (key.length < 8) {
      errEl.textContent = "That key looks too short.";
      errEl.style.display = "";
      return;
    }
    confirmBtn.disabled = true;
    cancelBtn.disabled = true;
    confirmBtn.textContent = "Saving…";
    try {
      await apiJson("/api/keys", {
        method: "PUT",
        body: { provider, key },
      });
      // Refresh keys + provider dropdown so the chat UI is immediately usable.
      const keysData = await apiJson("/api/keys");
      state.keys = (keysData.keys || []).map((k) => k.provider);
      renderProviderSelect();
      // Prefer the provider we just added.
      if ([...els.providerSelect.options].some((o) => o.value === provider)) {
        els.providerSelect.value = provider;
        renderModelSelect();
      }
      close();
      els.composer.focus();
    } catch (e) {
      confirmBtn.disabled = false;
      cancelBtn.disabled = false;
      confirmBtn.textContent = "Save & start chatting";
      errEl.textContent = "Failed to save key: " + (e.message || e);
      errEl.style.display = "";
    }
  });

  // Focus the key field after the modal mounts.
  setTimeout(() => keyInput.focus(), 0);
}

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
  els.stopBtn = document.querySelector("#stop-btn");
  els.newConvBtn = document.querySelector("#new-conv-btn");
  els.collapseBtn = document.querySelector("#collapse-btn");
  els.shell = document.querySelector("#chat-shell");
  els.title = document.querySelector("#conv-title");
  els.renameBtn = document.querySelector("#rename-conv-btn");
  els.exportBtn = document.querySelector("#export-conv-btn");
  els.search = document.querySelector("#conv-search");
  els.searchClear = document.querySelector("#conv-search-clear");
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
  els.stopBtn.addEventListener("click", onStopGenerating);
  els.newConvBtn.addEventListener("click", startNewConversation);
  els.collapseBtn.addEventListener("click", () => {
    els.shell.classList.toggle("collapsed");
  });
  els.renameBtn.addEventListener("click", onRenameActive);
  els.exportBtn.addEventListener("click", onExportActive);
  els.search.addEventListener("input", onSearchInput);
  els.search.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && els.search.value) {
      e.preventDefault();
      clearSearch();
    }
  });
  els.searchClear.addEventListener("click", clearSearch);
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

  // Search mode: show a flat result list, no Pinned/Recent grouping.
  if (state.searchResults) {
    const results = state.searchResults;
    const label = document.createElement("div");
    label.className = "group-label";
    label.textContent = results.length
      ? `Results (${results.length})`
      : "No matches.";
    els.convList.appendChild(label);
    for (const c of results) els.convList.appendChild(convItem(c, { search: true }));
    return;
  }

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

function convItem(c, opts = {}) {
  const el = document.createElement("div");
  el.className = "conv-item" + (c.id === state.activeId ? " active" : "") + (c.pinned ? " pinned" : "");
  el.dataset.id = c.id;
  const snippetHtml = opts.search && c.snippet
    ? `<div class="snippet">${highlightSnippet(c.snippet, state.searchQuery)}</div>`
    : "";
  el.innerHTML = `
    <div class="conv-row">
      <span class="title" title="${escapeHtml(c.title)}">${escapeHtml(c.title)}</span>
      <span class="actions">
        <button class="icon-btn rename" title="Rename">✎</button>
        <button class="icon-btn pin" title="${c.pinned ? "Unpin" : "Pin"}">${c.pinned ? "📌" : "📍"}</button>
        <button class="icon-btn del" title="Delete">🗑</button>
      </span>
    </div>
    ${snippetHtml}
  `;
  el.querySelector(".title").addEventListener("click", () => loadConversation(c.id));
  el.querySelector(".rename").addEventListener("click", async (e) => {
    e.stopPropagation();
    await renameConversation(c);
  });
  el.querySelector(".pin").addEventListener("click", async (e) => {
    e.stopPropagation();
    await apiJson(`/api/conversations/${c.id}`, {
      method: "PATCH",
      body: { pinned: !c.pinned },
    });
    c.pinned = !c.pinned;
    // Keep both the main list and any active search result list in sync.
    const ref = state.conversations.find((x) => x.id === c.id);
    if (ref) ref.pinned = c.pinned;
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
    if (state.searchResults) {
      state.searchResults = state.searchResults.filter((x) => x.id !== c.id);
    }
    if (state.activeId === c.id) {
      state.activeId = null;
      state.messages = [];
      els.messages.innerHTML = "";
      setActiveTitle("New conversation");
    }
    renderConversations();
  });
  return el;
}

async function renameConversation(c) {
  const next = await showPromptModal({
    title: "Rename conversation",
    initialValue: c.title || "",
    placeholder: "Conversation title",
    confirmLabel: "Save",
    maxLength: 200,
  });
  if (next === null || next === c.title) return;
  await apiJson(`/api/conversations/${c.id}`, {
    method: "PATCH",
    body: { title: next },
  });
  c.title = next;
  const ref = state.conversations.find((x) => x.id === c.id);
  if (ref) ref.title = next;
  if (state.activeId === c.id) setActiveTitle(next);
  renderConversations();
}

function setActiveTitle(title) {
  els.title.textContent = title;
  els.title.title = title;
  const hasActive = !!state.activeId;
  els.renameBtn.hidden = !hasActive;
  els.exportBtn.hidden = !hasActive;
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
  state.activeConversation = data.conversation;
  state.messages = data.messages || [];
  setActiveTitle(data.conversation.title);
  renderMessages();
  renderConversations();
}

function startNewConversation() {
  state.activeId = null;
  state.activeConversation = null;
  state.messages = [];
  setActiveTitle("New conversation");
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
  applyCitations(wrap, m.content || "", m.citations || []);
  els.messages.appendChild(wrap);
  return wrap;
}

// Turn inline [#N] spans into anchors using the citations array, and render
// chips at the bottom for only the refs that actually appear in `text`.
function applyCitations(wrap, text, citations) {
  if (!citations || !citations.length) return;
  const byRef = new Map(citations.map((c) => [Number(c.ref), c]));
  const bubble = wrap.querySelector(".bubble");
  bubble.querySelectorAll("span.citation-ref[data-ref]").forEach((span) => {
    const ref = Number(span.dataset.ref);
    const c = byRef.get(ref);
    if (!c || !c.url) return;
    const a = document.createElement("a");
    a.className = "citation-ref";
    a.dataset.ref = String(ref);
    a.href = c.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = span.textContent;
    a.title = `${citationLabel(c)} (score ${(c.score || 0).toFixed(3)})`;
    span.replaceWith(a);
  });

  // Collect refs actually referenced in the message text.
  const used = new Set();
  const re = /\[#(\d+)\]/g;
  let mm;
  while ((mm = re.exec(text)) !== null) used.add(Number(mm[1]));
  const filtered = citations.filter((c) => used.has(Number(c.ref)));
  renderCitations(wrap.querySelector(".citations"), filtered);
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
  els.sendBtn.hidden = true;
  els.stopBtn.hidden = false;
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
          // Reveal Rename/Export now that we have a saved conversation.
          els.renameBtn.hidden = false;
          els.exportBtn.hidden = false;
          // Reload conversation list to show the new one
          loadConversationsRefresh();
        }
        if (Array.isArray(evt.data.citations)) {
          assistantMsg.citations = evt.data.citations;
          // Don't render chips yet — wait until we know which refs the
          // model actually used. We'll re-apply on each delta.
          applyCitations(assistantEl, accumulated, assistantMsg.citations);
        }
      } else if (evt.event === "delta") {
        accumulated += evt.data.text || "";
        bubble.innerHTML = renderMarkdown(accumulated);
        applyCitations(assistantEl, accumulated, assistantMsg.citations);
        scrollToBottom();
      } else if (evt.event === "error") {
        bubble.innerHTML = renderMarkdown(`**Error:** ${evt.data.message || "unknown"}`);
      } else if (evt.event === "done") {
        assistantMsg.content = accumulated;
        applyCitations(assistantEl, accumulated, assistantMsg.citations);
      }
    }
  } catch (e) {
    if (e.name === "AbortError") {
      assistantMsg.content = bubble.textContent === "…" ? "" : (bubble.textContent || "");
      const note = document.createElement("div");
      note.className = "muted small";
      note.textContent = "Stopped.";
      assistantEl.appendChild(note);
    } else {
      bubble.textContent = `Error: ${e.message || e}`;
    }
  } finally {
    state.streaming = false;
    els.sendBtn.disabled = false;
    els.sendBtn.hidden = false;
    els.stopBtn.hidden = true;
    state.abortController = null;
  }
}

function onStopGenerating() {
  if (state.abortController) {
    state.abortController.abort();
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

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

function onSearchInput() {
  const q = els.search.value.trim();
  els.searchClear.hidden = !q;
  if (state.searchTimer) {
    clearTimeout(state.searchTimer);
    state.searchTimer = null;
  }
  if (!q) {
    state.searchQuery = "";
    state.searchResults = null;
    renderConversations();
    return;
  }
  state.searchTimer = setTimeout(() => runSearch(q), 200);
}

async function runSearch(q) {
  state.searchQuery = q;
  try {
    const data = await apiJson(`/api/conversations?q=${encodeURIComponent(q)}`);
    // Ignore stale responses if the user kept typing.
    if (state.searchQuery !== q) return;
    state.searchResults = data.conversations || [];
    renderConversations();
  } catch (e) {
    console.error("search failed", e);
  }
}

function clearSearch() {
  els.search.value = "";
  els.searchClear.hidden = true;
  state.searchQuery = "";
  state.searchResults = null;
  if (state.searchTimer) {
    clearTimeout(state.searchTimer);
    state.searchTimer = null;
  }
  renderConversations();
  els.search.focus();
}

function highlightSnippet(snippet, q) {
  const safe = escapeHtml(snippet);
  if (!q) return safe;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safe.replace(new RegExp(escaped, "gi"), (m) => `<mark>${m}</mark>`);
}

// ---------------------------------------------------------------------------
// Rename / Export from the chat toolbar
// ---------------------------------------------------------------------------

async function onRenameActive() {
  if (!state.activeId) return;
  const current = state.conversations.find((c) => c.id === state.activeId);
  const c = current || { id: state.activeId, title: els.title.textContent || "" };
  await renameConversation(c);
}

async function onExportActive() {
  if (!state.activeId) return;
  let conversation, messages;
  // Prefer freshly loaded data so we include the most recent assistant turn.
  try {
    const data = await apiJson(`/api/conversations/${state.activeId}`);
    conversation = data.conversation;
    messages = data.messages || [];
  } catch (e) {
    conversation = { id: state.activeId, title: els.title.textContent || "" };
    messages = state.messages || [];
  }
  const md = buildConversationMarkdown(conversation, messages);
  const filename = safeFilename(conversation.title || "conversation") + ".md";
  downloadTextFile(filename, md, "text/markdown;charset=utf-8");
}

function buildConversationMarkdown(conv, messages) {
  const lines = [];
  const title = (conv && conv.title) || "Conversation";
  lines.push(`# ${title}`);
  lines.push("");
  const meta = [];
  if (conv && conv.id) meta.push(`**ID:** \`${conv.id}\``);
  if (conv && conv.created_at) meta.push(`**Created:** ${fmtDateTime(conv.created_at)}`);
  if (conv && conv.updated_at) meta.push(`**Updated:** ${fmtDateTime(conv.updated_at)}`);
  if (conv && conv.provider) meta.push(`**Provider:** ${conv.provider}`);
  if (conv && conv.model) meta.push(`**Model:** ${conv.model}`);
  if (meta.length) {
    lines.push(meta.join("  \n"));
    lines.push("");
  }
  lines.push("---");
  lines.push("");

  for (const m of messages) {
    const who =
      m.role === "user" ? "You" : m.role === "assistant" ? "Assistant" : m.role;
    const ts = m.created_at ? ` _(${fmtDateTime(m.created_at)})_` : "";
    lines.push(`## ${who}${ts}`);
    lines.push("");
    lines.push((m.content || "").trim() || "_(empty)_");
    lines.push("");
    const cites = Array.isArray(m.citations) ? m.citations : [];
    if (cites.length) {
      // Only include citations that actually appear in the message body.
      const used = new Set();
      const re = /\[#(\d+)\]/g;
      let mm;
      while ((mm = re.exec(m.content || "")) !== null) used.add(Number(mm[1]));
      const filtered = used.size
        ? cites.filter((c) => used.has(Number(c.ref)))
        : cites;
      if (filtered.length) {
        lines.push("**Sources:**");
        lines.push("");
        for (const c of filtered) {
          const label = citationLabel(c);
          const link = c.url ? `[${label}](${c.url})` : label;
          lines.push(`- [#${c.ref}] ${link}`);
        }
        lines.push("");
      }
    }
    lines.push("---");
    lines.push("");
  }
  return lines.join("\n");
}

function safeFilename(name) {
  return String(name || "conversation")
    .replace(/[\\/:*?"<>|\x00-\x1f]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80) || "conversation";
}

function downloadTextFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime || "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(url);
    a.remove();
  }, 0);
}

function fmtDateTime(secs) {
  const n = Number(secs);
  if (!n) return "";
  try {
    return new Date(n * 1000).toISOString().replace("T", " ").slice(0, 19) + " UTC";
  } catch {
    return "";
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
