(() => {
  // Cloud Run base URL (no trailing slash)
  const CHATKIT_BACKEND = "https://YOUR-CLOUD-RUN-URL";

  function getDeviceId() {
    const key = "hwb2_chatkit_device_id";
    let id = localStorage.getItem(key);
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
      localStorage.setItem(key, id);
    }
    return id;
  }

  async function postJson(url, body) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body ?? {}),
    });
    if (!res.ok) throw new Error(`ChatKit backend ${res.status}: ${await res.text()}`);
    return res.json();
  }

  async function getClientSecret(existingSecret) {
    const deviceId = getDeviceId();

    // Simplest contract: mint a new session when needed
    if (!existingSecret) {
      const { client_secret } = await postJson(`${CHATKIT_BACKEND}/api/chatkit/start`, { deviceId });
      return client_secret;
    }

    const { client_secret } = await postJson(`${CHATKIT_BACKEND}/api/chatkit/refresh`, {
      deviceId,
      currentClientSecret: existingSecret,
    });
    return client_secret;
  }

  document.addEventListener("DOMContentLoaded", async () => {
    // Ensure the custom element is registered before calling setOptions
    if (window.customElements?.whenDefined) {
      await customElements.whenDefined("openai-chatkit");
    }

    const el = document.getElementById("hwb2-chat");
    if (!el || typeof el.setOptions !== "function") return;

    el.setOptions({
      api: { getClientSecret },
    });
  });
})();