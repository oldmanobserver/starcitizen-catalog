// functions/api/admin/feedback/index.js
// Admin-only: list and filter all feedback submissions.
//
// GET /api/admin/feedback?status=open|closed|all&kind=bug|suggestion|all&q=&page=1&page_size=25

import { requireAdmin } from "../../../lib/admin.js";
import { json, error } from "../../../lib/http.js";

const DEFAULT_PAGE_SIZE = 25;
const MAX_PAGE_SIZE = 100;

export async function onRequestGet({ request, env }) {
  const { response } = await requireAdmin(request, env);
  if (response) return response;

  const url = new URL(request.url);
  const status = String(url.searchParams.get("status") || "open").toLowerCase();
  const kind = String(url.searchParams.get("kind") || "all").toLowerCase();
  const q = (url.searchParams.get("q") || "").trim();
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10) || 1);
  const pageSize = Math.max(
    1,
    Math.min(
      MAX_PAGE_SIZE,
      parseInt(url.searchParams.get("page_size") || String(DEFAULT_PAGE_SIZE), 10) || DEFAULT_PAGE_SIZE
    )
  );

  const where = [];
  const params = [];
  if (status === "open" || status === "closed") {
    where.push("f.status = ?");
    params.push(status);
  }
  if (kind === "bug" || kind === "suggestion") {
    where.push("f.kind = ?");
    params.push(kind);
  }
  if (q) {
    const like = "%" + q.replace(/[\\%_]/g, (c) => "\\" + c) + "%";
    where.push(
      `(f.title LIKE ? ESCAPE '\\' OR f.description LIKE ? ESCAPE '\\' OR u.login LIKE ? ESCAPE '\\' OR u.display_name LIKE ? ESCAPE '\\')`
    );
    params.push(like, like, like, like);
  }
  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

  const countRow = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM feedback f LEFT JOIN users u ON u.id = f.user_id ${whereSql}`
  )
    .bind(...params)
    .first();
  const total = (countRow && countRow.n) || 0;
  const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);
  const offset = (page - 1) * pageSize;

  const listRes = await env.DB.prepare(
    `SELECT f.id, f.kind, f.title, f.status, f.created_at, f.closed_at,
            f.user_id,
            u.login, u.display_name, u.profile_image_url,
            CASE WHEN f.snapshot IS NULL THEN 0 ELSE 1 END AS has_snapshot
       FROM feedback f
       LEFT JOIN users u ON u.id = f.user_id
       ${whereSql}
      ORDER BY f.created_at DESC
      LIMIT ? OFFSET ?`
  )
    .bind(...params, pageSize, offset)
    .all();

  const items = (listRes.results || []).map((r) => ({
    id: r.id,
    kind: r.kind,
    title: r.title,
    status: r.status,
    created_at: r.created_at,
    closed_at: r.closed_at,
    has_snapshot: !!r.has_snapshot,
    user: {
      id: r.user_id,
      login: r.login,
      display_name: r.display_name,
      profile_image_url: r.profile_image_url,
    },
  }));

  return json({
    page,
    page_size: pageSize,
    total,
    total_pages: totalPages,
    status,
    kind,
    q,
    items,
  });
}
