// Evento de instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
      caches.open('v1').then(cache => {
          return cache.addAll([
              '/',
              '/index.html',
              '/css/styles.css',
              '/js/app.js',
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
          // Retorna o recurso do cache, ou faz a requisição de rede caso não esteja no cache
          return response || fetch(event.request);
      })
  );
});
