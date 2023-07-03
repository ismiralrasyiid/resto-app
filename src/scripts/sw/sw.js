/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import cacheHelper from './cacheHelper';

const cacheName = 'RESTAURANT_CATALOGUE_V2';
const manifest = self.__WB_MANIFEST;
const manifestURLs = manifest.map((entry) => {
  const url = new URL(entry.url, self.location);
  return url.href;
});

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(cacheHelper.precacheManifest(cacheName, manifestURLs));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(cacheHelper.deleteOldCache(cacheName));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheHelper.revalidateCache(cacheName, event.request));
});
