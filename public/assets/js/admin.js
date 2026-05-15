// public/assets/js/admin.js

import { apiJson, renderFooter, escapeHtml, showModal } from "./common.js";

const state = {
  user: null,
  workflows: [],
  repo: null,
  refreshTimer: null,
};

document.addEventListener("DOMContentLoaded", async () => {
  renderFooter("#site-footer");
  document.querySelector("#logout-btn").addEventListener("click", logout);
  document.querySelector("#refresh-btn").addEventListener("click", () => refresh(true));

  for (const btn of document.querySelectorAll("[data-workflow]")) {
    btn.addEventListener("click", () => dispatch(btn.dataset.workflow));
  }

  const diagBtn = document.querySelector("#diag-run");
  if (diagBtn) {
    diagBtn.addEventListener("click", runDiag);
    document.querySelector("#diag-q").addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); runDiag(); }
    });
  }

  let me;
  try {
    me = await apiJson("/api/auth/me");
  } catch {
    return; // common.js already redirected to /
  }
  state.user = me;

  if (!me.is_admin) {
    document.querySelector("main").innerHTML =
      `<h1>Admin</h1><p class="flash">You are signed in as <strong>${escapeHtml(me.display_name)}</strong>, but this account is not an admin.</p>`;
    return;
  }

  document.querySelector("#user-name").textContent = me.display_name;
  if (me.profile_image_url) document.querySelector("#user-avatar").src = me.profile_image_url;

  await refresh();
  // Auto-refresh every 10 seconds so in-progress jobs update.
  state.refreshTimer = setInterval(() => refresh(false), 10_000);
});

async function refresh(showSpinner = false) {
  const banner = document.querySelector("#error-banner");
  banner.innerHTML = "";
  try {
    const data = await apiJson("/api/admin/jobs");
    state.workflows = data.workflows || [];
    state.repo = data.repo || null;
    if (state.repo) {
      document.querySelector("#repo-label").textContent = `${state.repo.branch}`;
    }
    renderRuns();
    document.querySelector("#refresh-info").textContent =
      `Last refreshed at ${new Date().toLocaleTimeString()} — auto-refreshes every 10s. `;
  } catch (e) {
    banner.innerHTML = `<div class="flash">Failed to load job status: ${escapeHtml(e.message || e)}</div>`;
  }
}

function renderRuns() {
  for (const wf of state.workflows) {
    const container = document.querySelector(`[data-runs-for="${wf.key}"]`);
    if (!container) continue;
    if (wf.error) {
      container.innerHTML = `<p class="muted small" style="margin-top: 12px">Could not load runs: ${escapeHtml(wf.error)}</p>`;
      continue;
    }
    if (!wf.runs.length) {
      container.innerHTML = `<p class="muted small" style="margin-top: 12px">No runs yet.</p>`;
      continue;
    }
    container.innerHTML = `
      <table style="margin-top: 14px; width: 100%; border-collapse: collapse; font-size: 13px">
        <thead>
          <tr style="text-align: left; color: var(--fg-muted)">
            <th style="padding: 4px 6px">Status</th>
            <th style="padding: 4px 6px">When</th>
            <th style="padding: 4px 6px">Triggered by</th>
            <th style="padding: 4px 6px"></th>
          </tr>
        </thead>
        <tbody>
          ${wf.runs.map(runRow).join("")}
        </tbody>
      </table>
    `;
  }
}

function runRow(run) {
  return `
    <tr style="border-top: 1px solid var(--border)">
      <td style="padding: 6px">${statusBadge(run)}</td>
      <td style="padding: 6px">${escapeHtml(timeAgo(run.created_at))}</td>
      <td style="padding: 6px">${escapeHtml(run.actor || run.event || "")}</td>
      <td style="padding: 6px"><a href="${escapeHtml(run.html_url)}" target="_blank" rel="noopener">View log →</a></td>
    </tr>
  `;
}

function statusBadge(run) {
  let bg = "var(--bg-sidebar)";
  let fg = "var(--fg-muted)";
  let label;
  if (run.status !== "completed") {
    label = run.status.replace(/_/g, " ");
    bg = "rgba(110, 163, 255, 0.15)";
    fg = "var(--accent)";
  } else if (run.conclusion === "success") {
    label = "success";
    bg = "rgba(60, 200, 110, 0.18)";
    fg = "#3cc86e";
  } else if (run.conclusion === "failure") {
    label = "failed";
    bg = "rgba(255, 107, 107, 0.18)";
    fg = "var(--danger)";
  } else if (run.conclusion === "cancelled") {
    label = "cancelled";
  } else {
    label = run.conclusion || "completed";
  }
  return `<span style="background:${bg};color:${fg};padding:2px 8px;border-radius:999px;font-size:11.5px;font-weight:600;text-transform:uppercase;letter-spacing:.04em">${escapeHtml(label)}</span>`;
}

function timeAgo(iso) {
  if (!iso) return "";
  const t = new Date(iso).getTime();
  const diff = (Date.now() - t) / 1000;
  if (diff < 60) return `${Math.round(diff)}s ago`;
  if (diff < 3600) return `${Math.round(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.round(diff / 3600)}h ago`;
  return new Date(iso).toLocaleString();
}

async function dispatch(workflow) {
  const labels = {
    "sync-catalog": "sync catalog metadata",
    "rebuild-index": "rebuild the vector index",
    "fetch-videos": "scan for new YouTube videos",
    "fetch-patch-notes": "scan for new patch notes",
  };
  const inputs = {};
  if (workflow === "fetch-videos") {
    const y = document.querySelector("#videos-year").value.trim();
    if (y) inputs.year = y;
  }
  if (workflow === "fetch-patch-notes") {
    const tok = document.querySelector("#rsi-token").value.trim();
    if (tok) inputs.rsi_token = tok;
  }

  const ok = await showModal({
    title: `Start: ${labels[workflow] || workflow}?`,
    body: "This will kick off a new GitHub Actions run. You can monitor progress here or in GitHub.",
    confirmLabel: "Run it",
  });
  if (!ok) return;

  try {
    await apiJson("/api/admin/jobs", {
      method: "POST",
      body: { workflow, inputs },
    });
    // Clear sensitive input after dispatch.
    if (workflow === "fetch-patch-notes") {
      document.querySelector("#rsi-token").value = "";
    }
    // GitHub takes a beat to materialize the run; refresh twice.
    setTimeout(() => refresh(), 1500);
    setTimeout(() => refresh(), 6000);
  } catch (e) {
    alert("Failed to start job: " + (e.message || e));
  }
}

async function logout() {
  await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" });
  location.href = "/";
}

async function runDiag() {
  const q = document.querySelector("#diag-q").value.trim();
  const out = document.querySelector("#diag-output");
  if (!q) { out.textContent = "(enter a query)"; return; }
  out.textContent = "Running…";
  try {
    const data = await apiJson("/api/admin/diag?q=" + encodeURIComponent(q));
    out.textContent = JSON.stringify(data, null, 2);
  } catch (e) {
    out.textContent = "Error: " + (e.message || e);
  }
}
