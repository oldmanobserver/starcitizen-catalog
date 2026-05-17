// public/assets/js/admin-jobs.js

import { apiJson, escapeHtml, showModal } from "./common.js";
import { initAdminPage } from "./admin-shell.js";

const state = {
  workflows: [],
  repo: null,
  refreshTimer: null,
};

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#refresh-btn").addEventListener("click", () => refresh(true));

  for (const btn of document.querySelectorAll("[data-workflow]")) {
    btn.addEventListener("click", () => dispatch(btn.dataset.workflow));
  }

  const me = await initAdminPage();
  if (!me) return;

  await refresh();
  state.refreshTimer = setInterval(() => refresh(false), 10_000);
});

async function refresh() {
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
  };
  const inputs = {};
  if (workflow === "rebuild-index") {
    const full = document.querySelector("#rebuild-full");
    inputs.mode = (full && full.checked) ? "full" : "incremental";
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
    setTimeout(() => refresh(), 1500);
    setTimeout(() => refresh(), 6000);
  } catch (e) {
    alert("Failed to start job: " + (e.message || e));
  }
}
