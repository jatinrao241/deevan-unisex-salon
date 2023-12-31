// serviceWorker.js

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-app-name').then((cache) => {
      return cache.addAll([
        '/', // Add the paths you want to cache
        '/index.html',
        '/manifest.json',
        // Add other static assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
