// Evento de instalação do Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/imagens/icon-192x192.png',
                '/imagens/icon-512x512.png'
            ]);
        })
    );
});

// Evento de busca (fetch) do Service Worker
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
