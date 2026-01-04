document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("[data-copy-json]");
  const ta = document.getElementById("json-example-text");
  if (!btn || !ta) return;

  btn.addEventListener("click", async () => {
    const text = ta.value;

    // Prefer modern Clipboard API
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
    } catch (_) {
      // fall through to execCommand
    }

    // Fallback (Safari / permissions edge cases)
    ta.focus();
    ta.select();
    document.execCommand("copy");
  });
});