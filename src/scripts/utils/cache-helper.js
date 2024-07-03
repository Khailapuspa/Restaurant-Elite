const CacheHelper = {
  async cachingAppShell(requests) {
    const cache = await caches.open('app-shell');
    await cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== 'app-shell')
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);
    if (response) {
      return response;
    }
    return fetch(request);
  },
};

export default CacheHelper;
