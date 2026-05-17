// functions/api/admin/users.js
//
// Admin-only: list registered users with simple search + pagination.
//
// GET /api/admin/users?q=&page=1&page_size=25
//
// Returns:
//   {
//     page, page_size, total, total_pages,
//     users: [
//       { id, login, display_name, email, profile_image_url, is_admin,
//         created_at, last_login_at, conversation_count, message_count }
//     ]
//   }

import { requireAdmin } from "../../lib/admin.js";
import { json, error } from "../../lib/http.js";

const DEFAULT_PAGE_SIZE = 25;
const MAX_PAGE_SIZE = 100;

export async function onRequestGet({ request, env }) {
  const { response } = await requireAdmin(request, env);
  if (response) return response;

  const url = new URL(request.url);
  const q = (url.searchParams.get("q") || "").trim();
  const page = Math.max(1, parseInt(url.searchParams.get("page") || "1", 10) || 1);
  const pageSize = Math.max(
    1,
    Math.min(
      MAX_PAGE_SIZE,
      parseInt(url.searchParams.get("page_size") || String(DEFAULT_PAGE_SIZE), 10) || DEFAULT_PAGE_SIZE
    )
  );

  // Build WHERE clause. We match across login / display_name / email
  // case-insensitively (SQLite's LIKE is case-insensitive for ASCII by default).
  const whereClauses = [];
  const params = [];
  if (q) {
    const like = "%" + q.replace(/[\\%_]/g, (c) => "\\" + c) + "%";
    whereClauses.push(
      `(u.login LIKE ? ESCAPE '\\' OR u.display_name LIKE ? ESCAPE '\\' OR u.email LIKE ? ESCAPE '\\')`
    );
    params.push(like, like, like);
  }
  const whereSql = whereClauses.length ? `WHERE ${whereClauses.join(" AND ")}` : "";

  // Count first so we can return total_pages.
  const countRow = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM users u ${whereSql}`
  )
    .bind(...params)
    .first();
  const total = (countRow && countRow.n) || 0;
  const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize);
  const offset = (page - 1) * pageSize;

  // Pull the page. Correlated subqueries return per-user conversation and
  // message counts without forcing a GROUP BY.
  const listRes = await env.DB.prepare(
    `SELECT u.id,
            u.login,
            u.display_name,
            u.email,
            u.profile_image_url,
            u.is_admin,
            u.created_at,
            u.last_login_at,
            (SELECT COUNT(*) FROM conversations c WHERE c.user_id = u.id) AS conversation_count,
            (SELECT COUNT(*) FROM messages m
              JOIN conversations c2 ON c2.id = m.conversation_id
             WHERE c2.user_id = u.id) AS message_count
       FROM users u
       ${whereSql}
      ORDER BY u.last_login_at DESC, u.created_at DESC
      LIMIT ? OFFSET ?`
  )
    .bind(...params, pageSize, offset)
    .all();

  const users = (listRes.results || []).map((r) => ({
    id: r.id,
    login: r.login,
    display_name: r.display_name,
    email: r.email,
    profile_image_url: r.profile_image_url,
    is_admin: !!r.is_admin,
    created_at: r.created_at,
    last_login_at: r.last_login_at,
    conversation_count: r.conversation_count || 0,
    message_count: r.message_count || 0,
  }));

  return json({
    page,
    page_size: pageSize,
    total,
    total_pages: totalPages,
    q,
    users,
  });
}
