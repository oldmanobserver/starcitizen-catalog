// functions/api/admin/jobs.js
//
// Admin job control via the GitHub Actions REST API.
//
// GET  /api/admin/jobs               -> recent runs of all three workflows
// POST /api/admin/jobs               -> { workflow: "rebuild-index" | "fetch-videos" | "fetch-patch-notes", inputs?: {} }
//                                      dispatches the chosen workflow on the default branch
//
// Required env (Pages secret/var):
//   GITHUB_OWNER              "oldmanobserver"
//   GITHUB_REPO               "starcitizen-catalog"
//   GITHUB_DEFAULT_BRANCH     "main"
//   GITHUB_DISPATCH_TOKEN     fine-grained PAT with Actions: read+write on this one repo

import { requireAdmin } from "../../lib/admin.js";
import { json, error, checkOrigin } from "../../lib/http.js";
import { audit } from "../../lib/db.js";

const WORKFLOWS = {
  "sync-catalog":  { file: "sync-catalog.yml",  label: "Sync catalog metadata (fast)" },
  "rebuild-index": { file: "rebuild-index.yml", label: "Rebuild vector index" },
};

function ghHeaders(env) {
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: `Bearer ${env.GITHUB_DISPATCH_TOKEN}`,
    "User-Agent": "starcitizen-catalog-admin",
  };
}

function repoUrl(env, path) {
  const owner = env.GITHUB_OWNER || "oldmanobserver";
  const repo = env.GITHUB_REPO || "starcitizen-catalog";
  return `https://api.github.com/repos/${owner}/${repo}${path}`;
}

export async function onRequestGet({ request, env }) {
  const { user, response } = await requireAdmin(request, env);
  if (response) return response;
  if (!env.GITHUB_DISPATCH_TOKEN) return error(500, "github_token_missing");

  // Pull the latest 10 runs per workflow in parallel.
  const entries = Object.entries(WORKFLOWS);
  const results = await Promise.all(
    entries.map(async ([key, meta]) => {
      const url = repoUrl(env, `/actions/workflows/${encodeURIComponent(meta.file)}/runs?per_page=10`);
      const r = await fetch(url, { headers: ghHeaders(env) });
      if (!r.ok) {
        return { key, label: meta.label, file: meta.file, error: `GitHub ${r.status}`, runs: [] };
      }
      const data = await r.json();
      const runs = (data.workflow_runs || []).map((run) => ({
        id: run.id,
        status: run.status,         // queued | in_progress | completed
        conclusion: run.conclusion, // success | failure | cancelled | null
        created_at: run.created_at,
        updated_at: run.updated_at,
        html_url: run.html_url,
        event: run.event,
        actor: run.actor && run.actor.login,
        display_title: run.display_title || run.name,
      }));
      return { key, label: meta.label, file: meta.file, runs };
    })
  );

  return json({
    workflows: results,
    repo: {
      owner: env.GITHUB_OWNER || "oldmanobserver",
      repo: env.GITHUB_REPO || "starcitizen-catalog",
      branch: env.GITHUB_DEFAULT_BRANCH || "main",
    },
    me: { login: user.login },
  });
}

export async function onRequestPost({ request, env }) {
  const guard = checkOrigin(request, env);
  if (guard) return guard;

  const { user, response } = await requireAdmin(request, env);
  if (response) return response;
  if (!env.GITHUB_DISPATCH_TOKEN) return error(500, "github_token_missing");

  let body;
  try {
    body = await request.json();
  } catch {
    return error(400, "invalid_json");
  }
  const key = String(body && body.workflow || "");
  const meta = WORKFLOWS[key];
  if (!meta) return error(400, "unknown_workflow");

  const inputs = (body && typeof body.inputs === "object" && body.inputs) || {};

  // Whitelist of inputs we'll forward to keep noise out.
  const allowedInputs = {
    year: (v) => /^\d{4}$/.test(String(v)) ? String(v) : null,
    rsi_token: (v) => typeof v === "string" && v.length < 4000 ? v : null,
    nst cleanInputs = {};
  for (const [k, v] of Object.entries(inputs)) {
    if (allowedInputs[k]) {
      const ok = allowedInputs[k](v);
      if (ok !== null) cleanInputs[k] = ok;
    }
  }

  const url = repoUrl(env, `/actions/workflows/${encodeURIComponent(meta.file)}/dispatches`);
  const branch = env.GITHUB_DEFAULT_BRANCH || "main";
  const r = await fetch(url, {
    method: "POST",
    headers: { ...ghHeaders(env), "Content-Type": "application/json" },
    body: JSON.stringify({ ref: branch, inputs: cleanInputs }),
  });

  if (r.status !== 204) {
    const text = await r.text();
    await audit(env, user.id, "admin_dispatch", { workflow: key, status: r.status, ok: false });
    return error(r.status === 404 ? 404 : 502, "dispatch_failed", { detail: text.slice(0, 400) });
  }

  await audit(env, user.id, "admin_dispatch", { workflow: key, status: 204, ok: true });
  return json({ ok: true, workflow: key, label: meta.label, dispatched_at: new Date().toISOString() });
}
