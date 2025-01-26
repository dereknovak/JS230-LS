function processData(nums, callback) {
  setTimeout(() => {
    console.log(nums.map(callback));
  }, 1000);
}

// Example usage:
processData([1, 2, 3], (number) => number * 2);
// After 1 second, logs: [2, 4, 6]