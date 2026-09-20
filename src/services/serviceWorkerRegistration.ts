/**
 * Service Worker Registration and Offline Caching Utilities
 */

export function registerServiceWorker(): void {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((registration) => {
        // Listen for updates
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                // New content is available; post skip waiting to update immediately
                installingWorker.postMessage({ type: "SKIP_WAITING" });
              }
            }
          };
        };
      })
      .catch((err) => {
        console.warn("Service Worker registration notice:", err);
      });
  });
}

/**
 * Sends a message to the active service worker to cache a narration audio payload
 */
export function cacheNarrationInServiceWorker(id: string, audioBase64: string): void {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  const controller = navigator.serviceWorker.controller;
  if (controller) {
    controller.postMessage({
      type: "CACHE_NARRATION_AUDIO",
      id,
      audioBase64,
    });
  }
}
