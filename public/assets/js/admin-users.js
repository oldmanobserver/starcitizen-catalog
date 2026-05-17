// public/assets/js/admin-users.js

import { apiJson, escapeHtml } from "./common.js";
import { initAdminPage } from "./admin-shell.js";

const state = {
  q: "",
  page: 1,
  pageSize: 25,
  total: 0,
  totalPages: 0,
  loading: false,
};

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#users-search").addEventListener("click", () => {
    state.q = document.querySelector("#users-q").value.trim();
    state.page = 1;
    loadUsers();
  });
  document.querySelector("#users-q").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      state.q = e.currentTarget.value.trim();
      state.page = 1;
      loadUsers();
    }
  });
  document.querySelector("#users-clear").addEventListener("click", () => {
    document.querySelector("#users-q").value = "";
    state.q = "";
    state.page = 1;
    loadUsers();
  });
  document.querySelector("#users-prev").addEventListener("click", () => {
    if (state.page > 1) { state.page--; loadUsers(); }
  });
  document.querySelector("#users-next").addEventListener("click", () => {
    if (state.page < state.totalPages) { state.page++; loadUsers(); }
  });

  const me = await initAdminPage();
  if (!me) return;
  loadUsers();
});

async function loadUsers() {
  if (state.loading) return;
  state.loading = true;
  const tableEl = document.querySelector("#users-table");
  const summaryEl = document.querySelector("#users-summary");
  const pagerEl = document.querySelector("#users-pager");
  summaryEl.textContent = "Loading…";
  tableEl.innerHTML = "";
  pagerEl.style.display = "none";
  try {
    const params = new URLSearchParams({
      page: String(state.page),
      page_size: String(state.pageSize),
    });
    if (state.q) params.set("q", state.q);
    const data = await apiJson("/api/admin/users?" + params.toString());
    state.total = data.total || 0;
    state.totalPages = data.total_pages || 0;
    renderUsers(data);
  } catch (e) {
    summaryEl.innerHTML = `<span style="color: var(--danger)">Failed to load users: ${escapeHtml(e.message || e)}</span>`;
  } finally {
    state.loading = false;
  }
}

function renderUsers(data) {
  const summaryEl = document.querySelector("#users-summary");
  const tableEl = document.querySelector("#users-table");
  const pagerEl = document.querySelector("#users-pager");
  const pageLabel = document.querySelector("#users-page-label");
  const prevBtn = document.querySelector("#users-prev");
  const nextBtn = document.querySelector("#users-next");

  const total = data.total || 0;
  const users = data.users || [];
  if (!total) {
    summaryEl.textContent = data.q
      ? `No users match "${data.q}".`
      : "No users yet.";
    tableEl.innerHTML = "";
    pagerEl.style.display = "none";
    return;
  }
  const start = (data.page - 1) * data.page_size + 1;
  const end = start + users.length - 1;
  summaryEl.textContent = data.q
    ? `Matched ${total} user${total === 1 ? "" : "s"} for "${data.q}". Showing ${start}–${end}.`
    : `${total} user${total === 1 ? "" : "s"} total. Showing ${start}–${end}.`;

  tableEl.innerHTML = `
    <table style="width: 100%; border-collapse: collapse; font-size: 13px">
      <thead>
        <tr style="text-align: left; color: var(--fg-muted)">
          <th style="padding: 6px"></th>
          <th style="padding: 6px">User</th>
          <th style="padding: 6px">Email</th>
          <th style="padding: 6px; text-align: right">Convos</th>
          <th style="padding: 6px; text-align: right">Messages</th>
          <th style="padding: 6px">Joined</th>
          <th style="padding: 6px">Last login</th>
        </tr>
      </thead>
      <tbody>
        ${users.map(userRow).join("")}
      </tbody>
    </table>
  `;

  for (const cell of tableEl.querySelectorAll(".email-cell")) {
    const btn = cell.querySelector(".email-toggle");
    btn.addEventListener("click", () => toggleEmail(cell));
  }

  pagerEl.style.display = "flex";
  pageLabel.textContent = `Page ${data.page} of ${data.total_pages}`;
  prevBtn.disabled = data.page <= 1;
  nextBtn.disabled = data.page >= data.total_pages;
}

function userRow(u) {
  const avatar = u.profile_image_url
    ? `<img src="${escapeHtml(u.profile_image_url)}" alt="" style="width:24px;height:24px;border-radius:50%;display:block">`
    : "";
  const adminBadge = u.is_admin
    ? ` <span style="background:rgba(110,163,255,0.15);color:var(--accent);padding:1px 6px;border-radius:999px;font-size:10.5px;font-weight:600;text-transform:uppercase;letter-spacing:.04em">admin</span>`
    : "";
  const displayName = escapeHtml(u.display_name || u.login || "");
  const login = u.login ? `<span class="muted small">@${escapeHtml(u.login)}</span>` : "";
  const emailCell = u.email
    ? `<span class="email-cell" data-email="${escapeHtml(u.email)}" data-revealed="0" style="display:inline-flex;align-items:center;gap:6px">
         <span class="email-text" style="font-variant-numeric:tabular-nums">${escapeHtml(maskEmail(u.email))}</span>
         <button type="button" class="email-toggle btn ghost small" aria-label="Show email" title="Show email"
                 style="padding:2px 6px;line-height:1">${EYE_OPEN_SVG}</button>
       </span>`
    : `<span class="muted small">—</span>`;
  return `
    <tr style="border-top: 1px solid var(--border)">
      <td style="padding: 6px">${avatar}</td>
      <td style="padding: 6px">${displayName}${adminBadge}<br>${login}</td>
      <td style="padding: 6px">${emailCell}</td>
      <td style="padding: 6px; text-align: right">${u.conversation_count}</td>
      <td style="padding: 6px; text-align: right">${u.message_count}</td>
      <td style="padding: 6px">${escapeHtml(fmtDate(u.created_at))}</td>
      <td style="padding: 6px">${escapeHtml(fmtRelative(u.last_login_at))}</td>
    </tr>
  `;
}

// Masks an email so the local-part and domain lengths are still hinted at
// but the characters aren't visible. e.g. "alice@example.com" -> "•••••@•••••••••••"
function maskEmail(email) {
  const s = String(email || "");
  const at = s.indexOf("@");
  if (at < 0) return "•".repeat(Math.min(s.length, 8) || 1);
  const local = "•".repeat(Math.max(1, at));
  const domain = "•".repeat(Math.max(1, s.length - at - 1));
  return `${local}@${domain}`;
}

function toggleEmail(cell) {
  const revealed = cell.getAttribute("data-revealed") === "1";
  const email = cell.getAttribute("data-email") || "";
  const textEl = cell.querySelector(".email-text");
  const btn = cell.querySelector(".email-toggle");
  if (revealed) {
    textEl.textContent = maskEmail(email);
    btn.innerHTML = EYE_OPEN_SVG;
    btn.setAttribute("aria-label", "Show email");
    btn.setAttribute("title", "Show email");
    cell.setAttribute("data-revealed", "0");
  } else {
    textEl.textContent = email;
    btn.innerHTML = EYE_OFF_SVG;
    btn.setAttribute("aria-label", "Hide email");
    btn.setAttribute("title", "Hide email");
    cell.setAttribute("data-revealed", "1");
  }
}

const EYE_OPEN_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>`;
const EYE_OFF_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.77 19.77 0 0 1 4.22-5.94"/><path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a19.86 19.86 0 0 1-3.17 4.19"/><path d="M14.12 14.12A3 3 0 1 1 9.88 9.88"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;

function fmtDate(unixSeconds) {
  if (!unixSeconds) return "";
  return new Date(unixSeconds * 1000).toLocaleDateString();
}

function fmtRelative(unixSeconds) {
  if (!unixSeconds) return "";
  const diff = Date.now() / 1000 - unixSeconds;
  if (diff < 60) return `${Math.round(diff)}s ago`;
  if (diff < 3600) return `${Math.round(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.round(diff / 3600)}h ago`;
  if (diff < 86400 * 30) return `${Math.round(diff / 86400)}d ago`;
  return new Date(unixSeconds * 1000).toLocaleDateString();
}
