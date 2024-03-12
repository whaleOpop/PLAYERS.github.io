'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0ab6dfc5dc0d8a5fde7d62dbbc709f80",
".git/config": "7c5c0a0d9a82236de82a7208faf4c5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "65598e163e9f901d416476c9ca65f2d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "89a3f7626b3209da21d3d02775576121",
".git/logs/refs/heads/main": "be09892cfb01e9228a4d4c043a5d89cd",
".git/logs/refs/remotes/origin/main": "7ad1a33690c78173f969cebcfebc2f70",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/4b01787c0ac3a9ecef3516dab450f0f7b265b0": "8abf902ced1331d0bd400a4413f65aaa",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/ab59e39f9493ba3c2257b313126649c9c1b59d": "14988bbaca0cf4a7614a16ac1ff9b38b",
".git/objects/12/75eaac09a04b90001a56d5ef7947416b8ff0b2": "bbaeff493c35ad93658a85108bb9450b",
".git/objects/17/8e6b6b80257c408e2e7e270fe9e7e437bc7245": "f1a45f904d29395ba1c73490d46c7b14",
".git/objects/1a/30165b63198563e565f51f4d919f7f615c3a15": "7f469fc38669d3860dbc902c0dff8634",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/ae3c1fab2b75dab5decb23fbc9cedaa4f045d3": "63af83333e68d4c0e1177dfc5e7ee97d",
".git/objects/28/1ae5449fc5c2c0884e98f9a539469ca2a008d8": "8412576d5e207d3e4e68f3f6b086d8c0",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/33/9b05e05653f02869719e5ad2d8f01ea81feb02": "2c1f4901a5e00b66f3f42c6aed004fd3",
".git/objects/34/e7f09c12285cc9b343f60fd93ec900816f2bf1": "9e9cf9e517a0823a905e9541d842cade",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/40/3290d0afc04e7a19ee83a8fcf8b04f15ee1309": "26f3072445cb47d4809460e76c155a3f",
".git/objects/40/dff8624cade537851988e105bb999e88cbd917": "d2835b242c56561f7ce0f7a397d234d5",
".git/objects/41/6b9148c1128e40083c418265b1e0e0c4853dd8": "057e8861878db296c7ba2aeb893a77ec",
".git/objects/43/0d374c6bedc5a89cdba5f7c3e83e463fc4fb0c": "4dcc08feaafb1d0a0190ca30447fddbd",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/f3eb9585731206e4f22d83497116b513de134b": "df03d78f3b868749cf0f37de3792cda0",
".git/objects/4b/28346ab99ed8ef1bf4858ddaa1d15e0ae9cfd6": "44a2308b2129378e8ad1f6b2c0015400",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/4f/e98726d5ebd45863e277bcf1c62b62d7b37b10": "153b4f63a4ad0e827248bc939fb80f63",
".git/objects/52/ea793f4b70d6524c4cd37ece9620e133edd324": "5bf07f602415dc6b10a615b4b18a8d0e",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/a1249b4138db8df061c073bf82dc68d1b941a8": "2263c7149f843fa113cb41142ee44d3e",
".git/objects/58/8af9e61c54090747e452dde3deaf7f7c27e761": "fa9d8fb7978648e3b4fc2a3dd3981b43",
".git/objects/59/062a4d41bd0ea458c09a2021ca8901d601986a": "22fa46f0a5db1090598ff4297a668d4d",
".git/objects/5c/81cb2e7f3da077fb6d8e29f48c40951ae0085f": "d2e0e4984cf93cb17219e8c1c7534088",
".git/objects/5d/647889375a9f8cf841513733052565705bc86e": "9a128bd5d5aa9928b376bb3c429563f7",
".git/objects/5f/b75b71c1461b21a76a0f69c638619baf4cb18a": "70895d819dd6f76f0dc7e3eaf9bc4b32",
".git/objects/60/df7b37d0dee9e385c100e96cd706d75ddd945f": "bbdf47947873a3633a97da879903ffd8",
".git/objects/67/031628664b2a51b7e036775376a27af3ebc7a9": "fa487a8c73e3ff7226892da1a8d58793",
".git/objects/69/50c73627c9f563f8a47ec3880ca2a5dce82df9": "a3a43d3d62a630ff87c3cfeb643c0cb7",
".git/objects/71/fa05d5179a8e85205934d0a933668ff7d21a67": "b08ccbd290aabff5811896bf9146e68b",
".git/objects/76/e6534ebaad45d57e54394403d367394afd114c": "951ef2a3d74ba0fa4a0cbc093686ecfa",
".git/objects/7a/2ad536bc673e863edb65b423587a9ae28b8b99": "7f47a41493d114a1cea1ce7def00f14d",
".git/objects/7a/6cd342024327b8099730e683053a6dd93802da": "00bfad7c4d32fb782b1d10a4cdfeb966",
".git/objects/7c/ad42cea77d739401394e2610c52c3ffce259dd": "d8af971d22b20de5ef44da213482f052",
".git/objects/80/76a27c1dd9ced364362c65b4c8747f326624df": "ffe3810974bab34662d37925c3ad916c",
".git/objects/85/7be8a2e129865c505597493983961e4be564ac": "7615353d06d7861d0b9df22d91793a78",
".git/objects/86/caa02afde47894f6dc787d18be3ccbd2fed9bd": "e138356b13490398c86221c4eff01071",
".git/objects/8a/46411ac2d33495f72eebe420aec0122a19df94": "e9a98bce8a62b905e4dd01f44cd5cbc9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/8e3f73840321736607eb105b1164a78567f9bf": "c22fd78a708356c4625985191929e711",
".git/objects/90/a112110a0d6f0eea323b8bf8879a16a336a411": "d4724bcf547d759faf0d02f9e32229ef",
".git/objects/92/acffd55c549da3309dc2ac4389be5144d07d42": "5ebc13498faa8a25549fb2acc562d0da",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9b/12ace5d40f45a682c5531f9d3ed1ded3fb4256": "92a73492275c79905cad096f7ca30ccf",
".git/objects/9b/dcb2331afbd2a745eef4409433696a61d0c4c9": "138834c41c140c1da0d8d3b9d26a3b2d",
".git/objects/9c/52f13b1bdb3a13b5222e4f04f8cd6432b7e7f8": "b85e53311cdebcb00480e01cdf55b744",
".git/objects/9d/854cb79d82c168e7d53c4a58688260f74fa51f": "0756e1d1aa7ada89b223cd482071ee11",
".git/objects/a0/2e32bf5b3318c1397b072789aa2e5833ad8b41": "13f0fadc38e79a51bcc408549d106246",
".git/objects/a3/a61ad9fc35f9c9209012c7ab3a1882cd106153": "5e72111c1a0038d36c7418e6fc0082d2",
".git/objects/a4/089bb334e5fde14bd98fd2083c8d551bc46d41": "42e9af42882fd6456501c1625e10aa39",
".git/objects/ad/19e477c2c6ea5c439cdc0e4b897b8a81fd5ab6": "3c57461297cef1d5b3706616e81e7821",
".git/objects/ae/0022eebd8cb7cb35bb3830d1dfeba8ba8cf15c": "26391eb18e24f5e3d94115fb079820f9",
".git/objects/af/c90e178c992351868ee1bcda7b807d1b4f2473": "1d0ac02fe71329c8e4d5c8549bf11e0a",
".git/objects/b0/e0ded69970c984adef634c78f371c413078fed": "8c78c55a8b3ac5a8ca06934fb52120d9",
".git/objects/b7/826dbefc342d94d3e28f6f09ec5157e9766025": "9357c786d1a302bc3b2f1ff696ff1a70",
".git/objects/b9/717cff1377f9a575fe2e6080ba2008df94c0d2": "63db40ece8fa9b27d2de2e8f564f34cd",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/07002cdb60a25e9cfd8e4c11d0915918bc132f": "61a29a296fb4bd40662faaf3e31ccc6a",
".git/objects/c4/d533717be159ec682e32150e20fcffd43290a2": "1d412f6c1b2c9b10a1807f3046ee6f1b",
".git/objects/c5/1f1284075c511f38575787e1c7019ba1a9ae67": "ca5e211cbd04eb92947840d2d1d1d5ea",
".git/objects/c9/361975a3a3c8d3e5bbc619ed4055d4d24435b1": "a00b5967b2c4a2239634e6135798a8a7",
".git/objects/ca/736435f556e32c62dfdbce94fff8ffd0a13ccc": "869cf8d0981cdc1f1031d18c6f23bf80",
".git/objects/d2/bcffd8329bb0a93b354f1190d0abba2376be4f": "35c5bb57717dd9f0752bea085f1b1c2f",
".git/objects/d4/15d507776225a7b5fbb4f1b6b152062f80de1f": "deac2d45d9b9806504cfc2119fd9c7e4",
".git/objects/d4/8febf7b4d6a09bcdcd2a55c722402702965903": "5036a7d069e7b42c9f9003cef5dea5b0",
".git/objects/d5/9d5bf4ddb5f4ddf16a2bce9b9d85a5558cf415": "6de81891443ba43730339e57bac52b51",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/eaf7c4bd562aedb5be93d884909fd8d2c7c39c": "60fc524c59a0653c602a89169700a50d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/ecc7108ef454bf1bc97c602837409e3f5bd991": "f3bbde2214b6cbd0ccfae067157717a1",
".git/objects/e2/cc814983bffc138d97554667f70045267adc92": "bfb4b2bbec13c1ff4d97fd8cc3304af2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/432390a6c653daa251bf9d6900ee3523143b62": "e4c8803f7c6968b9f72b82d8408d0496",
".git/objects/f2/87b49b3d8f2e8c70daad8713c2765f5f3ce41d": "98725fc7cb34c00aa176eb541816cb61",
".git/objects/f3/8f690cd096e35c9a2ae76ba89ed5ceea41e8b5": "c629d50c268779acd6c53e86a7ebc958",
".git/objects/f4/324fa7f5342098c9eb9ba6da5221d9d09f7a65": "c85c5ed388fba8e5553a6e568f0e1e85",
".git/objects/f7/316cc47486bc6d4ecd82403f0b412e7a9e354b": "b02399ea439df29457877ef6398db354",
".git/objects/fe/a8c59ed3645f8b915f83415bcde2e994c1acab": "6bfacb85b1d340e08d5f789e4f461884",
".git/refs/heads/main": "6a4080929b3357c257baeae5e35ddbeb",
".git/refs/remotes/origin/main": "6a4080929b3357c257baeae5e35ddbeb",
"assets/AssetManifest.bin": "3e4f2ef2cfd9b8a4aeb6562a17c6397f",
"assets/AssetManifest.bin.json": "0330bf9a384819071c8a6692d40d87da",
"assets/AssetManifest.json": "c37b176517f7709078924cd9d7a5a169",
"assets/assets/image/empty.png": "5d900b8022d5edfa1b67d917a0f6f12f",
"assets/assets/image/logo.svg": "c2dd3ce569d03c6b09b4df4771f2b3f3",
"assets/assets/image/sportman1.png": "6b79fa25115dfa06114635bcc5868f98",
"assets/assets/image/Union.png": "3b40dce1fa9ba8cf4689d5f3b2505fe1",
"assets/assets/vector/Add_Friends.svg": "fb464a0fa194cafb0f13a7c35ee19fcf",
"assets/assets/vector/Add_Post.svg": "bf3ed1be29158b0bff1c0dcaeafd7820",
"assets/assets/vector/Add_Vector.svg": "2b594c299a8b8126cc3de89f43e79bf4",
"assets/assets/vector/background_auth.svg": "ac3741b239a5ad667b64e89d8c51d95f",
"assets/FontManifest.json": "712c883194d2e72e2b5bd82ba9bc37e4",
"assets/fonts/MaterialIcons-Regular.otf": "329349e8cef8d218628ff57d16a7b7aa",
"assets/fonts/PlayerIcon.ttf": "c723b770ad05b2952b242113520a3733",
"assets/fonts/Yakin.ttf": "c594d2a42e0a59fc1bbc00cd31b0cd3e",
"assets/NOTICES": "f26f71463a594174f8ca6da5c73176bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "cef7c56a7845fb138d572e335590f56d",
"icons/Icon-512.png": "47c4d8be4f2a0ed29d4963658083698b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86534c732821aa7bca9585db5cc48fed",
"/": "86534c732821aa7bca9585db5cc48fed",
"main.dart.js": "cca80afda4ad8aa20478ada8cf1a124e",
"manifest.json": "10cf286035873c6f6654b465a7e49792",
"version.json": "a3c2419e13608cedcea959a052aaaee3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
