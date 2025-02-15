'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "014184bf389dd86f5855314726663f51",
"assets/AssetManifest.bin.json": "7be7d665900c367c225c8dff92761760",
"assets/AssetManifest.json": "407606baf2c38820e032ab26a34a6471",
"assets/assets/icons/add.png": "ac37821b1be524a375b9d04f511c16f1",
"assets/assets/icons/apple_logo.png": "ea25af9fd9fdcadfa92a4e2a3155d491",
"assets/assets/icons/app_logo.png": "8ec367980396b897863dd84b9e0edbf6",
"assets/assets/icons/arrow.png": "9e26b92eab0f00359ba8ac023dcfecd2",
"assets/assets/icons/bell.png": "1a1be341ea030918e6cbf996f5cf51a9",
"assets/assets/icons/bg.png": "13037d551d4b5dead90b84879e33cfcf",
"assets/assets/icons/blog.png": "74827b65be30da2731a5ade9f7241d6a",
"assets/assets/icons/box.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/icons/brands.png": "d85019b02f84ae1577687fae4e1d843a",
"assets/assets/icons/campaigns.png": "8e63abb3cc43572e841bb23d14743362",
"assets/assets/icons/cart.png": "90b3e501aa1111ba852f6fd43ad64a55",
"assets/assets/icons/categories.png": "3ee9b41a7bddf1e8bc86548f97f73358",
"assets/assets/icons/changed_password.png": "25d6dfc9bf591a069c939baab1f48e8b",
"assets/assets/icons/chat.png": "e81525480b3e390aea3314342d209574",
"assets/assets/icons/clipboard.png": "efbc9ecffc366f46501225fdd0477c1d",
"assets/assets/icons/clubpoint.png": "c320ea241a01682c5e0a4ee2f4afe4c6",
"assets/assets/icons/coupon.png": "3eee47933233d898ead37345a5234104",
"assets/assets/icons/download.png": "50dbf0c281bcbb8d65714c84764073fa",
"assets/assets/icons/edit.png": "145c3c063e8f174a4635ea3a59095e85",
"assets/assets/icons/facebook_logo.png": "33122dd8eb260b9331c75dd5096852fe",
"assets/assets/icons/favoriteseller.png": "d8b6fac18d053ec00873c66d150d8d96",
"assets/assets/icons/flash_deal.png": "bc0457f5e61c228f4fc43ba5bd3e11e2",
"assets/assets/icons/google_logo.png": "172e9ccfd77faf97892546b5192c398a",
"assets/assets/icons/headphone.png": "43015d0091d19bc188cd1da31021a5a9",
"assets/assets/icons/heart.png": "2ff2d5c3ea1b82f37a4d9d3f8c2794b0",
"assets/assets/icons/home.png": "82b15439ecb4d4a776836d6d16f87d8b",
"assets/assets/icons/login.png": "6c7893480109324093f545ff19097efe",
"assets/assets/icons/logout.png": "8c7b7b1ae8a3d6d6b43315e45840c5e6",
"assets/assets/icons/messages.png": "afa97de9ae5709842a30358c59ef2fba",
"assets/assets/icons/minus.png": "870a335bb675505e1f888f1147bb1d02",
"assets/assets/icons/more.png": "28cb68b300f86edd0e914a019d2adda6",
"assets/assets/icons/o-hamburger.png": "75540fbab9b867af5542e3173c23389a",
"assets/assets/icons/order.png": "4268c502251ef35d24afc32892de5ef9",
"assets/assets/icons/orders.png": "3639b858d6c5730b8e6705b62324772c",
"assets/assets/icons/placeholder.png": "4ee9d2e7f0e4ddc539dfb8c1b8ce5baf",
"assets/assets/icons/placeholder_rectangle.png": "a364b79d7d4ec9f2193789116a80819b",
"assets/assets/icons/plus.png": "042954477fb46729980bb2eca0ac2e9e",
"assets/assets/icons/points.png": "82988f05d354341ebce130b6cae90ec2",
"assets/assets/icons/profile.png": "531bb1c7a7dc201d1e77e8448358812b",
"assets/assets/icons/refund.png": "1d98ce7706455927116746d6009c4c20",
"assets/assets/icons/search.png": "c7cbc84f63ead800deb77cae175a1b8c",
"assets/assets/icons/settings.png": "b828d54764b59241981eec405c9e9f87",
"assets/assets/icons/shop.png": "170ac8257dcd4b2622ce8a8f37ea2921",
"assets/assets/icons/splash_login_registration_background_image.png": "7fd62d66f6ca61185880ff80b00f0eb5",
"assets/assets/icons/square_logo.png": "94138d75ae14373f4b5a6b7875b45f06",
"assets/assets/icons/todays_deal.png": "c798d81c6d67529ee284b9331c6a85e2",
"assets/assets/icons/top_categories.png": "f390e29b08742ec060e6e190ed200595",
"assets/assets/icons/top_sellers.png": "d1ba492409bd709c2a7784360a5a10f5",
"assets/assets/icons/trash.png": "22c33a5ddb5a72c989f04dfaf74d8191",
"assets/assets/icons/twitter_logo.png": "4523220a9a83756e427015f83663f009",
"assets/assets/icons/wallet.png": "f5ea00f3e66258407fd3de7e088c7fc9",
"assets/assets/icons/white_tick.png": "4fdeadb857ec534766eac21d7d3de881",
"assets/assets/icons/wholesale.png": "d0bb0f2ceea25aef2704516d6893a237",
"assets/assets/images/baby-bottle.png": "6cbbb938fe89fc020249a5a7532186a3",
"assets/assets/images/Baby_img.jpg": "620cdbf92b59938ae70836450427bc86",
"assets/assets/images/backlogin.jpg": "ac0c9688e279c19ccd3dfcd532a1b48f",
"assets/assets/images/caregiver.png": "065b126e644a685e0b174fe9c8a63e11",
"assets/assets/images/clothes.png": "2d259fa134db4afa61bdc04822d15375",
"assets/assets/images/c_1.jpg": "c6dec18da92608be0c83e3a9e7546e79",
"assets/assets/images/c_10.jpg": "b0349d73866ebec44d289476e176a66a",
"assets/assets/images/c_2.jpg": "b33150ea6fb11bd22ae3efc152bcca0d",
"assets/assets/images/c_3.jpg": "0d1bcc15d7d8afb3b486fd7905a1c10a",
"assets/assets/images/c_4.jpg": "b3f3de625e72aab2621d0a0c345a4541",
"assets/assets/images/c_5.jpg": "c54ec4300adcb49b6a895052440042f9",
"assets/assets/images/c_6.jpg": "b24c4dd75c865afa05102a56d7ecc4fd",
"assets/assets/images/c_7.jpg": "f31f7991e430c99825342552cdc0030a",
"assets/assets/images/c_8.jpg": "8d9be9a8776b577645c42e031062ebc5",
"assets/assets/images/c_9.jpg": "146888c4a6441fdd937a52025794a9f9",
"assets/assets/images/download.png": "1e30eba1c1afab133ca56bd7110fb60a",
"assets/assets/images/download1.png": "1721d6fb4022248cdd2015078e99cecb",
"assets/assets/images/download2.png": "1d679d5dc6473dbf36bbc9ce85d3a5b4",
"assets/assets/images/d_1.jpg": "441e28671f67aca9f12b0d9301032147",
"assets/assets/images/d_2.jpg": "276a05766ea064ced30e8cbe62ce7e01",
"assets/assets/images/d_3.jpg": "34e31439924fcb42bf23efd2b9475f57",
"assets/assets/images/d_4.jpg": "3594d66f47b8ede01a32a617c0177c8a",
"assets/assets/images/d_5.jpg": "871ea2bd40f3d04484d146898b0759c7",
"assets/assets/images/d_6.jpg": "34d23211d3d0398192d543d7c89d471f",
"assets/assets/images/fd1.jpg": "9c17f577f8ec454f3ded288448efa8be",
"assets/assets/images/fd2.jpg": "620d32f3b0a289e329acc1dd8791478b",
"assets/assets/images/fd3.jpg": "2573072cf9873e2531157b97a54a5697",
"assets/assets/images/login.png": "2fa77ac8f0e17dad8d95e06768c0a0f8",
"assets/assets/images/mainlogin.png": "cf1be701d2fb37482358b1d23c28a23e",
"assets/assets/images/shop1.png": "98baea30edf3bd13bf0c6fc17c9a52a2",
"assets/assets/images/shop2.png": "de44e59c2a6bacb8bed83609cbc89547",
"assets/assets/images/shop3.png": "7423256f84f740444f19a4c2fb8ba85e",
"assets/assets/images/slider_1.png": "db6f9487dc67a5e08db52079532a8934",
"assets/assets/images/slider_2.png": "bf650e0f8a23a076f8ef5a6a09e04b48",
"assets/assets/images/slider_3.png": "2022bc9a7eb3edf8fd0d140c40c7c821",
"assets/assets/images/slider_4.png": "0144dc01543d5879e8991111925a096c",
"assets/assets/images/ss1.jpg": "128cf1671aee84eddc2f85d59b638258",
"assets/assets/images/ss2.jpg": "262c87893c0dfa72a00280a40411d2a3",
"assets/assets/images/ss3.jpg": "4e368ccdb742e461aef56d619c86f2ec",
"assets/assets/images/ss4.jpg": "03661f6eb1c6af45d3b0e90d38c6eea1",
"assets/assets/images/storage-box.png": "0127b77eb794bfa740b76584f79c7b84",
"assets/assets/images/s_1.jpg": "e593c1acdd465427613f8aaed53c5b93",
"assets/assets/images/s_10.jpg": "27f3fbf6226f44d9e26493db495c6f9e",
"assets/assets/images/s_2.jpg": "3cc2842312c90ca119c1d16813f9cd39",
"assets/assets/images/s_3.jpg": "ed33500366da97b73308a02142a7128c",
"assets/assets/images/s_4.jpg": "4c0ddd01b60efe5328dd9d51c5949a6a",
"assets/assets/images/s_5.jpg": "a940c52f99afe163c37584750f811120",
"assets/assets/images/s_6.jpg": "086f213f8de258518d33d233ef31ba13",
"assets/assets/images/s_7.jpg": "4e85d1efed70e4ff3fe4c9f29b311d09",
"assets/assets/images/s_8.jpg": "3e874e2b8a08ca5a1e9573e7828424f3",
"assets/assets/images/s_9.jpg": "db938fc0a0c98223b23535527395ef92",
"assets/assets/images/travel-and-tourism.png": "f46f78697e98cccf973bb7164ca3dea9",
"assets/assets/images/tubes.png": "5bb5b116c0d5f6ac9c859c046770a3e1",
"assets/assets/images/w_1.jpg": "18a290193a5221284b50e3ccf973c1a4",
"assets/assets/images/w_2.jpg": "cafecc384d9d9a023008dd75158b99d1",
"assets/assets/images/w_3.jpg": "6ef9255dbc7b9a28b64eae605a5056c6",
"assets/assets/images/w_4.jpg": "ac6ed7f57b90e9de685f3cbef700ade3",
"assets/assets/images/w_5.jpg": "8b9746aad5439679dc54e92921ae46bb",
"assets/assets/images/w_6.jpg": "9f3e4d1ada390bb8fc46720f2b357452",
"assets/assets/images/w_7.jpg": "70bdc7443b48f2168db3a6c8922496f2",
"assets/assets/images/w_8.jpg": "22cf1030f5f55546ae81ff957727a739",
"assets/assets/images/w_9.jpg": "95f028bdff38de8e87c732fd4352405b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0e41ee2c345cc866b303c345d168aa16",
"assets/lib/services/category_model.json": "da426505cf40b54c01576ea72ba43ccd",
"assets/NOTICES": "181ee9b84db84c4f33057ac8ab086929",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "4655519a4a42030ebc446172671d2321",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "14fe0e008e7b4a6d542696abff001437",
"/": "14fe0e008e7b4a6d542696abff001437",
"main.dart.js": "6185222332ecafb58bbe8c5014b223da",
"manifest.json": "aab233c7fd3462020fd4f36e978cb91e",
"version.json": "35f418d31644e19d8f926d5ef05a4482"};
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
