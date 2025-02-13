function generateListItem(itemName, quantity) {
  const li = document.createElement('li');
  li.textContent = `${quantity} ${itemName}`;
  ul.appendChild(li);
}

const form = document.querySelector('form');
const ul = document.getElementById('grocery-list');

form.addEventListener('submit', e => {
  e.preventDefault();

  const itemName = form['name'].value;
  const quantity = form['quantity'].value || 1;
  generateListItem(itemName, quantity);
  form.reset();
});