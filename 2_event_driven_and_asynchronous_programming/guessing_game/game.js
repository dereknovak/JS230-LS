document.addEventListener('DOMContentLoaded', () => {
  let answer = Math.floor(Math.random() * 100) + 1;
  const input = document.getElementById('guess');
  const form = document.querySelector('form');
  const link = document.querySelector('a');
  const paragraph = document.querySelector('p');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let guess = parseInt(input.value, 10);
    let message;

    if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else if (guess < answer) {
      message = `My number is higher than ${guess}`;
    } else {
      message = 'Correct!';
    }

    paragraph.innerText = message;
  });

  link.addEventListener('click', e => {
    e.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    paragraph.innerText = 'Guess a number from 1 to 100';
    input.value = '';
  });
});
