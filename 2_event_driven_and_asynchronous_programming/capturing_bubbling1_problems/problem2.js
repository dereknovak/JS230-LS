let divs = document.querySelectorAll('.pick');

for(let index = 0; index < divs.length; index += 1) {
  divs[index].addEventListener('click', highlightThis, true);
}
    
function highlightThis(e) {
  alert(`${this.className} ${e.currentTarget.tagName}`);
}

document.querySelector('.d3').addEventListener('click', highlightThis, false);

/*
Keeps original order, adds new stuff afterwards

d1 pick DIV
d2 pick MAIN
d4 pick SECTION
d3 DIV
*/