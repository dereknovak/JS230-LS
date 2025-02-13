let h1 = document.getElementById('result');
const form = document.querySelector('form');

const Calculate = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const firstNum = +form['first-number'].value;
  const secondNum = +form['second-number'].value;
  const operator = form['operator'].value;

  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert('Must input a numeric value');
    return;
  }

  let result = Calculate[operator](firstNum, secondNum);
  h1.textContent = String(result);
});