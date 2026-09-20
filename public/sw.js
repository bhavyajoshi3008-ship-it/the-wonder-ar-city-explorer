// CityLens Landmark AR Explorer - Progressive Web App Service Worker
const CACHE_SHELL = "citylens-shell-v1";
const CACHE_API = "citylens-api-v1";
const CACHE_MEDIA = "citylens-media-v1";

const STATIC_PRECACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.json",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
];

// Install Event: Precache Core App Shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_SHELL).then((cache) => {
      return cache.addAll(STATIC_PRECACHE_URLS).catch((err) => {
        console.warn("Some precache assets failed to load (continuing):", err);
      });
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate Event: Clean up stale caches from previous versions
self.addEventListener("activate", (event) => {
  const currentCaches = [CACHE_SHELL, CACHE_API, CACHE_MEDIA];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Intelligent offline caching strategy
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests (except when caching POST API payloads via explicit messaging)
  if (request.method !== "GET") {
    return;
  }

  // Skip browser extensions and dev-server websocket traffic
  if (url.protocol.startsWith("chrome-extension") || url.pathname.includes("@vite") || url.pathname.includes("vite-hmr")) {
    return;
  }

  // 1. Audio and Media Cache (/api/audio-cache/* or audio files)
  if (url.pathname.includes("/audio-cache/") || request.destination === "audio") {
    event.respondWith(
      caches.open(CACHE_MEDIA).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }
        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          // If offline and not in media cache, check if default silent or empty audio fallback is needed
          return new Response("", { status: 204, statusText: "Offline Audio Not Cached" });
        }
      })
    );
    return;
  }

  // 2. Google Fonts & CDN styles (Leaflet, fonts.googleapis.com)
  if (
    url.hostname.includes("fonts.googleapis.com") ||
    url.hostname.includes("fonts.gstatic.com") ||
    url.hostname.includes("unpkg.com")
  ) {
    event.respondWith(
      caches.open(CACHE_SHELL).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) return cachedResponse;

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.ok) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          return cachedResponse || new Response("", { status: 503 });
        }
      })
    );
    return;
  }

  // 3. App Shell and Static Assets (JS, CSS, HTML, SVGs, PNGs)
  if (
    request.mode === "navigate" ||
    request.destination === "document" ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|webp|woff2?|ico|json)$/)
  ) {
    event.respondWith(
      caches.open(CACHE_SHELL).then(async (cache) => {
        try {
          // Try network first for up-to-date scripts
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (fetchErr) {
          // If network failed (offline), serve from cache
          const cachedResponse = await cache.match(request);
          if (cachedResponse) {
            return cachedResponse;
          }

          // Fallback for navigation to root app shell
          if (request.mode === "navigate") {
            const fallbackIndex = await cache.match("/index.html") || await cache.match("/");
            if (fallbackIndex) return fallbackIndex;
          }

          throw fetchErr;
        }
      })
    );
    return;
  }

  // Standard fetch for all other requests
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request).then((res) => {
        return res || new Response("Offline", { status: 503, statusText: "Offline" });
      });
    })
  );
});

// Message Listener for explicit caching commands and skip waiting
self.addEventListener("message", (event) => {
  if (!event.data) return;

  if (event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data.type === "CACHE_NARRATION_AUDIO") {
    const { id, audioBase64 } = event.data;
    if (id && audioBase64) {
      caches.open(CACHE_MEDIA).then((cache) => {
        const cacheUrl = `/api/audio-cache/${encodeURIComponent(id)}`;
        const response = new Response(audioBase64, {
          headers: {
            "Content-Type": "text/plain",
            "X-Cached-At": new Date().toISOString(),
          },
        });
        cache.put(cacheUrl, response);
      });
    }
  }
});
