self.addEventListener('install', (e) => {
  console.log('App install ho rahi hai');
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Yeh bas app ko PWA pass (installable) hone ke liye zaroori hota hai
});
