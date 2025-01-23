function startCounting() {
  setInterval(logNum(), 1000);
}

function logNum() {
  let num = 1

  return function() {
    console.log(num++);
  };
}

startCounting();