const intros = document.getElementsByClassName('intro');

for (let node of intros) {
  const paragraphs = node.getElementsByTagName('p');
  console.log(paragraphs);

  for (let node of paragraphs) {
    node.classList.add('article-text');
  }
}

// Or

const paragraphs = document.querySelectorAll('.intro p');

for (let node of paragraphs) {
  node.classList.add('article-text');
}