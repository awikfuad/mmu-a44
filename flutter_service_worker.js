'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3edd681f5df8f38d829561f14dd3ef75",
"assets/AssetManifest.bin.json": "785880a5ba1c4607e8e656eba17a4666",
"assets/AssetManifest.json": "86fcf2246194c102361424c2727f7d4c",
"assets/assets/11.jpg": "2c71d5feb117e3113e523118583239e6",
"assets/assets/book.png": "5b18188c95c1c9e1fc677f53b7cdf4f7",
"assets/assets/book.svg": "77a2c8074901c7de3b23edc313c62632",
"assets/assets/brain.svg": "a92d3693c29d65845dc494e6d6cd4b3a",
"assets/assets/dashboard.svg": "ba8a73e091270ce31820e86dd7835b9d",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/icon.png": "47a7f5084dcf2d0b822600bc7ef7f931",
"assets/assets/images/avatar.jpg": "fab8da76d124cb73f4a29621a9e51190",
"assets/assets/images/bag.png": "2d48f62b87518795c2f4c3b4600646e6",
"assets/assets/images/blue_box.png": "8c28d987fe7d87dca0f11c43817338ae",
"assets/assets/images/book.png": "5b18188c95c1c9e1fc677f53b7cdf4f7",
"assets/assets/images/box_colors/blue.png": "80d12a84a47b2d6040eba7130b405e7b",
"assets/assets/images/box_colors/green.png": "86bbbd106abcee4fde5cc1bcf4fe3358",
"assets/assets/images/box_colors/yellow.png": "179f91284b3b07adbc7484fc60b9ec62",
"assets/assets/images/category/bathroom.png": "e6612e9d85b208ba7d778f9097c2dd31",
"assets/assets/images/category/icebox.png": "5d192004fe91c16ffb61430c5a3fdbb4",
"assets/assets/images/category/kitchen.png": "3c4b048b1cb05be5158f40ed287b990f",
"assets/assets/images/category/sofa.png": "01dc25bcca508988b2af4105c91070d2",
"assets/assets/images/gradient.png": "e5a4c538b6b3369d1fb25c4e844c63e5",
"assets/assets/images/kelas.png": "c43a0f8ddd796c35e1066876fe9da054",
"assets/assets/images/ladder.png": "0b4ebfa86ea19414ac1ee192c414594c",
"assets/assets/images/motivasi.png": "b78b1c14543e8264eb48c70ad32f4174",
"assets/assets/images/pink_box.png": "e3a31cd56bbe62d3cfebba34f46573e3",
"assets/assets/images/user.png": "0c17e828c34db1539535c0a71e6b4490",
"assets/assets/images/weather.png": "173a8b8d98ede317933009f2167d5997",
"assets/assets/motivasi.png": "b78b1c14543e8264eb48c70ad32f4174",
"assets/assets/ornament.svg": "d190ca922699bc50a8400fce504cbfc7",
"assets/assets/petik.svg": "2a5b5ee80b474d3baa16c4a027484d7b",
"assets/assets/search.svg": "09b74fa353afab2bb57ffe873cb9880c",
"assets/assets/svg/add.svg": "21b2dc8f8f8404c09c319f24a1057001",
"assets/assets/svg/back_arrow.svg": "4c3bc920953c449658eae4cf635bc697",
"assets/assets/svg/bell.svg": "e4f9c840fe1d2be54cf13a2be38338cf",
"assets/assets/svg/home.svg": "10ad3bc3ec91043b7128c70ff5e4daea",
"assets/assets/svg/right_arrow.svg": "ef0a8c6f71dc437547496f7abf4b8d0d",
"assets/assets/svg/search.svg": "47af4f722cf066cd086e5a58241d7c76",
"assets/assets/svg/user.svg": "15408a9494c7a5b18945cdf731c82799",
"assets/assets/title.svg": "690c8caddf082faddaf219f98f5756c9",
"assets/FontManifest.json": "211b4461c7918a49b6b15900e753308a",
"assets/fonts/MaterialIcons-Regular.otf": "f15ae4e2c03f16b2adb4f4c72d9aa939",
"assets/NOTICES": "6105d490f8be9d0178c687018a125e3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8151235aedb46e09e3cf763d4c13ceb1",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "74bcaefcc2b988896df283fa8bf0d3c9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "75c76f80540b4b81e3c8b8d29a353cae",
"/": "75c76f80540b4b81e3c8b8d29a353cae",
"main.dart.js": "9483a358047795e58189be631a364fa9",
"manifest.json": "cc8427938028a8e89f58173e7caa4c84",
"version.json": "17c10e3945d516793634c4e19819b517"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
