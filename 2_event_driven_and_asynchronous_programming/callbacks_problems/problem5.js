function startCounter(callback) {
  let num = 1;

  const counterID = setInterval(() => {
    if (callback(num)) clearInterval(counterID);
    num++;
  }, 1000);
}

// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops