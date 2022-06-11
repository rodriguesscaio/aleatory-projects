const cards = document.querySelectorAll('.card');
const span = document.querySelector('.spanClick');
const divIngredients = document.querySelector('.ingredients');

for (let card of cards) {
  card.addEventListener('click', () => {
    const cardId = card.getAttribute('id');

    window.location.href = `/recipes/${cardId}`;
  });
};

span.addEventListener('click', () => {
  let content = span.textContent;

  if (content === 'ESCONDER') {
    divIngredients.querySelector('ul').classList.add('hide');
    span.innerHTML = 'MOSTRAR';
  } else {
    divIngredients.querySelector('ul').classList.remove('hide');
    span.innerHTML = 'ESCONDER';
  }
});

const span2 = document.querySelector('.span2Hide');
const divPrepare = document.querySelector('.prepare');

span2.addEventListener('click', () => {
  let content = span2.textContent;

  if (content === 'ESCONDER') {
    divPrepare.querySelector('ol').classList.add('hide');
    span2.innerHTML = 'MOSTRAR';
  } else {
    divPrepare.querySelector('ol').classList.remove('hide');
    span2.innerHTML = 'ESCONDER';
  }
});

const span3 = document.querySelector('.hideShow');
const divAddInformation = document.querySelector('.add-information');

span3.addEventListener('click', () => {
  let content = span3.textContent;

  if (content === 'ESCONDER') {
    divAddInformation.querySelector('p').classList.add('hide');
    span3.innerHTML = 'MOSTRAR';
  } else {
    divAddInformation.querySelector('p').classList.remove('hide');
    span3.innerHTML = 'ESCONDER';
  }
});

const links = document.querySelectorAll('header .links a');

for (let link of links) {
  if (location.pathname.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
}
