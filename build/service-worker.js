const CACHE_NAME = "react-pwa-cache-v1";
const urlsToCache = [
  "/", // Cache the root URL
  "/index.html", // Cache the main HTML file
  "/manifest.json", // Cache the manifest file
  "/favicon.ico", // Cache the favicon
  "/static/js/bundle.js", // Cache the bundle.js file
  "/static/js/0.chunk.js", // Cache the chunks
  "/static/js/main.chunk.js", // Cache the main chunk
  "/static/css/main.css", // Cache the CSS file
];

// Install the service worker and cache necessary files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return Promise.all(
        urlsToCache.map((url) =>
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                console.error(`Failed to cache ${url}:`, response.statusText);
              }
              return cache.put(url, response);
            })
            .catch((error) => {
              console.error(`Failed to fetch ${url}:`, error);
            })
        )
      );
    })
  );
});

// Fetch requests and serve from cache (fallback to network if unavailable)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached response if found, otherwise fetch from the network
      return response || fetch(event.request);
    })
  );
});

// Activate the service worker and remove outdated caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
