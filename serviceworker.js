self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css'
            ]).catch(function(error) {
                console.error('Failed to cache resources:', error);
            });
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        }).catch(function(error) {
            console.error('Failed to fetch resource:', error);
        })
    );
});

console.log('Service Worker Installing:', registration.installing);
console.log('Service Worker Waiting:', registration.waiting);
console.log('Service Worker Active:', registration.active);
