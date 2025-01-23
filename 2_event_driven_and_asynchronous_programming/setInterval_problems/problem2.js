let counterId;

function startCounting() {
  counterId = setInterval(logNum(), 1000);
}

function stopCounting() {
  clearInterval(counterId);
}

function logNum() {
  let num = 1

  return function() {
    console.log(num++);
  };
}

startCounting();
stopCounting(counterId);