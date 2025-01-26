function processDataPromise(nums, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(nums.map(callback));
    }, 1000);
  });
}


// Example usage:
processDataPromise([1, 2, 3], (number) => number * 2).then((processedNumbers) => {
  console.log(processedNumbers);
  // After 1 second, logs: [2, 4, 6]
});
