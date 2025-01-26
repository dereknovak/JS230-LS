function performOperation() {
  return new Promise((resolve) => {
    resolve('Operation complete');
  });
}

performOperation()
  .then(console.log)
  .finally(() => console.log('Cleaning resourses...'));