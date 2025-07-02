'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7d8631decac2b5ef065f8dc15839e9c1",
"version.json": "d25ac67ae17ea39c1b164104143110b4",
"index.html": "048d907f9aa7955526f9589a3beec3b4",
"/": "048d907f9aa7955526f9589a3beec3b4",
"main.dart.js": "0dc5e22cb78fa2161116d7215b0df70d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/favicon.ico": "e7eb848f00bb4b9635dc9c7975982235",
"icons/apple-touch-icon.png": "280f354de5b15963f6b286c5c13a403f",
"icons/icon-192-maskable.png": "7cbf55e5206c6f1c4c007017ecb0687e",
"icons/icon-512-maskable.png": "2897c817ef6b0db9cc184a96f99b7435",
"manifest.json": "396aef452e4d25ed457d2aeaaf5dcd85",
".git/ORIG_HEAD": "2b62d1ca8c1aa211ccabd835864b421d",
".git/config": "593abe2f119b9082aa70bd95760570f3",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/3b/2615133e2f2a52ad84ef98700a51dae066898c": "594e435dec2c1fac912a94c9e2cb8af3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/6a/145d2ad7932f0e441ea15a7f95c54f5213de1d": "c7629b8338d74fed23e09c969fb5eb67",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/688cd0f4ba53d06736482b6285e74d6f48b425": "01725548d9a9a09b165837dfa1e31a52",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/60/832b038fe27b764dde3b557ac7ce03f70915a9": "03eda3138be9663a83cb6104d6a08efb",
".git/objects/33/97f2b0d3bce9de0e3d2d72d6726a1d764d8ad6": "a9c64364bad87a1149fa207b50b328a0",
".git/objects/33/42fc09c6d584e14f381fc90901db00aa95f6f4": "780fe65d93c19f5721ee8fd6763e59e7",
".git/objects/33/797cec7c3f0737df73553a875cf65b77ddd7b8": "8e5c6f9eeaff8f2358c26d9ae3652a09",
".git/objects/9d/ff0262606630a718f6df90f830856bdb8bdf6d": "8352bd3d54a516ceb80b8e808e64be00",
".git/objects/d9/16844dd827c70198c26a0f84079cf3a6111c2a": "4ab091163fc9b600b1e01fe3844a3201",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/3140dc307368e2e08333cf5f03ef4b05039a2e": "f7bfb41c447cedcd79deee53e705f5b2",
".git/objects/b4/1150597d2dbdbd26438ca5eb4bb84bc2350064": "4444aa2061d454cb925f86ef9374b4f2",
".git/objects/a2/002498c7685173cf5077ad8fa0ee32338f4b23": "29aa2c751453d4b1709a1cf7d0428fab",
".git/objects/d8/2cff10eae2073a92d1f09bf9a4a68f77ddc5ac": "85e3ba457d50be47541e029b361609c1",
".git/objects/ab/c7adaefc5d87c1d43704f4878a52daed2820b7": "56477cd0e3043c8364edfb8312a7ee4f",
".git/objects/c0/28cc1d6be885725197c6b1252e085eddd2f684": "6a12cb672fb2675d8a0fee8545f7dd72",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/482db14b3ae6ceb58033462687075e30beb6d2": "45c82f68157910cd6296aa59ce853efc",
".git/objects/e4/a19877febcede9a6212d3bf3877afb1166cbbe": "655b492579186c667d4160bb0805d9a3",
".git/objects/fe/3364b073ca74b0492019704706ac3df810ef66": "cdcc50eb1cf30ab5ed835d8550fa5125",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/298eb143d749d568d468142661cb267413dbe7": "0b45d1f673839c6c1e9ac6b48b1b2f60",
".git/objects/4c/01d380fc12066ef5735ea031dfb7d04e4b2882": "94fc24ecd915275e8fe8c219ce700179",
".git/objects/4c/dfa614d11c689e46a4358bc84d22407746dfd4": "d5d44edbadbe21052ee58027ec791322",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/4d/b4c902cd27e9b45acbb82f60ce60310106c9a9": "e3bae729789929ac2b384dc1ef37f427",
".git/objects/81/b9079aaee7a73ff04a1389a142c6be98bdfac7": "36b83b7b44f17db167a44c5f59b5b5a3",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/2f/078d5a9c2bf38a36b66cad468e73b4eea8e149": "b96e7972ee87a28d4300773b3a4c49c4",
".git/objects/6b/bf06a5d79c95e21cf614ed10390534ab97173b": "8fea24aac5cfb8a1014a2cb7a8a629e1",
".git/objects/07/54617e749cd46c031ecadaf4c7ba190977d6ab": "ec7f36af728768ee0ed64531b92a4ad7",
".git/objects/07/5057c75f2cf0764ab760a7bb47bffad4ce496f": "61be1af687eb295e2c0221820fe62f07",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/09/23e0cb5f73531afb4646e937c30b27c2b67003": "2f549ec0a82ad48e255cf488681b84ef",
".git/objects/09/8ae58880bdf1b5926575a0bb5f0b2362b5dd22": "3ba1a615e2be64909594c9ffb734cde8",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/5e/5eb6748e0a8e0aba50987e129729514692f0f5": "53d9d85083649df5077d603e5770f61a",
".git/objects/5b/308b52c6791b21a0cc5288467fb9df2c7392fa": "4d2bd6e18d19e6e13d5dc74229544c7a",
".git/objects/37/140b987853ce9d8cffca97cb50525d8b71490a": "b85f1e434dec3789ebaa0fdc26815220",
".git/objects/6c/87c7d148eeba61396c62c3167a9ed5717821cc": "ce7d56533d0b35a173409a66fc421469",
".git/objects/6c/3eb249bab46a9e6c240a4a5aa0edcd0e943ecf": "449cbfb977b3941f4002aa341e784a37",
".git/objects/6c/84575bca662cf14f9ba66d8893e3bc2038721e": "45b689002654fb8c33383ebe9eb64f4e",
".git/objects/39/388b698094500fdfe27f7d7d4790faacf3ffbc": "96ff5e4377a49e3c8adcc809120305dd",
".git/objects/99/68dd9c8ddd1732951bd35a36f4b0fedaf0004c": "941c2e14d5f4317dc19ae0aef302a074",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/c616e9605fc05883c4caf6cb14c779b37a43fc": "64bda8a6ff842557f36604dd92dcfe60",
".git/objects/db/c21649be329eb3aa7dca5d749ad3063b6fb721": "7d46f7c2fff1e0053281ed9b80b90e31",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/2e50b3b2c9d407c7d0e35b3ad70f348150ac1f": "b6995e25c9fc563d5d1591209eb851e0",
".git/objects/c3/97c15b731db76712e8854034722f0d3509a039": "908c36be1c24bdfd87568533f5d70c20",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/cc/bb0dd0319c275517235f1266b75f8b59cc550e": "619d7ab379157f2ab33ea92f3bf4d76e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/4b6dee727481d72b786e211ac0729abb9ecf43": "6b1943f109ef779a4949d2ff458123b8",
".git/objects/fa/e72b3890dcc6490664557d2c3fe6d040554b92": "ecc743e13b6c648bf84244b308b508a0",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/c2/13f09ca922ed7476900bb45b6d666344432235": "3b949bac53b1496480a2f285803fea43",
".git/objects/e9/c0640601584a9c1787f28b4f06d8b8e154a4ea": "74bfa946aec12ce51996e9601b2b684d",
".git/objects/46/cf8864548ca3bae421092927d1f20a464a987d": "aa7c81d069e9c38d86cf756d0b5e1e11",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/626378c38fe9fca6800abfb271fac12f9d86cc": "2b6e8c4ee133fce09e108e14a52d7d70",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/4f/652d0a18f5b93dc1ef845e0bb495296f23fc97": "0808634cb863a43fa06fe31bcde63d96",
".git/objects/12/ed10d657dc4f8181bca0a6ac031ee095c742da": "2dfeff4a744ed262333d6e93ae806adc",
".git/objects/12/02062e185d1316109d1a8c2b9c956e30de4d74": "cb50269e73ba91b4c2f8c7a166c62fd8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/2e/62e47a0ae9db42ad5b9a30f1c7420138d8a863": "c1adedba9a0f7297b7b09b2ee4e62fcc",
".git/objects/2b/72e5dc14bb228719c439caf8e6777aa2f90435": "a231f0df0496c46ef80b4efb9672e659",
".git/objects/2b/b5825df217e32732f6ea1c1c7539a580ea2d83": "1b45080ebbf2f4f8c5da37fa77dc3d99",
".git/objects/2b/9a0fdd04914cdfd9b8516c5be2595fd72e885d": "cd0a53381225cda678ac225121859e85",
".git/objects/47/da5ed92f2c286a8a7e3cbe582d1ff0eecf0a5b": "b713f69bf415c03aa6db80d8a2244888",
".git/objects/78/85fc144c17decfb58dddd11d77912f527e9540": "f4ea4ed8421d1aaeed620b9048ec9fe4",
".git/objects/8b/32666509f8b4d2e46e4cebc200e6d5d55b1ee2": "fc333d0d0ff609946a7042efbf03c511",
".git/objects/7a/e3b37beae4b73fcf58ccc66aee35b717e50563": "02b4ec19d1b8ffa81556fb3a011e54fb",
".git/objects/14/f51311972cc2968d94f014599cfc0248b87619": "7cc6fbca785c106348817cbb255eb43e",
".git/objects/14/090b5dc372d93db6234d997d79fe2415303260": "9b0cae2e759869eb3d0a740dfa89239b",
".git/objects/25/4efb7c50da78f38c9fe28e6b209f2bdeb43188": "ac2323f2adeff3842212f5ebe12af8dc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "124877e4ae395870cc6593d1105e8a19",
".git/logs/refs/heads/master": "f3c89349f7370fdd6aeaadecce978f1e",
".git/logs/refs/remotes/origin/master": "bc17a67ef8d6137cfd9f26bedfbfd1b2",
".git/logs/refs/stash": "306844d390d1e1d98b0eae186e3e7823",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "fb91e8c0ac754df02430eeaf102d552d",
".git/refs/remotes/origin/master": "fb91e8c0ac754df02430eeaf102d552d",
".git/refs/stash": "acd14fa7ed3d52546863770178121be8",
".git/index": "7463843b5882778f29f9d84466af14b8",
".git/COMMIT_EDITMSG": "c8b4628d883b29cc8d98a6fe8ee2dbdc",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "ae5beca0ba7cb94be097bf4f35f5d7ed",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "59f487cfaca02a2d20b1d5cf8fe09798",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
