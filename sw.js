// 离线缓存：页面和城市包优先走网络（更新能及时生效），没网时用缓存；照片和字体优先用缓存。
// 只碰自己 hh- 开头的缓存：同一个网域上还有东京（sanpo-）和富国岛（pq-）的旧 app，不能删到它们的。
var SHELL = 'hh-shell-v1', PHOTOS = 'hh-photos', FONTS = 'hh-fonts', LIB = 'hh-lib', TILES = 'hh-tiles';
var FILES = ['./', 'index.html', 'cities/index.js', 'manifest.webmanifest', 'icon-180.png', 'icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(SHELL).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('hh-') === 0 && [SHELL, PHOTOS, FONTS, LIB, TILES].indexOf(k) < 0; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function timeout(ms) { return new Promise(function (_, rej) { setTimeout(function () { rej(new Error('timeout')); }, ms); }); }
function cacheFirst(name, req) {
  return caches.open(name).then(function (c) {
    return c.match(req, { ignoreVary: true }).then(function (hit) {
      return hit || fetch(req).then(function (res) { if (res.ok || res.type === 'opaque') c.put(req, res.clone()); return res; });
    });
  });
}
self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var u = new URL(req.url);
  if (u.origin === location.origin) {
    // cache: 'no-cache'：每次都先问服务器有没有新版（没变就很快回 304），不用等 GitHub 的 10 分钟缓存过期
    e.respondWith(Promise.race([fetch(req, { cache: 'no-cache' }), timeout(4000)]).then(function (res) {
      if (res.ok) { var copy = res.clone(); caches.open(SHELL).then(function (c) { c.put(req, copy); }); }
      return res;
    }).catch(function () {
      return caches.open(SHELL).then(function (c) {
        return c.match(req, { ignoreSearch: true }).then(function (hit) { return hit || (req.mode === 'navigate' ? c.match('index.html') : undefined) || Response.error(); });
      });
    }));
  } else if (/(^|\.)wikimedia\.org$/.test(u.hostname)) {
    e.respondWith(cacheFirst(PHOTOS, req));
  } else if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') {
    e.respondWith(cacheFirst(FONTS, req));
  } else if (u.hostname === 'cdnjs.cloudflare.com') {
    e.respondWith(cacheFirst(LIB, req));      // 地图用的 Leaflet
  } else if (u.hostname === 'tile.openstreetmap.org') {
    e.respondWith(cacheFirst(TILES, req));    // 看过的地图格子存起来，没信号也能再看
  }
});
