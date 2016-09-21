//Service Worker File
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/main.css',
  '/js/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache for saving files');
        return cache.addAll(urlsToCache);
      })
  );
});
