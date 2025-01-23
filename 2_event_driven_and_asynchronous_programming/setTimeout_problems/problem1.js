function delayLog() {
  let sec = 1;

  while (sec <= 10) {
    const output = sec;

    setTimeout(() => {
      console.log(output);
    }, output * 1000);

    sec++;
  }
}

delayLog();