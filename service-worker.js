/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "e05315a1b375a59879894599ec590a85"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.e06f978d.css",
    "revision": "5ed20f2d620cc087c653dbc676061214"
  },
  {
    "url": "assets/img/add_request.9f04c5b0.png",
    "revision": "9f04c5b01f69f5a6ed5795ab279c9f41"
  },
  {
    "url": "assets/img/all_media.1d0d012f.png",
    "revision": "1d0d012f266f53ba2e6f793eb99904da"
  },
  {
    "url": "assets/img/all_media2.e6551f6e.png",
    "revision": "e6551f6eb1a0efc177711c9b35147505"
  },
  {
    "url": "assets/img/all_request.9f253a18.png",
    "revision": "9f253a18ca6837b5a6fc38226ae4b1f2"
  },
  {
    "url": "assets/img/all_request2.78126c20.png",
    "revision": "78126c206de007f6231e5b8565af8e8f"
  },
  {
    "url": "assets/img/deleted_media.97359411.png",
    "revision": "97359411b68870ffd8571372f860c015"
  },
  {
    "url": "assets/img/get_media.aed39220.png",
    "revision": "aed3922098a6612a59b0d913b90bbb53"
  },
  {
    "url": "assets/img/get_media2.a693598a.png",
    "revision": "a693598a84fa20674cfc10a502ae70c9"
  },
  {
    "url": "assets/img/get_user.a0bd4eab.png",
    "revision": "a0bd4eabf7c59b577dde6893c362e215"
  },
  {
    "url": "assets/img/media_update.44f07a04.png",
    "revision": "44f07a049619e4c45a44e0e6a25942d7"
  },
  {
    "url": "assets/img/relayshema.e5a2192d.png",
    "revision": "e5a2192d15b9948462f4d71eea65120f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.a80b2b59.js",
    "revision": "2e87dd5ead3b26ba90cbc5adc82b03ad"
  },
  {
    "url": "assets/js/10.6c7bc608.js",
    "revision": "1c2fdb8abfdad518206f392dd0add5c8"
  },
  {
    "url": "assets/js/13.bd8f6948.js",
    "revision": "39d7f3f192e2c0b6412d8513da36b03f"
  },
  {
    "url": "assets/js/14.deb64674.js",
    "revision": "e850d0766babd121dd37b05ad50d49ef"
  },
  {
    "url": "assets/js/15.6e89d410.js",
    "revision": "2e7250645916b920ea40883cdd8a40d1"
  },
  {
    "url": "assets/js/16.3dc96e99.js",
    "revision": "a0a79c0a80106b1878d01b045891e954"
  },
  {
    "url": "assets/js/17.63ad3c40.js",
    "revision": "a3ade768ceca8e5ec70e7420649b379a"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.a397d310.js",
    "revision": "fd1731f864c4ec7766ce2f121376d5f4"
  },
  {
    "url": "assets/js/20.b49ae591.js",
    "revision": "4152e7e3767d8e1110555ca1c65a2e35"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.a3a697a3.js",
    "revision": "3d24ca139bbd90d4f8bb6d657b7baa21"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.35d6e3a6.js",
    "revision": "ec59beb9f1062f53fc36361248a2e157"
  },
  {
    "url": "assets/js/28.62f931df.js",
    "revision": "7ddc6713416d777ba77c6a9ad25633ab"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.98343b70.js",
    "revision": "a67b50904b931e0dee7185c1bf9d920e"
  },
  {
    "url": "assets/js/31.9ec1194b.js",
    "revision": "1fbb5e2c00468da8d838084f11af525d"
  },
  {
    "url": "assets/js/32.f308d765.js",
    "revision": "831e713348b45cc20cc128da4f63663a"
  },
  {
    "url": "assets/js/33.eb8d79a5.js",
    "revision": "a89e5e986ac9b2eafa1e8d72fbb17396"
  },
  {
    "url": "assets/js/34.ee0b5aae.js",
    "revision": "938c9bd10e991db723c56f9c23aa744e"
  },
  {
    "url": "assets/js/35.97bbb69b.js",
    "revision": "abf89bb5c5fa49f97006e3b5c7aab3b1"
  },
  {
    "url": "assets/js/36.85fa7926.js",
    "revision": "d731607bc212acd1f35aaefcd6eab32f"
  },
  {
    "url": "assets/js/37.44bc865e.js",
    "revision": "bba0f44598ab5c7cb8fbb7c4421ceb41"
  },
  {
    "url": "assets/js/38.e4e6982f.js",
    "revision": "9acc199b9117e2958e8685705199f1e3"
  },
  {
    "url": "assets/js/39.0c1395eb.js",
    "revision": "9e330180b868354206c26dbb3ef6ff03"
  },
  {
    "url": "assets/js/4.afba3b63.js",
    "revision": "da393dbb945a10dc9d5b94e9b186075e"
  },
  {
    "url": "assets/js/41.5167c572.js",
    "revision": "fc09462c43d81c031e87c84c4693dfbf"
  },
  {
    "url": "assets/js/5.b1f744da.js",
    "revision": "ca01d5a1e8807e3f12d6054da85799cd"
  },
  {
    "url": "assets/js/6.caee52eb.js",
    "revision": "24b6e8be48777cd1a3acffcdffc5f76e"
  },
  {
    "url": "assets/js/7.cc432872.js",
    "revision": "335a19e2e6dd44dbac46c4b2031c2b68"
  },
  {
    "url": "assets/js/8.bc7ffb1f.js",
    "revision": "0fe08a6c0fd376970ce3f5c411864c68"
  },
  {
    "url": "assets/js/9.631fa0d4.js",
    "revision": "7668ef4476f618f98a408ed226472642"
  },
  {
    "url": "assets/js/app.49d4e1ab.js",
    "revision": "b501e677e4dd2e98bb815a940f906fab"
  },
  {
    "url": "assets/js/vendors~docsearch.a7214ad1.js",
    "revision": "4fdfc9c801456fc8bade32dc84c522d5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "0214e5c157f223bffb96d426537af897"
  },
  {
    "url": "design/index.html",
    "revision": "8a8033a77708b3bb70999b5495b6a4f5"
  },
  {
    "url": "index.html",
    "revision": "37f202bfc7ae4e23f34cb60c66c214e9"
  },
  {
    "url": "intro/index.html",
    "revision": "82b8fbba4c25d1b1936e2b0857327941"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "93bbb7e1f83f02775f9dfa109201af27"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cd6eebf3d49cd2d6425ad462a6a1d8e0"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "5f41819f78e73cb2a911598eb143b63a"
  },
  {
    "url": "software/index.html",
    "revision": "491798b337ef6bfbc5aa19ad043ce5ae"
  },
  {
    "url": "test/index.html",
    "revision": "05a2c26f25126cd45cec69e6d1ef22cc"
  },
  {
    "url": "use cases/index.html",
    "revision": "4ce0df9c892b2af44a72dd237c1797e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
