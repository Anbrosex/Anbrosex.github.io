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
    "url": "404.html",
    "revision": "e08476eff41672d1fa5c95c640306e13"
  },
  {
    "url": "about/index.html",
    "revision": "645f95432acf5a1fbe6290d692d8e4a5"
  },
  {
    "url": "about/notes/about.html",
    "revision": "34e311fffacca81d7fdd2ecb81742625"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "3304cdaa22df4045f4cc903b1e7d97d3"
  },
  {
    "url": "assets/css/0.styles.83658f21.css",
    "revision": "33cb282a181d3beeb278a6f67606e93a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4162b088.js",
    "revision": "7187af39c3d7f35664d7f27369cadec5"
  },
  {
    "url": "assets/js/11.86d31d5d.js",
    "revision": "22671c5724c140305481c8e41d0247ef"
  },
  {
    "url": "assets/js/12.e9832beb.js",
    "revision": "dceddcb592b5f0fac887bf489221a8b0"
  },
  {
    "url": "assets/js/13.5001e842.js",
    "revision": "efb486bc9589abf8856f34717b4ebf26"
  },
  {
    "url": "assets/js/14.a9974cb9.js",
    "revision": "8243733a2a8274c5415a10bfd65c4b68"
  },
  {
    "url": "assets/js/15.e531a6ad.js",
    "revision": "2c157a37d80f808b80a65cba9c2e63e9"
  },
  {
    "url": "assets/js/16.41ba3457.js",
    "revision": "7adc947bd71b9d15127f064636835662"
  },
  {
    "url": "assets/js/17.ba9012de.js",
    "revision": "4de58b39613ff8c744a1342a2603a44a"
  },
  {
    "url": "assets/js/18.ebf8d966.js",
    "revision": "1c41127452f273c3b863c81a41c1bd79"
  },
  {
    "url": "assets/js/19.bf364e83.js",
    "revision": "ae7af76a36def57a1146623312f477f0"
  },
  {
    "url": "assets/js/2.fc5abdac.js",
    "revision": "4d5892df30628eaa4cac997ef6a584fe"
  },
  {
    "url": "assets/js/20.05c33c56.js",
    "revision": "f1ed1e1c03f8abde709a043fe3336f27"
  },
  {
    "url": "assets/js/21.bd23da1f.js",
    "revision": "d4616514a18565bbfffb24fd3e64aea0"
  },
  {
    "url": "assets/js/22.e3e434ff.js",
    "revision": "342a812a4cac17d9873a6ea224895391"
  },
  {
    "url": "assets/js/23.907296fb.js",
    "revision": "fc2cdb6cb17f67f7ed0bb6b38d3b85c3"
  },
  {
    "url": "assets/js/24.1a1d4e92.js",
    "revision": "fc3af37a0a727e9dbfbe2b8587245928"
  },
  {
    "url": "assets/js/25.86d78536.js",
    "revision": "1ab65806df632b2380252ddc43a88f5f"
  },
  {
    "url": "assets/js/26.a4f8bdc1.js",
    "revision": "ac0a1ce3a71c8881c7126a5d37221999"
  },
  {
    "url": "assets/js/27.2029b163.js",
    "revision": "cb0353b5a41ac8dcc648ff89cf557ea1"
  },
  {
    "url": "assets/js/28.cd3a616d.js",
    "revision": "adf41829503e2d0ab558f7dc0713aed1"
  },
  {
    "url": "assets/js/29.a388647e.js",
    "revision": "c40bcb1cbcdec42fa1b069b0400f1709"
  },
  {
    "url": "assets/js/3.afcd48ec.js",
    "revision": "a23f43ee18a1334358ea03bdf9c1eac1"
  },
  {
    "url": "assets/js/30.18c1ba24.js",
    "revision": "541e15b6fedfc0e9ec28b4080b938291"
  },
  {
    "url": "assets/js/31.fa7f530a.js",
    "revision": "dee7d28e3e45d6c58bdf21fd17977956"
  },
  {
    "url": "assets/js/4.777a7362.js",
    "revision": "26745af3fc99a704597cdde9c2c8ecf8"
  },
  {
    "url": "assets/js/5.3236115d.js",
    "revision": "f32e55abf96d050fbc6af8911d927159"
  },
  {
    "url": "assets/js/6.51a252c5.js",
    "revision": "824370a96db113650eaf086aa270a6b2"
  },
  {
    "url": "assets/js/7.a3325a3b.js",
    "revision": "06c05edc6df6192d77b11298078ac883"
  },
  {
    "url": "assets/js/8.13352b7d.js",
    "revision": "85256eb662dc06c62ed0a0a456508546"
  },
  {
    "url": "assets/js/9.93d9f05f.js",
    "revision": "d41b1f1cbb0fcd1b683985e6012bc2d6"
  },
  {
    "url": "assets/js/app.72730486.js",
    "revision": "0d63233b4ca8229af7796b7dc074a0d8"
  },
  {
    "url": "css/style.css",
    "revision": "227e44d7716f2f95dd27da841c17ed94"
  },
  {
    "url": "error/arithemetic/index.html",
    "revision": "dcb9a3ead1e4e2a107d86932da0b4c01"
  },
  {
    "url": "error/arithemetic/notes/gbd1.html",
    "revision": "b44d2047d0a1364f6b9ee8c2ec16c2bd"
  },
  {
    "url": "error/frame/index.html",
    "revision": "05b6278559210937d0408fb697169388"
  },
  {
    "url": "error/frame/notes/bd1.html",
    "revision": "e3e48eeacd544796b913ba448698390b"
  },
  {
    "url": "error/language/index.html",
    "revision": "82c975f80a5e289130e11ae92bcce52d"
  },
  {
    "url": "error/language/notes/gbd1.html",
    "revision": "81341adc3a57a8ba9eea1a3db106f666"
  },
  {
    "url": "error/tools/index.html",
    "revision": "208cb0c3f612864935d0a09f5a99ed4c"
  },
  {
    "url": "error/tools/notes/gbd1.html",
    "revision": "5a01a7a1da291c1bb7dff6b52798a31f"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "e9a11345791aeeb31d9ebfb8eebb4b23"
  },
  {
    "url": "images/app.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "images/hou.svg",
    "revision": "f52883b9a39185755c52b596eff51ec9"
  },
  {
    "url": "images/ico.png",
    "revision": "0030088bec02f7db2105739f7f9f3048"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "images/qian.svg",
    "revision": "4960e3d8b0ccda5fd99a9478fdd02385"
  },
  {
    "url": "index.html",
    "revision": "0c3cc8195a59c4d92b3711a681b779e7"
  },
  {
    "url": "js/main.js",
    "revision": "ae8eb01236ca8901493ecc7e7cd33432"
  },
  {
    "url": "poem/index.html",
    "revision": "8ae75d11b124fe161a81189f12853516"
  },
  {
    "url": "poem/notes/cry.html",
    "revision": "85aefa5152a1d710f1800d0529192458"
  },
  {
    "url": "poem/notes/one.html",
    "revision": "c8d8c085f8b28f224c039ac28f9a7928"
  },
  {
    "url": "poem/notes/three.html",
    "revision": "30ef212fcc2ac1f2eab82c24a0e047c0"
  },
  {
    "url": "poem/notes/two.html",
    "revision": "d3a7f0a6b14a08639ea6020219948303"
  },
  {
    "url": "tags/index.html",
    "revision": "127a74e06a774bfd08310124469afae2"
  },
  {
    "url": "web/index.html",
    "revision": "613058471f6c577952feaf7ae9959dd2"
  },
  {
    "url": "web/notes/css/introduce.html",
    "revision": "e7f5f3e705e962f7458e24044b33e3e1"
  },
  {
    "url": "web/notes/html/introduce.html",
    "revision": "d9c721c1f72172766ddccf187a0d057b"
  },
  {
    "url": "web/notes/javascript/introduce.html",
    "revision": "a89b08107aeca571cc664ab7f7f91612"
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
