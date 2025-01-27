function loadData() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.33) {
      resolve('Data loaded');
    } else {
      reject('Network error');
    }
  });
}

loadData()
  .then(console.log)
  .catch(() => console.log('Using cached data'));

// Solution (Different method)

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  }).catch(() => {
    console.error("An error occurred. Attempting to recover...");
    // Return a recovery promise
    return Promise.resolve("Using cached data");
  });
}

loadData().then(console.log);
// Logs "Data loaded" or "Using cached data"