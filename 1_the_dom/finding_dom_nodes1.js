function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

function getElementByTagName(tagName) {
  const matches = [];

  walk(document, node => {
    if (node.nodeName === tagName) {
      matches.push(node);
    }
  });

  return matches;
}

getElementByTagName('P').forEach(node => {
  node.setAttribute('class', 'article-text')
});