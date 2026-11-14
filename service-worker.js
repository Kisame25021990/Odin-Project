"use strict";

const CACHE_NAME = "odin-cursus-fr-v1";
const APP_SHELL = [
  "./",
  "index.html",
  "app.webmanifest",
  "content/manifest.json",
  "glossaire.json",
  "assets/styles.css",
  "assets/app.js",
  "assets/marked.min.js",
  "assets/prism.min.js",
  "assets/prism-python.min.js",
  "assets/prism-bash.min.js",
  "assets/prism-json.min.js",
  "assets/prism-markdown.min.js",
  "assets/odin-icon.svg",
  "assets/odin-icon-192.png",
  "assets/odin-icon-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(APP_SHELL);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        return key !== CACHE_NAME ? caches.delete(key) : Promise.resolve();
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(request).then(function (response) {
      if (response.ok && response.type === "basic") {
        const copy = response.clone();
        return caches.open(CACHE_NAME).then(function (cache) {
          return cache.put(request, copy).then(function () {
            return response;
          });
        });
      }
      return response;
    }).catch(function () {
      return caches.match(request).then(function (cached) {
        if (cached) {
          return cached;
        }
        return request.mode === "navigate" ? caches.match("index.html") : Response.error();
      });
    })
  );
});
