new Promise((resolve) => resolve(7))
  .then((result) => result * 2)
  .then((result) => result + 5)
  .then((result) => console.log(result));
