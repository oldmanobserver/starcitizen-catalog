// public/assets/js/admin-feedback.js

import { apiJson, escapeHtml, renderMarkdown } from "./common.js";
import { initAdminPage } from "./admin-shell.js";

const state = {
  status: "open",
  kind: "all",
  q: "",
  page: 1,
  pageSize: 25,
  total: 0,
  totalPages: 0,
  loading: false,
  activeId: null,
};

document.addEventListener("DOMContentLoaded", async () => {
  bindUi();
  const me = await initAdminPage();
  if (!me) return;
  loadList();
});

function bindUi() {
  document.querySelector("#fb-status").addEventListener("change", (e) => {
    state.status = e.target.value;
    state.page = 1;
    loadList();
  });
  document.querySelector("#fb-kind").addEventListener("change", (e) => {
    state.kind = e.target.value;
    state.page = 1;
    loadList();
  });
  document.querySelector("#fb-search").addEventListener("click", () => {
    state.q = document.querySelector("#fb-q").value.trim();
    state.page = 1;
    loadList();
  });
  document.querySelector("#fb-q").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      state.q = e.currentTarget.value.trim();
      state.page = 1;
      loadList();
    }
  });
  document.querySelector("#fb-clear").addEventListener("click", () => {
    document.querySelector("#fb-q").value = "";
    state.q = "";
    state.page = 1;
    loadList();
  });
  document.querySelector("#fb-prev").addEventListener("click", () => {
    if (state.page > 1) { state.page--; loadList(); }
  });
  document.querySelector("#fb-next").addEventListener("click", () => {
    if (state.page < state.totalPages) { state.page++; loadList(); }
  });
}

async function loadList() {
  if (state.loading) return;
  state.loading = true;
  const tableEl = document.querySelector("#fb-table");
  const summaryEl = document.querySelector("#fb-summary");
  const pagerEl = document.querySelector("#fb-pager");
  summaryEl.textContent = "Loading…";
  tableEl.innerHTML = "";
  pagerEl.style.display = "none";
  try {
    const params = new URLSearchParams({
      status: state.status,
      kind: state.kind,
      page: String(state.page),
      page_size: String(state.pageSize),
    });
    if (state.q) params.set("q", state.q);
    const data = await apiJson("/api/admin/feedback?" + params.toString());
    state.total = data.total || 0;
    state.totalPages = data.total_pages || 0;
    renderList(data);
  } catch (e) {
    summaryEl.innerHTML = `<span style="color: var(--danger)">Failed to load: ${escapeHtml(e.message || e)}</span>`;
  } finally {
    state.loading = false;
  }
}

function renderList(data) {
  const summaryEl = document.querySelector("#fb-summary");
  const tableEl = document.querySelector("#fb-table");
  const pagerEl = document.querySelector("#fb-pager");
  const pageLabel = document.querySelector("#fb-page-label");
  const prevBtn = document.querySelector("#fb-prev");
  const nextBtn = document.querySelector("#fb-next");

  const items = data.items || [];
  const total = data.total || 0;
  if (!total) {
    summaryEl.textContent = data.q
      ? `No feedback matches "${data.q}".`
      : "No feedback yet for this filter.";
    tableEl.innerHTML = "";
    pagerEl.style.display = "none";
    return;
  }
  const start = (data.page - 1) * data.page_size + 1;
  const end = start + items.length - 1;
  summaryEl.textContent = `${total} item${total === 1 ? "" : "s"} total. Showing ${start}–${end}.`;

  tableEl.innerHTML = `
    <table style="width: 100%; border-collapse: collapse; font-size: 13px">
      <thead>
        <tr style="text-align: left; color: var(--fg-muted)">
          <th style="padding: 6px">Type</th>
          <th style="padding: 6px">Title</th>
          <th style="padding: 6px">User</th>
          <th style="padding: 6px">Status</th>
          <th style="padding: 6px">Submitted</th>
          <th style="padding: 6px"></th>
        </tr>
      </thead>
      <tbody>
        ${items.map(rowHtml).join("")}
      </tbody>
    </table>
  `;
  for (const tr of tableEl.querySelectorAll("tr[data-fb-id]")) {
    const id = tr.getAttribute("data-fb-id");
    tr.style.cursor = "pointer";
    tr.addEventListener("click", (e) => {
      // Don't hijack clicks on the inline View button (it triggers the same).
      if (e.target.closest(".no-row-click")) return;
      openDetail(id);
    });
    const btn = tr.querySelector(".view-btn");
    if (btn) btn.addEventListener("click", () => openDetail(id));
  }

  pagerEl.style.display = "flex";
  pageLabel.textContent = `Page ${data.page} of ${data.total_pages}`;
  prevBtn.disabled = data.page <= 1;
  nextBtn.disabled = data.page >= data.total_pages;
}

function rowHtml(it) {
  const isActive = it.id === state.activeId;
  const userLabel = it.user && (it.user.display_name || it.user.login)
    ? escapeHtml(it.user.display_name || it.user.login)
    : `<span class="muted small">(unknown)</span>`;
  const kindBadge = it.kind === "bug"
    ? `<span class="badge badge-bug">Bug</span>`
    : `<span class="badge badge-sugg">Suggestion</span>`;
  const statusBadge = it.status === "closed"
    ? `<span class="badge badge-closed">Closed</span>`
    : `<span class="badge badge-open">Open</span>`;
  const snapDot = it.has_snapshot
    ? ` <span title="Includes search snapshot" aria-label="Includes search snapshot">🔎</span>`
    : "";
  return `
    <tr data-fb-id="${escapeHtml(it.id)}"
        style="border-top: 1px solid var(--border); ${isActive ? "background: var(--bg-sidebar);" : ""}">
      <td style="padding: 6px">${kindBadge}</td>
      <td style="padding: 6px">${escapeHtml(it.title)}${snapDot}</td>
      <td style="padding: 6px">${userLabel}</td>
      <td style="padding: 6px">${statusBadge}</td>
      <td style="padding: 6px" class="muted small">${escapeHtml(fmtDate(it.created_at))}</td>
      <td style="padding: 6px; text-align: right">
        <button class="btn ghost small view-btn no-row-click" type="button">View</button>
      </td>
    </tr>
  `;
}

// ---------------------------------------------------------------------------
// Detail view
// ---------------------------------------------------------------------------

async function openDetail(id) {
  state.activeId = id;
  const detail = document.querySelector("#fb-detail");
  detail.style.display = "";
  detail.innerHTML = `<div class="muted small">Loading…</div>`;
  detail.scrollIntoView({ behavior: "smooth", block: "start" });

  // Refresh the highlight on the table.
  for (const tr of document.querySelectorAll("tr[data-fb-id]")) {
    tr.style.background = tr.getAttribute("data-fb-id") === id ? "var(--bg-sidebar)" : "";
  }

  try {
    const data = await apiJson(`/api/admin/feedback/${encodeURIComponent(id)}`);
    renderDetail(data.feedback);
  } catch (e) {
    detail.innerHTML = `<div style="color: var(--danger)">Failed to load: ${escapeHtml(e.message || e)}</div>`;
  }
}

function renderDetail(fb) {
  const detail = document.querySelector("#fb-detail");
  const kindBadge = fb.kind === "bug"
    ? `<span class="badge badge-bug">Bug</span>`
    : `<span class="badge badge-sugg">Suggestion</span>`;
  const statusBadge = fb.status === "closed"
    ? `<span class="badge badge-closed">Closed</span>`
    : `<span class="badge badge-open">Open</span>`;

  const userBlock = fb.user
    ? `
      <div class="h-stack" style="gap: 8px; align-items: center">
        ${fb.user.profile_image_url
          ? `<img class="avatar" src="${escapeHtml(fb.user.profile_image_url)}" alt="">`
          : ""}
        <div>
          <div>${escapeHtml(fb.user.display_name || fb.user.login || "(unknown)")}</div>
          ${fb.user.login ? `<div class="muted small">@${escapeHtml(fb.user.login)}</div>` : ""}
        </div>
      </div>
    `
    : `<span class="muted small">(unknown user)</span>`;

  const closedBlock = fb.status === "closed"
    ? `
      <div class="card" style="margin-top: 12px; border-color: var(--border)">
        <div class="muted small">
          Closed ${escapeHtml(fmtDateTime(fb.closed_at))}${
            fb.closed_by ? ` by ${escapeHtml(fb.closed_by.display_name || fb.closed_by.login || "admin")}` : ""
          }
        </div>
        ${fb.close_notes
          ? `<div style="margin-top: 6px; white-space: pre-wrap">${escapeHtml(fb.close_notes)}</div>`
          : `<div class="muted small" style="margin-top: 6px">(no notes)</div>`}
      </div>
    `
    : "";

  const snapshotBlock = fb.snapshot
    ? renderSnapshot(fb.snapshot, fb)
    : `<div class="muted small" style="margin-top: 12px">The user did not include their search with this report.</div>`;

  detail.innerHTML = `
    <div class="h-stack" style="gap: 8px; align-items: center; flex-wrap: wrap">
      ${kindBadge} ${statusBadge}
      <h2 style="margin: 0; flex: 1; min-width: 200px">${escapeHtml(fb.title)}</h2>
      <button class="btn ghost small" id="fb-close-detail" type="button">Close panel</button>
    </div>

    <div class="h-stack" style="gap: 16px; margin-top: 10px; flex-wrap: wrap">
      ${userBlock}
      <div class="muted small">Submitted ${escapeHtml(fmtDateTime(fb.created_at))}</div>
    </div>

    <h3 style="margin-top: 16px; margin-bottom: 6px">Description</h3>
    <div style="white-space: pre-wrap">${escapeHtml(fb.description)}</div>

    ${closedBlock}

    <div class="actions" style="margin-top: 16px; display: flex; gap: 8px; justify-content: flex-end">
      ${fb.status === "open"
        ? `<button class="btn primary" id="fb-close-btn" type="button">Close with notes…</button>`
        : `<button class="btn" id="fb-reopen-btn" type="button">Reopen</button>`}
    </div>

    <h3 style="margin-top: 20px">Search included with report</h3>
    ${snapshotBlock}
  `;

  document.querySelector("#fb-close-detail").addEventListener("click", () => {
    state.activeId = null;
    detail.style.display = "none";
    for (const tr of document.querySelectorAll("tr[data-fb-id]")) tr.style.background = "";
  });

  const closeBtn = document.querySelector("#fb-close-btn");
  if (closeBtn) closeBtn.addEventListener("click", () => closeFeedback(fb.id));
  const reopenBtn = document.querySelector("#fb-reopen-btn");
  if (reopenBtn) reopenBtn.addEventListener("click", () => reopenFeedback(fb.id));
}

function renderSnapshot(snap, fb) {
  const userMsg = snap.user_message || "";
  const assistantMsg = snap.assistant_message || "";
  const citations = Array.isArray(snap.citations) ? snap.citations : [];

  const meta = [];
  if (snap.conversation_title) meta.push(`Title: ${escapeHtml(snap.conversation_title)}`);
  if (snap.provider) meta.push(`Provider: ${escapeHtml(snap.provider)}`);
  if (snap.model) meta.push(`Model: ${escapeHtml(snap.model)}`);
  if (fb.conversation_id) meta.push(`Conversation id: <code>${escapeHtml(fb.conversation_id)}</code>`);
  const metaLine = meta.length
    ? `<div class="muted small" style="margin-bottom: 10px">${meta.join(" · ")}</div>`
    : "";

  // Reproduce the chat layout: a user bubble, then an assistant bubble with
  // rendered markdown and citation chips, just like /app.html.
  const userHtml = userMsg
    ? `
      <div class="message user">
        <div class="role">User</div>
        <div class="bubble">${renderMarkdown(userMsg)}</div>
      </div>
    `
    : "";

  // Build a ref->citation map and replace [#N] in the rendered HTML with
  // anchor links to the source URL (same behavior as app.js applyCitations).
  const byRef = new Map(citations.map((c) => [Number(c.ref), c]));
  let assistantBubbleHtml = renderMarkdown(assistantMsg);
  // The renderMarkdown helper turns [#N] into <span class="citation-ref" data-ref="N">…</span>;
  // upgrade to <a> when we have a URL.
  assistantBubbleHtml = assistantBubbleHtml.replace(
    /<span class="citation-ref" data-ref="(\d+)">([^<]+)<\/span>/g,
    (_m, n, label) => {
      const c = byRef.get(Number(n));
      if (!c || !c.url) return `<span class="citation-ref" data-ref="${n}">${label}</span>`;
      return `<a class="citation-ref" data-ref="${n}" href="${escapeHtml(c.url)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(citationLabel(c))}">${label}</a>`;
    }
  );

  // Citation chips: only those actually referenced in the assistant body.
  const used = new Set();
  const re = /\[#(\d+)\]/g;
  let mm;
  while ((mm = re.exec(assistantMsg)) !== null) used.add(Number(mm[1]));
  const filtered = used.size
    ? citations.filter((c) => used.has(Number(c.ref)))
    : citations;

  const chipsHtml = filtered.length
    ? `<div class="citations">${filtered.map((c) => {
        const label = `[#${c.ref}] ${citationLabel(c)}`;
        return c.url
          ? `<a class="citation-chip" target="_blank" rel="noopener noreferrer" href="${escapeHtml(c.url)}">${escapeHtml(label)}</a>`
          : `<span class="citation-chip">${escapeHtml(label)}</span>`;
      }).join("")}</div>`
    : "";

  const assistantHtml = assistantMsg
    ? `
      <div class="message assistant">
        <div class="role">Assistant</div>
        <div class="bubble">${assistantBubbleHtml}</div>
        ${chipsHtml}
      </div>
    `
    : "";

  if (!userHtml && !assistantHtml) {
    return `<div class="muted small">(empty snapshot)</div>`;
  }

  return `
    ${metaLine}
    <div class="messages snapshot-messages">
      ${userHtml}
      ${assistantHtml}
    </div>
  `;
}

function citationLabel(c) {
  if (!c) return "source";
  if (c.source_type === "transcript") {
    const ts = c.timestamp_seconds ? ` @ ${fmtTs(c.timestamp_seconds)}` : "";
    return `${c.title || "video"}${ts}`;
  }
  if (c.source_type === "patch_note") {
    const base = `Patch ${c.patch_version || ""}`.trim();
    const suffix = c.url_kind === "spectrum" ? " (Spectrum)" : "";
    return `${base}${suffix}`;
  }
  if (c.source_type === "ship") {
    return `Ship: ${c.ship || c.title || ""}`;
  }
  return c.title || "source";
}

// ---------------------------------------------------------------------------
// Close / reopen
// ---------------------------------------------------------------------------

async function closeFeedback(id) {
  const notes = await promptCloseNotes();
  if (notes === null) return; // user cancelled
  try {
    await apiJson(`/api/admin/feedback/${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: { status: "closed", close_notes: notes },
    });
    await openDetail(id);
    loadList();
  } catch (e) {
    alert("Failed to close: " + (e.message || e));
  }
}

// Show a modal that collects close notes. Resolves to the entered string
// (which may be empty) on confirm, or null on cancel. We can't reuse
// showPromptModal here because it conflates empty input with cancel, and
// we explicitly want to allow closing with no notes.
function promptCloseNotes() {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    backdrop.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <h3>Close feedback</h3>
        <p class="muted small" style="margin-top:0">
          Optionally add resolution notes. Visible to admins only.
        </p>
        <div class="field">
          <textarea id="fb-notes-input" rows="5" maxlength="4000"
                    placeholder="Resolution notes (optional)"></textarea>
        </div>
        <div class="actions">
          <button class="cancel">Cancel</button>
          <button class="confirm primary">Close feedback</button>
        </div>
      </div>
    `;
    function done(val) { backdrop.remove(); resolve(val); }
    backdrop.querySelector(".cancel").addEventListener("click", () => done(null));
    backdrop.querySelector(".confirm").addEventListener("click", () => {
      done((backdrop.querySelector("#fb-notes-input").value || "").trim());
    });
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) done(null);
    });
    document.body.appendChild(backdrop);
    setTimeout(() => backdrop.querySelector("#fb-notes-input").focus(), 0);
  });
}

async function reopenFeedback(id) {
  try {
    await apiJson(`/api/admin/feedback/${encodeURIComponent(id)}`, {
      method: "PATCH",
      body: { status: "open" },
    });
    await openDetail(id);
    loadList();
  } catch (e) {
    alert("Failed to reopen: " + (e.message || e));
  }
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

function fmtDate(unix) {
  if (!unix) return "—";
  const d = new Date(unix * 1000);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function fmtDateTime(unix) {
  if (!unix) return "—";
  const d = new Date(unix * 1000);
  return d.toLocaleString();
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
