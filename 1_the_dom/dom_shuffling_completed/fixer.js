const header = document.querySelector('body > header');
const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const nav = header.querySelector('nav');

const images = main.querySelectorAll('img');
const girlImage = images[0];
const babyImage = images[1];

const figures = document.querySelectorAll('#content figure');
const figure1 = figures[0];
const figure2 = figures[1];

document.body.insertBefore(header, main);
header.insertBefore(h1, nav);

document.querySelector('#content article').insertAdjacentElement('beforeend', figure1);
document.querySelector('#content article').insertAdjacentElement('beforeend', figure2);

document.querySelector('#content figure').insertAdjacentElement('afterbegin', babyImage);
document.querySelectorAll('#content figure')[1].insertAdjacentElement('afterbegin', girlImage);
