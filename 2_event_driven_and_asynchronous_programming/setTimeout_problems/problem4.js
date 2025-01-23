function afterNSeconds(callback, sec) {
  setTimeout(callback, sec * 1000);
}

function logger(greeting = 'hi') {
  console.log(greeting);
}

afterNSeconds(logger, 2);

