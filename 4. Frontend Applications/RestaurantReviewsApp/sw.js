var staticCacheName = 'Restaurant-cache-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'restaurant.html',
        'js/main.js',
        'css/styles.css',
        'img/1.jpg'
      ]).then(function(out) {
      	console.log(out);
      }).catch(function(err) {
      	console.log(err);
      })	
    })
  );	
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith('Restaurant-') &&
                 cacheName != staticCacheName;
          }).map(function(cacheName) {
            return cache.delete(cacheName);
         })
       );
    })
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  ) ;
});