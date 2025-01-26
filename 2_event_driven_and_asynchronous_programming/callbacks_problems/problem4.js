function waterfallOverCallbacks(callbacks, arg) {
  callbacks.forEach(callback => {
    arg = callback(arg);
  });

  console.log(arg);
}

// Example usage:
const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Logs: 8