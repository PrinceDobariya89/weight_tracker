'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d29b83e40c86322635b1b5cb9bbdc324",
"version.json": "d25ac67ae17ea39c1b164104143110b4",
"index.html": "812e1208ba89cd336a76bcaf37f3abdf",
"/": "812e1208ba89cd336a76bcaf37f3abdf",
"main.dart.js": "416165d332389f9da7bddc33f37ca0e5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "690a6cc6d0d98098bb47ad626d68cf82",
".git/config": "b55f054a67741eae6a06d695c573c3d8",
".git/objects/0d/89ce313c1ed7109424a3c6f29c6007602a2ee6": "f15ba04563283e5734a851464383b0f9",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/04/a5b57b8e7e287ece3c725d7ccd18f091b11654": "6a1c7f78672431266551492b977cec80",
".git/objects/04/55a2324d338291f889b524ebd9ef5a1f97b31f": "694b9bcfbfc229bfb632953d05080c44",
".git/objects/35/36f7ecc4f3ed5fbe7431b0f015221647786134": "e55103b0443b1cd27b350e7ff4d4db80",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/0c78c9ea7e2b66a9f76a5a36aa720375a0574c": "d9b98b44300e943de6aab49ee5e68d89",
".git/objects/3d/4f423b2aab845532d810e3241e0b1c3af7d6a9": "8127233277c5547822721fa8583e6247",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/0e/3e38f510ea165d7db6ccfd9d518bc12cecd63a": "7ad0ba8d2ec5b439d32280a4091a9d97",
".git/objects/33/797cec7c3f0737df73553a875cf65b77ddd7b8": "8e5c6f9eeaff8f2358c26d9ae3652a09",
".git/objects/b5/a46a53d27780fbb4d3998d67a0642ed78773fc": "da14eb8a65da03370628f420be447b4d",
".git/objects/a5/e6cdfae0d24c1bbb0bc3f522b7dd6f4fe36b0b": "9fd5ff1c48f7c86655b232ab64607eb3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2995855b92c237da565ca2d347fe1d058598dc": "85f1b142cc1668d62be7aaa664e2657f",
".git/objects/d8/a61e3c23507bd970f9727fa2358b713e8d2b63": "2a26304fea041f0af00ee1a5802c1656",
".git/objects/e5/5d388229f82a6f9c770332255273c9b3f6c051": "a70230c9fc25aff49131b98b543ad565",
".git/objects/f3/5312af6ffa9c36b8bb3ee34fcf35a271bac271": "1ed8b8725593658d5591b799c0ba00ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/e92dc660a14e5f25995c09ce94ea4665f73219": "2577ef3f1a65dfaccc8ff853241041f7",
".git/objects/fe/ed8277e6dcc783649da927c12720ae9a3dbb88": "c2d05335b4347dba7269178a856b08b9",
".git/objects/fe/3364b073ca74b0492019704706ac3df810ef66": "cdcc50eb1cf30ab5ed835d8550fa5125",
".git/objects/20/848ca57c115cc07a6963d14eb71791f1b82c1c": "f758f21e35eef5acec5dc56741d229e2",
".git/objects/18/bdac48d40e7bfa24b7a277e583d881cf7d6db3": "2b9bd04868e1357beb8dcc51f1888aee",
".git/objects/18/8665c92f0b5c4ee33e9f3ee6f71a77244e57d3": "bbbebd4e6959fe7ddb9b6e2c20f8b997",
".git/objects/4b/977a654b6915c4098bd0eef9a7a75b06ed5ef5": "1b9d404b778bf5e06315c492c2de21f5",
".git/objects/11/772ea8276e0673f406fd05c6937df5ee509a20": "087b81e826b4764c12a5d0ab001bede0",
".git/objects/11/68782ce5f01c8aa514bac440a71fb64e06601d": "214bb246c73974acd4110a23b20918da",
".git/objects/7d/980c006ac0595c635989e54e84f0fbe0d3ff7d": "75d05d7259c8228eeca25b1dc5b1dd88",
".git/objects/89/8b58cdad30cbad78d9c8fb2c0708e7d88e3a37": "e32ae98ba80703d630d55aa6452f8a2e",
".git/objects/45/74353ab2f35df46eddcece8a0181e4bdbdedc5": "d0b77604334c4ab2c39bf043a235c65f",
".git/objects/7b/7a3ffa61ca0663b873a7db2c63acc88e491718": "c84e0067629670c7f1acae433391c0db",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/4d/b4c902cd27e9b45acbb82f60ce60310106c9a9": "e3bae729789929ac2b384dc1ef37f427",
".git/objects/81/e8c0a455b661d830dc302930b78b2d6becc347": "ff5b2c458dba7c9e50f2cb5b34ec489d",
".git/objects/72/12b68f5e04613a08529e005ed064ecc1db2869": "339b0b327b44f544d660d2d2129e8d2b",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/43/cfc35afb6ea38cc0df65e5b023601eaf0fc19b": "f6556f4c7508b914c33060ae767e820a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/09/9f3eaf81f407c16a12b27cf217e73bfedaa934": "638e3373cdf1501647a9d512fff3ff5b",
".git/objects/09/4d73bb9dafe49d8e47a85ac04a4e0f56a6c378": "e4262f36773886a987cf51f7c65eea05",
".git/objects/5d/b4f8259a429f8da55e117bd46ae7f0d56dcf82": "78bfd52fe4bbe10fcd3c6ea1e419545b",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/31/174d2a5aab9669580e23b1f9e549d92fa91c08": "67c34263311096ad3a9708961a6bc4cb",
".git/objects/3a/a7994ca13161b8d6ea874168602da043a83e3b": "0fe9081a5cccb337532e876bb359c2fa",
".git/objects/5b/a85cc10871341f59f75123401ffd6c10309a21": "57d416e0dcbfb3d1db3398a3315dd948",
".git/objects/6d/d125ea902b4b2ddb81766de6bc56459aee0bc2": "adfcbcef5cd18bba8001be3feecc51b2",
".git/objects/39/388b698094500fdfe27f7d7d4790faacf3ffbc": "96ff5e4377a49e3c8adcc809120305dd",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/382907fd13e9e7ef39d2e8afb6b3533e06d268": "0190a43a48011ae5ec7a539b61642048",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d5/17af6f7297e76fc0192c08ef63d267f6a985a3": "cac2a549ce36c70df14698137d33fb4d",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/c21649be329eb3aa7dca5d749ad3063b6fb721": "7d46f7c2fff1e0053281ed9b80b90e31",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/f1/e0f3168ddf1377f09eea3c623dfc4efe33dba9": "dbecea760318646afcb7fbabe8f5b855",
".git/objects/cb/5db3e3ee501d4340ea4c5740fbdee03a4140ed": "49dc1518f7c5a374eb44ab9ad5b38b28",
".git/objects/cb/eaf37a1c167cd88836c6194590e5681aab1c12": "63c446aba47fabc97a57515bfb519760",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/7d4edfc35e9f8e93530520614ac9130069b69a": "7006f257b1ff25a0033c82efdc3840c6",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/23/7bb9adcb8f20e4400761b194fdf36659d37267": "3ff1f07082550f3e59590d5a28a91fe7",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/a5bf4805b54c40212f5ef8aaf823cf89d6490c": "419645f567301cab168a40ec56a53484",
".git/objects/76/e8be9c0a30dfc2090e91ddbdca1b05236ea235": "b49afb616edbf54c5963f18da306492d",
".git/objects/1c/a2b244338a6fff6a66f065e0a58010e67afab4": "e697f3c5e3fd82b78fa2fa781e37a439",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/8b/d6c6fb1fadeea5f2500e8c3730ffdf0b214ea5": "70be462f5812ef662455329a6cfeeff1",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1471d285df4b03a287051c03b2d309fd",
".git/logs/refs/heads/gh-pages": "1471d285df4b03a287051c03b2d309fd",
".git/logs/refs/remotes/origin/gh-pages": "f70f23b99b9cad4addabd629462948e3",
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
".git/refs/heads/gh-pages": "0a02e87319b0abee4f50c587249411a0",
".git/refs/remotes/origin/gh-pages": "0a02e87319b0abee4f50c587249411a0",
".git/index": "d05fac5a379968a7f1c95f1a4312c57b",
".git/COMMIT_EDITMSG": "1a2c3c9ada8d75b85304be5ba3ecfe6b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "b298b6efe4f80f1c80dc785b4155996a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "90384b2d93f031d410e8f40ad8d8843a",
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
