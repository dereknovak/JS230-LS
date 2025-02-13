const teamModals = [
  {
    name: 'Kevin Wang',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor',
    picSource: 'images/img_kevin.jpg',
  },
  {
    name: 'Louis Burton',
    about: 'Es importante cuidar al paciente, ser seguido por el paciente, pero al mismo tiempo suponen mucho trabajo y dolor. Para que pueda sufrir lo más mínimo',
    picSource: 'images/img_louis.jpg',
  },
  {
    name: 'Kasper Salto',
    about: "Il est important de prendre soin du patient, d'être suivi par le patient, mais en même temps, cela représente beaucoup de travail et de douleur. Pour que je puisse souffrir le moins possible",
    picSource: 'images/img_kasper.jpg',
  },
  {
    name: 'Chris Lee',
    about: 'It is important to take care of the patient, to be followed by the patient, but at the same time they occur as a lot of work and pain. In order that I may suffer to the smallest degree',
    picSource: 'images/img_chris.jpg',
  },
];

function determineAlt(target) {
  return target.tagName === 'IMG' ?
         target.alt :
         target.querySelector('img').alt;
}

function showModal(e) {
  e.preventDefault();
  modalLayer.classList.replace('hide', 'show');
  modal.classList.replace('hide', 'show');
}

function hideModal(e) {
  e.preventDefault();
  modalLayer.classList.replace('show', 'hide');
  modalLayer.classList.replace('show', 'hide');
}

function populateModal(name) {
  const profile = teamModals.find(profile => profile.name === name);

  const id = name.toLowerCase().split().join('-');
  const image = document.getElementById('headshot');
  const h3 = modal.querySelector('h3');
  const p = modal.querySelector('p');

  h3.textContent = name;
  p.textContent = profile.about;
  image.src = profile.picSource;
}

const divTeam = document.getElementById('team');
const modal = document.getElementById('modal');
const modalLayer = document.getElementById('modal-layer');

divTeam.addEventListener('click', e => {
  if (['A', 'IMG'].includes(e.target.tagName)) {
    e.preventDefault();

    const alt = determineAlt(e.target);
    populateModal(alt);
    showModal(e);
  }
});

modal.addEventListener('click', e => {
  e.preventDefault();
  console.log('Image Clicked');
  hideModal(e);
});

/* Almost finished with project, just ironing out animation */