const CACHE_NAME = 'duoduel-v15';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './onboarding.html',
  './levels.html',
  './toss.html',
  './table.html',
  './results.html',
  './assets/css/style.css',
  './assets/css/tailwind.css',
  './assets/js/main.js',
  './assets/json/cards.json',
  './assets/json/content.json',
  './assets/img/logo.png',
  './assets/img/Acquaintance.png',
  './assets/img/deep talk.png',
  './assets/img/safespark.png',
  './assets/img/intimacy.png',
  './assets/img/foreplay.png',
  './android-chrome-192x192.png',
  './android-chrome-512x512.png',
  './apple-touch-icon.png',
  './favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
