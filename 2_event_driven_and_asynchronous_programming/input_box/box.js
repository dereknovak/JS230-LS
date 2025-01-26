document.addEventListener('DOMContentLoaded', () => {
  const textField = document.querySelector('.text-field');
  const content = document.querySelector('.content');
  let cursorInterval;

  textField.addEventListener('click', e => {
    e.stopPropagation();
    textField.classList.add('focused');
    console.log(cursorInterval);

    cursorInterval = cursorInterval ?? setInterval(() => textField.classList.toggle('cursor'), 500);
  });

  document.addEventListener('click', e => {
    clearInterval(cursorInterval);
    cursorInterval = null;

    if (textField.classList.contains('focused')) {
      textField.classList.remove('focused');
      textField.classList.remove('cursor');
    }
  });

  document.addEventListener('keydown', e => {
    e.preventDefault();
    const key = e.key;

    if (textField.classList.contains('focused')) {
      if (key === 'Backspace') {
        const text = content.innerText;
        content.innerText = text.slice(0, text.length - 1);
      } else if (key.length === 1) {
        content.innerText += key;
      }
    }
  });
});