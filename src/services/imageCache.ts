export const getImageCache = (cache = {}) => {
  const pendingJobs = {};
  return {
    isImageLoaded(src) {
      return !!(cache[src]);
    },
    loadImage(src) {
      if(!src) {
        return Promise.reject("No src available");
      }
      // If image is already cached on device, return resolved promise
      if(cache[src]) {
        return Promise.resolve(src);
      }
      // If a request is already pending, return existing promise
      if(pendingJobs[src]) {
        return pendingJobs[src];
      }
      const pending = new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          cache[src] = 'success';
          pendingJobs[src] = null;
          image.onload = null;
          image.onerror = null;
          resolve(src);
        };
        image.onerror = (e) => {
          //captureException(e);
          image.onload = null;
          image.onerror = null;
          pendingJobs[src] = null;
          reject(e);
        };
        image.src = src;
      });
      pendingJobs[src] = pending;
      return pending;
    },
  }
};

export const imageCache = getImageCache({});
