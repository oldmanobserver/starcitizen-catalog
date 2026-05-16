// public/assets/js/theme.js
// Applies the saved theme as early as possible to avoid a flash of unstyled content.

(function () {
  function apply(theme) {
    var html = document.documentElement;
    if (theme === "light" || theme === "dark") {
      html.setAttribute("data-theme", theme);
    } else {
      html.removeAttribute("data-theme"); // fall back to system
    }
  }
  try {
    var saved = localStorage.getItem("scc_theme");
    apply(saved || "dark");
  } catch (e) {
    /* localStorage unavailable — still default to dark */
    apply("dark");
  }

  window.SCCTheme = {
    apply: function (theme) {
      try { localStorage.setItem("scc_theme", theme || "dark"); } catch (e) {}
      apply(theme);
    },
    current: function () {
      try { return localStorage.getItem("scc_theme") || "dark"; } catch (e) { return "dark"; }
    },
  };
})();
