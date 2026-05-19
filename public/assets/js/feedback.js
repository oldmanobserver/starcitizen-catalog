// public/assets/js/feedback.js
// Feedback modal: report a bug or send a suggestion, optionally including
// the current search (the most recent user message + assistant response and
// its citations) so an admin can reproduce the issue.

import { apiJson, escapeHtml } from "./common.js";

/**
 * Open the feedback modal.
 *
 * @param {object} ctx
 * @param {() => object|null} ctx.getSnapshot
 *   Returns the snapshot object to attach when "include current search" is
 *   checked, or null if there's no current search to include. Shape:
 *   { user_message, assistant_message, citations, provider, model,
 *     conversation_id, message_id, conversation_title }
 */
export function openFeedbackModal(ctx) {
  const snapshot = (ctx && typeof ctx.getSnapshot === "function")
    ? ctx.getSnapshot()
    : null;
  const hasSnapshot = !!snapshot;

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.innerHTML = `
    <div class="modal feedback-modal" role="dialog" aria-modal="true" aria-labelledby="fb-title">
      <h3 id="fb-title">Send feedback</h3>
      <p class="muted small" style="margin-top:0">
        Spotted a wrong answer, missing source, or have an idea? Tell us about it.
      </p>

      <div class="field">
        <label for="fb-kind">Type</label>
        <select id="fb-kind">
          <option value="bug">Report a bug</option>
          <option value="suggestion">Suggestion</option>
        </select>
      </div>

      <div class="field">
        <label for="fb-title-input">Title</label>
        <input type="text" id="fb-title-input" maxlength="200"
               placeholder="Short summary (e.g. 'Wrong ship name in answer')"
               autocomplete="off" spellcheck="true">
      </div>

      <div class="field">
        <label for="fb-desc">Description</label>
        <textarea id="fb-desc" rows="5" maxlength="8000"
                  placeholder="What did you expect? What did you see? Steps to reproduce if applicable."></textarea>
      </div>

      <div class="field" style="margin-bottom: 8px">
        <label class="checkbox-row" style="font-weight: 600; font-size: 13px">
          <input type="checkbox" id="fb-include" ${hasSnapshot ? "checked" : "disabled"}>
          <span>Include current search</span>
        </label>
        <span class="hint">
          ${hasSnapshot
            ? "Attaches the most recent question, the assistant's answer, and the sources it cited so an admin can see what you saw."
            : "No recent question/answer to attach. Ask something first to enable this."}
        </span>
      </div>

      <div class="hint" id="fb-error" style="color: var(--danger); display:none"></div>
      <div class="hint" id="fb-success" style="color: var(--accent); display:none"></div>

      <div class="actions">
        <button class="cancel" type="button">Cancel</button>
        <button class="confirm primary" type="button">Send feedback</button>
      </div>
    </div>
  `;
  document.body.appendChild(backdrop);

  const kindEl = backdrop.querySelector("#fb-kind");
  const titleEl = backdrop.querySelector("#fb-title-input");
  const descEl = backdrop.querySelector("#fb-desc");
  const includeEl = backdrop.querySelector("#fb-include");
  const errEl = backdrop.querySelector("#fb-error");
  const okEl = backdrop.querySelector("#fb-success");
  const confirmBtn = backdrop.querySelector(".confirm");
  const cancelBtn = backdrop.querySelector(".cancel");

  function close() { backdrop.remove(); }
  cancelBtn.addEventListener("click", close);
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) close();
  });

  confirmBtn.addEventListener("click", async () => {
    errEl.style.display = "none";
    errEl.textContent = "";
    okEl.style.display = "none";

    const title = (titleEl.value || "").trim();
    const description = (descEl.value || "").trim();
    if (!title) {
      errEl.textContent = "Please give your feedback a short title.";
      errEl.style.display = "";
      titleEl.focus();
      return;
    }
    if (!description) {
      errEl.textContent = "Please describe the issue or suggestion.";
      errEl.style.display = "";
      descEl.focus();
      return;
    }

    const includeSearch = hasSnapshot && includeEl.checked;
    const payload = {
      kind: kindEl.value,
      title,
      description,
      include_search: includeSearch,
    };
    if (includeSearch && snapshot) {
      if (snapshot.conversation_id) payload.conversation_id = snapshot.conversation_id;
      if (snapshot.message_id) payload.message_id = snapshot.message_id;
      payload.snapshot = {
        user_message: snapshot.user_message || "",
        assistant_message: snapshot.assistant_message || "",
        citations: snapshot.citations || [],
        provider: snapshot.provider || null,
        model: snapshot.model || null,
        conversation_title: snapshot.conversation_title || null,
      };
    }

    confirmBtn.disabled = true;
    cancelBtn.disabled = true;
    confirmBtn.textContent = "Sending…";
    try {
      await apiJson("/api/feedback", { method: "POST", body: payload });
      okEl.textContent = "Thanks! Your feedback has been recorded.";
      okEl.style.display = "";
      confirmBtn.textContent = "Sent ✓";
      setTimeout(close, 1100);
    } catch (e) {
      confirmBtn.disabled = false;
      cancelBtn.disabled = false;
      confirmBtn.textContent = "Send feedback";
      errEl.textContent = "Failed to send: " + escapeHtml(e.message || String(e));
      errEl.style.display = "";
    }
  });

  setTimeout(() => titleEl.focus(), 0);
}
