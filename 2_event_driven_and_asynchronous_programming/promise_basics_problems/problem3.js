function flakyService() {
  return new Promise((resolve, reject) => {
    const outcome = Math.round(Math.random());
    outcome === 0 ? resolve('Operation successful') : reject('Operation failed');
  });
}

flakyService()
  .then((message) => console.log(message))
  .catch((message) => console.log(message));