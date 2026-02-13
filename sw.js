const cacheName = 'nga-v1';

// Lis tout fichye ki enpòtan pou aplikasyon an ka mache san entènèt
const assets = [
  '/',
  '/index.html',
  '/pèman.html',
  '/bibliyotek.html',
  '/art_detail.html',
  '/tech_detail.html',
  '/clubnga.html',
  '/manifest.json',
  '/logo1.png',           // Logo ou te mande a
  '/icon-192.png',        // Icône 192px pou Android
  '/icon-512.png',        // Icône 512px pou Splash screen
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// Etap enstalasyon: sere fichye yo nan kach (cache) telefòn nan
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Service Worker: Kach ap prepare...');
      return cache.addAll(assets);
    })
  );
});

// Etap aktivasyon: netwaye vye kach si gen yon nouvo vèsyon
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
});

// Rekipere fichye yo: si pa gen entènèt, pran yo nan kach la
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
