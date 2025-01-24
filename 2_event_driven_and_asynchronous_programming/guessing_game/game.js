document.addEventListener('DOMContentLoaded', () => {
  const answer = Math.floor(Math.random() * 100) + 1;
  const input = document.getElementById('guess');
  const form = document.querySelector('form');
  let guess;

  // console.log(input);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    guess = parseInt(input.innerText);
  });

  console.log(guess);
});

// Unfinished