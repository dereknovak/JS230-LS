document.addEventListener('mousemove', (e) => {
  const x = document.querySelector('.x');
  
  x.style.left = String(e.clientX) + 'px';
  x.style.top = String(e.clientY) + 'px';
});