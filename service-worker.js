self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/jonatasfernandessilva7/index.html',
                '/jonatasfernandessilva7/styles.css', // Exemplo de outros recursos
                '/jonatasfernandessilva7/script.js'  // Exemplo de outros recursos
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
