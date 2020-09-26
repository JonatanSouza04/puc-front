const cacheName = 'v1-Front-PUC';

const resourcesToPrecache = [
    '/',
    './bundle.js',
    './index.html',
    '/img/favicon.ico',
    '/css/style.css'
]

self.addEventListener('install',event => {
    
    event.waitUtil(
        caches.open(cacheName).then(cache => cache.addAll(resourcesToPrecache))
    )
});

self.addEventListener('fetch', event => {

    event.respondWith(
        caches.match(event.request).then(cacheResponde => cacheResponde ||  fetch(event.request))
    )
})

