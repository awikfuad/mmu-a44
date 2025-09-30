'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9691e746f8cb67316572c29169d1bb31",
"assets/AssetManifest.bin.json": "78abe8dd317dc8d61e5a4c922a0b8c10",
"assets/AssetManifest.json": "e56cd34e301e65ff1d6e75f86bee3f8b",
"assets/assets/11.jpg": "2c71d5feb117e3113e523118583239e6",
"assets/assets/activity.png": "acd894ca222b2963901a97925af24f93",
"assets/assets/attendance.png": "0ffa693ed8d2288d74602ae5f7a4989d",
"assets/assets/bg.png": "dfb7fdf96f114fdb6dcfc9f5dc558af2",
"assets/assets/bg_imda.png": "aeb74bbbc15d515c93fc69bc0712d7b9",
"assets/assets/book.png": "a0f1271bdb7df5285b7221ce5794502a",
"assets/assets/book.svg": "a1898796b9be13836755b1d5507d4bb2",
"assets/assets/brain.svg": "aea244e4eb73d101ab5bb482246e37a0",
"assets/assets/bus.png": "f8ac16f8927359c388dc5c2e2c760615",
"assets/assets/calendar.png": "cf7d5f1c38064c8d06eaec4dfea8736f",
"assets/assets/classroom.png": "80eb4f1d427722aa2dfac901853c70e3",
"assets/assets/dashboard.svg": "2a53180f72a7d462d8674920e4d8ada2",
"assets/assets/downloads.png": "7b1a78def0d9c24315276dec494d41c8",
"assets/assets/exam.png": "387e1a7c165b1826e3dce336f9a0c32c",
"assets/assets/exit.png": "0202c33a05804381350afea71442a1b5",
"assets/assets/fee.png": "26da62ed022e82361bd68d4c4befe3ad",
"assets/assets/home.png": "efb90cbe763e175e8d03a6f24f8cbebd",
"assets/assets/homework.png": "aae137e6645776563d603f35842d33b9",
"assets/assets/icon.png": "ae9123de243bfc843f32be9f322383b4",
"assets/assets/images/Agustus.png": "0612b4a3c29f306df8016c2926d9a9d4",
"assets/assets/images/April.png": "e60ecf32eab25d284614ae438bb97177",
"assets/assets/images/avatar.jpg": "fab8da76d124cb73f4a29621a9e51190",
"assets/assets/images/bag.png": "2d48f62b87518795c2f4c3b4600646e6",
"assets/assets/images/blue_box.png": "8c28d987fe7d87dca0f11c43817338ae",
"assets/assets/images/book.png": "5b18188c95c1c9e1fc677f53b7cdf4f7",
"assets/assets/images/Desember.png": "d87ac679cd2f3d1c6562dd494aa8c0b5",
"assets/assets/images/Februari.png": "b4aee4982498ef54b3ea7c5d9a5ffd02",
"assets/assets/images/fiqih.png": "a6417e0a7c3b114f84f2f6d9f80e43d4",
"assets/assets/images/Januari.png": "76e18dff458025942cbd2563dea64092",
"assets/assets/images/Juli.png": "e40699a82cfceeff60b5b33db1d8d0bb",
"assets/assets/images/Juni.png": "eb23c78fb63e09cb37b55af5bc004521",
"assets/assets/images/kelas.png": "c43a0f8ddd796c35e1066876fe9da054",
"assets/assets/images/ladder.png": "0b4ebfa86ea19414ac1ee192c414594c",
"assets/assets/images/Maret.png": "efa957d1bf735079d573c8e8733cf1cb",
"assets/assets/images/Mei.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/assets/images/motivasi.png": "b78b1c14543e8264eb48c70ad32f4174",
"assets/assets/images/nahwu.png": "f001be79bf5f47e67de0ec2e92d4d68e",
"assets/assets/images/November.png": "4f987f6f3d69adac975df5a9a11a4e6a",
"assets/assets/images/Oktober.png": "c2c2d3bcab5d5fce18c36304c2ab065a",
"assets/assets/images/pink_box.png": "e3a31cd56bbe62d3cfebba34f46573e3",
"assets/assets/images/September.png": "d9621b5a374fffffb7da28104d265bab",
"assets/assets/images/tajwid.jpg": "7848c8db578c882eb3773142cfc90371",
"assets/assets/images/tarekh.jpg": "396da11394ae276a1e27007b6724cbad",
"assets/assets/images/tauhid.png": "21ea6f7284eae7c9adeb47218db2e2be",
"assets/assets/images/user.png": "0c17e828c34db1539535c0a71e6b4490",
"assets/assets/imda.jfif": "000d11f25e3cb65221af9f446399703d",
"assets/assets/imda.png": "fc32282f599a8e1d8d826e004d9d7361",
"assets/assets/leave_apply.png": "004bfe0f1a1d1d93bfcca7309a0a2c02",
"assets/assets/library.png": "96f8c4cc17cd32850fed36bcc28a173b",
"assets/assets/logo.png": "f3d6e5bed2ae2729411f8147343faf73",
"assets/assets/meet.png": "2e776d99c875a69cad1e2e14552551a4",
"assets/assets/message.png": "12a60a8bba417081d16f4857b00b55f9",
"assets/assets/motivasi.png": "b78b1c14543e8264eb48c70ad32f4174",
"assets/assets/nilai.png": "5f368f38e4e55b1bab86897f172fdca0",
"assets/assets/notification.png": "777cba09ab033869dc550bce478c865c",
"assets/assets/ornament.svg": "78c0f87a07af379ec91ecdc311179e30",
"assets/assets/pdf.png": "97aec1b52967cd1dcce8ff2d8de792d7",
"assets/assets/petik.svg": "de4d001c07909b993eea5e9bc99970f0",
"assets/assets/profile.png": "4e286e07715d2e8485e14c355fe830ab",
"assets/assets/qr.png": "1dc29cc24973ce88e0cef3080d21faa3",
"assets/assets/school%2520spleash.flr": "5a3fde8c7a05a7a1e767f4a45f2e26c9",
"assets/assets/school_building.png": "b515c24428f980e55c9835ac6a506ddb",
"assets/assets/search.svg": "b8def617ad41e3305587317c2756b9ba",
"assets/assets/setting.gif": "3d94833277eb0c20a5f61f7fd3ac8751",
"assets/assets/title.svg": "ef9b91e3d44550527953d03b1dfbf3c6",
"assets/assets/whatsapp.png": "ec217261407fcfa1a2a7f36fef44412b",
"assets/assets/youtube.png": "b6e3374a276959f579b5bc208047c64f",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/fonts/MaterialIcons-Regular.otf": "9e203a5e14a4ae377ba7bef58414722c",
"assets/NOTICES": "636e4c7186092a8aec0ad8074e42d8ce",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0a37fc8d85e28959f708f020d2e3760b",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "440da663f17184f21f007a3a2bf60f69",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/pdfrx/assets/pdfium.wasm": "d4f7ac5f1cb87453b04726dff0a88941",
"assets/packages/pdfrx/assets/pdfium_client.js": "9ef7c314155dc36c966ef89df070dfd2",
"assets/packages/pdfrx/assets/pdfium_worker.js": "18a5a38438b4ce448c164399c8024fcd",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "247e3f0520f2d2934012083365ba0da7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "20956d9a4063a38c778ff55406ac4b9b",
"icons/Icon-192.png": "499fd5d9df9e8301aea1df3b5fce93b0",
"icons/Icon-512.png": "d936851a7eca86b5848917a403853646",
"icons/Icon-maskable-192.png": "499fd5d9df9e8301aea1df3b5fce93b0",
"icons/Icon-maskable-512.png": "d936851a7eca86b5848917a403853646",
"index.html": "0918a949c771cc6942e78bc1fd1d06dc",
"/": "0918a949c771cc6942e78bc1fd1d06dc",
"main.dart.js": "b9f82f7e8c12d274c56b4cfde9f6a21f",
"manifest.json": "bf309019dcb08c92e395ce1f7f8b3440",
"version.json": "13cdb51db9addc332bfc17b247c2840d"};
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
