if(!self.define){let e,d={};const i=(i,n)=>(i=new URL(i+".js",n).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let s={};const f=e=>i(e,r),b={module:{uri:r},exports:s,require:f};d[r]=Promise.all(n.map((e=>b[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"b24dd4cb55621de98df742155a5f57d9"},{url:"608.bundle.js",revision:"64ba3bc76b174cf94b23196e8d6603e6"},{url:"940.bundle.js",revision:"0af6bb3d234fae66553b7b3bb057a6b4"},{url:"app.webmanifest",revision:"87b506b60b71a6cd3769175035513378"},{url:"app~a51fa3f5.bundle.js",revision:"940f80c9f89b8cb79d858523d2d06d32"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"0acbc3c2643035824e749ec11a5fbf6d"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"ab2a572d31744ed87d0dceabb83e813c"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"96671c8e2301f4dade5b3f7794f28d0f"},{url:"app~f6563343.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"3d7d7aa15b44ef9c864b1b3d9c1c3c67"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"index.html",revision:"b7c69c5e4860c86ca9df280006a26394"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"therestodb-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
