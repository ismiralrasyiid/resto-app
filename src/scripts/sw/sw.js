/* eslint-disable no-restricted-globals */
import { precache } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precache(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  self.skipWaiting();
});

registerRoute(({ url }) => url.pathname.startsWith('/'), new StaleWhileRevalidate());
