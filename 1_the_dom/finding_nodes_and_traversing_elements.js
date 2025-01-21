// 1

const h2Headings = document.querySelectorAll('h2');
const wordCounts = [];

h2Headings.forEach(node => {
  const words = node.textContent.match(/[^\s]+/g);
  wordCounts.push(words.length);
});

console.log(wordCounts);

// 2

document.getElementById('toc');
document.querySelector('#toc');
document.getElementsByClassName('toc')[0];

// 3

document.querySelectorAll('#toc a').forEach((node, idx) => {
  if (idx % 2 === 1) {
    node.style.color = 'green';
  }
});

// 4

const captions = [];
const capNodes = document.getElementsByClassName('thumbcaption');

for (let node of capNodes) {
  captions.push(node.textContent.trim());
}

console.log(captions);

// 5

const ranks = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'];
const classification = {};

document.querySelectorAll('.infobox td').forEach(node => {
  const fullContent = node.textContent;
  const content = fullContent.slice(0, fullContent.length - 1);

  if (ranks.includes(content)) {
    const key = content;
    const value = node.nextElementSibling.firstElementChild.textContent;

    classification[key] = value;
  }
});

console.log(classification);
