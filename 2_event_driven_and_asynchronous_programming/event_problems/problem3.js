document.addEventListener('mousemove', (e) => {
  const x = document.querySelector('.x');
  
  x.style.left = String(e.clientX) + 'px';
  x.style.top = String(e.clientY) + 'px';
});

document.addEventListener('keydown', event => {
  let key = event.key;
  let color;
  
  if (key === 'r') {
    color = 'red';
  } else if (key === 'g') {
    color = 'green';
  } else if (key === 'b') {
    color = 'blue';
  }

  if (color) {
    let x = document.querySelector('.x');
    for (let index = 0; index < x.children.length; index += 1) {
      const child = x.children[index];
      child.style.background = color;
    }
  }
});