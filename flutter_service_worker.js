'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/monza.jpg": "5bec69e68f62edcd19aa4173be2f97cd",
"assets/assets/bitacora.png": "f3b6d53687418cf4e2821660648be3c2",
"assets/assets/fondofinal.jpg": "145c4445bf6dcf11df2153e85de1f43e",
"assets/assets/strenj.png": "fc1107b37f4c86a2c1edf75ac517fae7",
"assets/assets/armonico.jpg": "4ebb6b2c08fdb3e4cfeb7e3c15282853",
"assets/assets/movement.png": "ccbd7689ad119d08a4df7ade460eef9b",
"assets/assets/fuerzas/conceptual.png": "7e7a61d27af8a628b5b56ec28e1d8e2e",
"assets/assets/circularuniforme.jpg": "a4390226c7bd3ae34595ab6b536bc557",
"assets/assets/rectiejemplo.jpg": "631e850479455ba459a3888d5fc64847",
"assets/assets/pendulo.jpg": "0e1b6d1037166caae18237502f66622f",
"assets/assets/rectilineo.jpg": "5133a9e87c55acb4295e5cac5646a8bc",
"assets/assets/conceptual.png": "a78e02633c1e04637b2f297d1b356a11",
"assets/assets/cronograma.png": "51f452492c9322ea24915d1e9275b2cb",
"assets/assets/fonts/staatliches/Staatliches-Regular.ttf": "d5746e3b20453d6cee99ab27a0bdf949",
"assets/assets/fonts/roboto/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/roboto/Roboto-Italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/roboto/RobotoSlab-Regular.ttf": "2e935203e7200edebf345ee19a80f435",
"assets/assets/fonts/roboto/RobotoSlab-Bold.ttf": "b3954db228ca7701bf36469cf6c31c57",
"assets/assets/fonts/lato/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/assets/fonts/lato/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/lato/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/lato/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/mukta/Mukta-Regular.ttf": "6f5fbe33e286ecbaee1a2933d0de25a0",
"assets/assets/fonts/mukta/Mukta-Bold.ttf": "c05522505c7067b1e97910b5a67a26be",
"assets/assets/parabolica.jpg": "f7f0d4c7cb161d9255dbec4c5f6c96bf",
"assets/assets/uniforme.jpg": "ee91ca0dd11ae386af99ae44f8eab03c",
"assets/NOTICES": "6ea21d83f50934d7df5c9f052d88e6c8",
"assets/FontManifest.json": "f468b2182a32905f270fd5df51d6cb04",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "af71fe2987e2e091a88ea0bbdd5dd61a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"index.html": "3add60397f8b5921c3394be17570befc",
"/": "3add60397f8b5921c3394be17570befc",
"main.dart.js": "4d4a2110427cfabfa44b90ac9da01ca6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b110bfc489bfa74ed3d5b2b62ede35ef",
"favicon.png": "c7b2b662060baeda02816332b39ac817",
".git/FETCH_HEAD": "2dfd41deaa6236ddae663c3025d41e76",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/COMMIT_EDITMSG": "f9a21b1b635c19c2e0d3ef24b9775828",
".git/refs/remotes/origin/master": "29c597bcba4aa72c2cedd392b3bcc513",
".git/refs/heads/master": "29c597bcba4aa72c2cedd392b3bcc513",
".git/index": "b0c45ff4588860eec71600ab453b9196",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "7e36866fde9b4e989ae27f2f930aed1d",
".git/logs/refs/remotes/origin/master": "cba311fa87b9afdec491a3c9541881e8",
".git/logs/refs/heads/master": "7e36866fde9b4e989ae27f2f930aed1d",
".git/config": "492d74cd96b92fe3f1f59826c0695461",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "7807189a743a8dfd956afe5b0c51884c",
".git/objects/b7/5c3ffeda3324e6973e1aa39270ded27da5ae9b": "06204e374d041e4b6bf1490c3c4394b4",
".git/objects/f3/89c4cbd42492d1f99ca574e9fc07dc6ec7cc18": "b0702fdae1ea2f0007aeac2f7116fd57",
".git/objects/a2/a2a9a0f6b14c5748c33aeeb874b71f88d4d450": "87fdf70aefcb99af4e03ea89749432e4",
".git/objects/15/95d1bb1e19336666b013ba8c22eac018125d3c": "5f3782570f05fbbd7506589d8f1ac86a",
".git/objects/42/2d70be6ca32c1dcf6c3e45e6fdb68d5e181eb0": "3906a6820e357ec65ec8683102f78f64",
".git/objects/42/e90a1d78c48e27140accaaa91433516ec2ea02": "91e05e9eda08488a52961c3d1faefa33",
".git/objects/3a/2f8a6b98181284612a492ddc02d05017c457c0": "637139d07e8d763970af3c2697974f69",
".git/objects/3a/134aa85e5b297a4eea43fa351aea87386307d0": "742a3694712872d32c04c9a73e8d435a",
".git/objects/ce/eb953090c156f92dbdfad076fd795daa7f58cb": "04a32a9f03d137b901f265c6e0f37c2a",
".git/objects/3b/643ab146bc6327a2245b6f702bf9bf421dd4e6": "e1f257cb29e44d8dad163788d37ce8a4",
".git/objects/1f/e40d62bb1ea8d7ee165d0f616e72b425aa55f2": "e42f9f4e1899935d0bff78bcd2627147",
".git/objects/7f/61e0e8f1f5399fb058430b43d7a89ff8a8be3f": "a9acc27141c77c89e81618f5b76f35b2",
".git/objects/9e/d50e698d50ff5c5dffc464f67fb1843f781299": "a4735f22ff64bb19aa3d5100bc9d6003",
".git/objects/51/235b2df53d6d99cfca7dbf49c2e3921a8a0e1d": "fdb996bf1cdb50daa7a481b5a82587a8",
".git/objects/01/eba221856974ba9ba502efbe9e893a19e9f51f": "937602bcd4222f2a5c446285a1836471",
".git/objects/08/3b45ef9a1f930c3ceb8640df0429d5b6db36c1": "55a9521b0a55a86db545c838c06e0aa8",
".git/objects/b9/3ea2154e02b408829c2d5fc55bf795cdc8d174": "1a47d662abb39ced77d3c7d25f9ff9da",
".git/objects/8a/9346c8fc844fe0dbbb87a12ff58bb9a11c5f67": "3d49083cab738fb08de9202348367538",
".git/objects/00/ad9992baab82b9dab2a59d44a4a89f4a943ca0": "fdeeb3eb0a422d4b5b25d77e2efd19c8",
".git/objects/00/0ea6d676ab34eb9929e1c30c10d9f6c79ce31e": "27ad25f1393473edfa1c483fcb590a6f",
".git/objects/3e/c1f050f5c1174ae55d5dc15a542586ff38e6dc": "7c7d9673d3b2e92bfe338edc7f90a640",
".git/objects/04/881665e7c672b0a5efa11bea39eb1e125dc40b": "4fe2d10878b3a8c68f850787b4c48ed2",
".git/objects/19/1eb11c9b386b4f09813c1ad3d72e545fbe63aa": "64bab300be6df23ad00814f0efcdb8a3",
".git/objects/f1/3c2510c9a2fb2ba59d85b8706fff9708c6dea7": "cfb5c111065fce08e9f2d2ed3b317bcf",
".git/objects/40/5af39037fc493ce38ebdbfa9e4b51d698b9923": "52b81bac7869db6a87a0ea584cd5efd1",
".git/objects/50/289bb4724b631b60c76eff53332b9798519b3e": "91be4460d9a0f922c47a5294330aa823",
".git/objects/38/a332240e8d6323a969bd5cd2d5a0fb1c2a568f": "880cf2d39a52b122ef3591a828e149e0",
".git/objects/10/5e03f93122414cf8df8aca5c8bbb571836bda0": "4aa5c4c78b1cb5fe7fb308a2cd48986d",
".git/objects/c7/bffe7c9b7a71315777244ca73350ba92063b54": "57cece32b43ed2454d4efbc59cae00ef",
".git/objects/8c/96ef614e40ab67874abec115f0b514fd671899": "3f4ddb856624e58b14e67f8669622ca7",
".git/objects/5d/8ae49cc2e092c10a65c56de81e2814cdd45d5b": "71b987c7734766caccbf93d5db3ced5d",
".git/objects/87/9697017c561d5e201abdc88c4eb84f62b79da8": "0df30a3d6888f88b287780cf63ef2b18",
".git/objects/e6/916f982c1220fafe7cdbf34584b7470fb707fe": "f58b3ebdf8197ab430d784d69f965c6c",
".git/objects/ac/f0990693c64b225020de74793151c6837d9f98": "f2eab65d1076934f852466d8259b8cf4",
".git/objects/pack/pack-a151f654dd74e99ea0143813573ed56587834f49.pack": "ef6bd5d3ac9091fff03ef7d095a063ba",
".git/objects/pack/pack-a151f654dd74e99ea0143813573ed56587834f49.idx": "63406c1a6b9ffd98a6d6898ec1a12173",
".git/objects/6a/595d17dce5357a66192acceaf159f34d072708": "43e76174ea6ff73d2165e446b592e4db",
".git/objects/55/470d280ca2f862a3281289b84c2c975c8e6b32": "30863b5a5a23e7310092226004ec2dc5",
".git/objects/2a/2b147a2ab7beac0be71a0670f3b76032cd2a31": "9f635db799915461d4789320c106ade0",
".git/objects/0c/d0263ba8187e02d327fd942ed4fe5ba8332984": "36448b060c06005ded086347382324a2",
".git/objects/bd/b028ea700abf2cee0e2b536423f7bfcf4b52fb": "9a64f4bb9cfe503ab7ba9f5d1adaa221",
".git/objects/ba/cb84f3f5dacde142a7a629e73de921ad166e42": "fd44fcc381b80a95d15dbc848a1c637e",
".git/objects/9b/e926eea939ff1e8cdcb4cdda2896b68d1b827b": "f311a2149ff1394651dc0a6f8c5fbceb",
".git/objects/d1/4362731f8362a26223487f9a69d7e436fb8b89": "78660d4f626cc04c02068e3bae50255a",
".git/objects/a7/27fad05fb507fb6db1944a8e60a0e697df1e3a": "08e3763017629362da4b6d83fb353094",
".git/objects/d5/b1d7d6baeb387bcd04b9e22bf233688de4b114": "e199d23ae7c30ab95e8bfa47d6176502",
".git/objects/e1/a1f881bc612d10def77149eafc003d8333eda5": "49962031845ec7d79d90863423f3e9ca",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/90/4f5b4db2d4c44a25e2f79019984a15067a393a": "bb4f5c93b255ac857282cbdc31a99793"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
