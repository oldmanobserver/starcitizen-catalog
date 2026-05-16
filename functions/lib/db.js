// functions/lib/db.js
// Thin D1 helpers. Keep query strings here so endpoints stay focused.

const now = () => Math.floor(Date.now() / 1000);

export async function upsertUser(env, profile) {
  const t = now();
  await env.DB.prepare(
    `INSERT INTO users (id, login, display_name, email, profile_image_url, created_at, last_login_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET
       login = excluded.login,
       display_name = excluded.display_name,
       email = excluded.email,
       profile_image_url = excluded.profile_image_url,
       last_login_at = excluded.last_login_at`
  )
    .bind(
      profile.id,
      profile.login,
      profile.display_name,
      profile.email,
      profile.profile_image_url,
      t,
      t
    )
    .run();
}

export async function getUser(env, userId) {
  return env.DB.prepare(`SELECT * FROM users WHERE id = ?`).bind(userId).first();
}

export async function updateUserSettings(env, userId, patch) {
  const fields = [];
  const values = [];
  for (const k of ["theme", "default_provider", "default_model"]) {
    if (patch[k] !== undefined) {
      fields.push(`${k} = ?`);
      values.push(patch[k]);
    }
  }
  if (!fields.length) return;
  values.push(userId);
  await env.DB.prepare(`UPDATE users SET ${fields.join(", ")} WHERE id = ?`)
    .bind(...values)
    .run();
}

export async function listConversations(env, userId) {
  const { results } = await env.DB.prepare(
    `SELECT id, title, provider, model, pinned, created_at, updated_at
     FROM conversations WHERE user_id = ?
     ORDER BY pinned DESC, updated_at DESC
     LIMIT 200`
  )
    .bind(userId)
    .all();
  return results || [];
}

// Search a user's conversations by title OR message content. Returns up to
// `limit` rows, ordered by recency, each with an optional `snippet` showing
// the matched message text (null when only the title matched).
export async function searchConversations(env, userId, q, limit = 50) {
  const term = String(q || "").trim();
  if (!term) return [];
  const like = "%" + term.replace(/[\\%_]/g, (c) => "\\" + c) + "%";
  const lim = Math.max(1, Math.min(200, limit | 0 || 50));
  // Two queries unioned client-side: title matches, then message-content matches.
  // We surface a snippet around the first occurrence for content matches.
  const { results } = await env.DB.prepare(
    `SELECT c.id           AS id,
            c.title        AS title,
            c.provider     AS provider,
            c.model        AS model,
            c.pinned       AS pinned,
            c.created_at   AS created_at,
            c.updated_at   AS updated_at,
            CASE WHEN c.title LIKE ?1 ESCAPE '\\' THEN 1 ELSE 0 END AS title_match,
            (SELECT m.content
               FROM messages m
              WHERE m.conversation_id = c.id
                AND m.content LIKE ?1 ESCAPE '\\'
              ORDER BY m.created_at ASC
              LIMIT 1) AS match_content
       FROM conversations c
      WHERE c.user_id = ?2
        AND (c.title LIKE ?1 ESCAPE '\\'
             OR EXISTS (SELECT 1 FROM messages m
                          WHERE m.conversation_id = c.id
                            AND m.content LIKE ?1 ESCAPE '\\'))
      ORDER BY c.pinned DESC, c.updated_at DESC
      LIMIT ?3`
  )
    .bind(like, userId, lim)
    .all();
  const rows = results || [];
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    provider: r.provider,
    model: r.model,
    pinned: r.pinned,
    created_at: r.created_at,
    updated_at: r.updated_at,
    title_match: !!r.title_match,
    snippet: r.match_content ? makeSnippet(r.match_content, term) : null,
  }));
}

function makeSnippet(text, term, radius = 60) {
  const s = String(text || "");
  const i = s.toLowerCase().indexOf(term.toLowerCase());
  if (i < 0) return s.slice(0, 140);
  const start = Math.max(0, i - radius);
  const end = Math.min(s.length, i + term.length + radius);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < s.length ? "…" : "";
  return prefix + s.slice(start, end).replace(/\s+/g, " ").trim() + suffix;
}

export async function getConversation(env, userId, id) {
  return env.DB.prepare(
    `SELECT * FROM conversations WHERE id = ? AND user_id = ?`
  )
    .bind(id, userId)
    .first();
}

export async function createConversation(env, userId, id, title) {
  const t = now();
  await env.DB.prepare(
    `INSERT INTO conversations (id, user_id, title, created_at, updated_at)
     VALUES (?, ?, ?, ?, ?)`
  )
    .bind(id, userId, title || "New conversation", t, t)
    .run();
  return { id, user_id: userId, title: title || "New conversation", pinned: 0, created_at: t, updated_at: t };
}

export async function updateConversation(env, userId, id, patch) {
  const fields = [];
  const values = [];
  for (const k of ["title", "pinned", "provider", "model"]) {
    if (patch[k] !== undefined) {
      fields.push(`${k} = ?`);
      values.push(patch[k]);
    }
  }
  fields.push("updated_at = ?");
  values.push(now());
  values.push(id, userId);
  const res = await env.DB.prepare(
    `UPDATE conversations SET ${fields.join(", ")} WHERE id = ? AND user_id = ?`
  )
    .bind(...values)
    .run();
  return res.meta && res.meta.changes ? res.meta.changes : 0;
}

export async function deleteConversation(env, userId, id) {
  const res = await env.DB.prepare(
    `DELETE FROM conversations WHERE id = ? AND user_id = ?`
  )
    .bind(id, userId)
    .run();
  return res.meta && res.meta.changes ? res.meta.changes : 0;
}

export async function listMessages(env, conversationId) {
  const { results } = await env.DB.prepare(
    `SELECT id, role, content, citations, provider, model, tokens_in, tokens_out, created_at
     FROM messages WHERE conversation_id = ?
     ORDER BY created_at ASC, id ASC`
  )
    .bind(conversationId)
    .all();
  return (results || []).map((r) => ({
    ...r,
    citations: r.citations ? safeJson(r.citations) : null,
  }));
}

export async function insertMessage(env, msg) {
  await env.DB.prepare(
    `INSERT INTO messages (id, conversation_id, role, content, citations, provider, model, tokens_in, tokens_out, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(
      msg.id,
      msg.conversation_id,
      msg.role,
      msg.content,
      msg.citations ? JSON.stringify(msg.citations) : null,
      msg.provider || null,
      msg.model || null,
      msg.tokens_in || null,
      msg.tokens_out || null,
      msg.created_at || now()
    )
    .run();
}

export async function audit(env, userId, action, meta) {
  try {
    await env.DB.prepare(
      `INSERT INTO audit_log (user_id, action, meta, created_at) VALUES (?, ?, ?, ?)`
    )
      .bind(userId || null, action, meta ? JSON.stringify(meta) : null, now())
      .run();
  } catch {
    // never let audit failures break a request
  }
}

function safeJson(s) {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
