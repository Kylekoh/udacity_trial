self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('Restaurant-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  ) ;
});