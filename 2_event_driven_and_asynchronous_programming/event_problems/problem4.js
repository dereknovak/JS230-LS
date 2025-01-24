document.addEventListener('keydown', e => {
  const MAX = 140;
  const textarea = document.querySelector('.composer textarea');
  const charsRemaining = MAX - textarea.value.trim().length - 1;
  
  const p = document.querySelector('p');
  p.innerText = `${charsRemaining} characters remaining`;
  
  if (charsRemaining < 0) {
    textarea.style.color = 'red';
  } else {
    textarea.style.color = 'black';  
  }
});

// Value of textarea lags

// Solution

document.addEventListener('DOMContentLoaded', () => {
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button = composer.querySelector('button');
  
  function updateCounter() {
    let length = textarea.value.length;
    let remaining = 140 - length;
    let message = `${remaining.toString()} characters remaining`;
    let invalid = remaining < 0;
    
    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;

    counter.textContent = message;    
  }
  
  textarea.addEventListener('keyup', updateCounter);
  
  updateCounter();
});