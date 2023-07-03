const cacheHelper = {
  async precacheManifest(cacheName, manifestUrls) {
    const cache = await this._openCache(cacheName);
    cache.addAll(manifestUrls);
  },

  async deleteOldCache(cacheName) {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== cacheName)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(cacheName, request) {
    const response = await caches.match(request);

    if (response) {
      this._fetchRequest(cacheName, request);
      return response;
    }
    return this._fetchRequest(cacheName, request);
  },

  async _openCache(cacheName) {
    return caches.open(cacheName);
  },

  async _fetchRequest(cacheName, request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    await this._addCache(cacheName, request);
    return response;
  },

  async _addCache(cacheName, request) {
    const cache = await this._openCache(cacheName);
    cache.add(request);
  },
};

export default cacheHelper;
