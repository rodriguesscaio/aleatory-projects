const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const modalInfo = document.querySelector('.modal_info');

const buttonsHeader = document.querySelectorAll('li');

for (let button of buttonsHeader) {
  button.addEventListener('click', () => {
    button.classList.add('active');
  });
}


for (let card of cards) {
  card.addEventListener('click', () => {
    const cardType = card.getAttribute('id');
    const cardInfo = card.querySelector('.card_info');
    const cardTitle = cardInfo.querySelector('h4').innerHTML;
    const cardDescription = cardInfo.querySelector('p').innerHTML;

    modalInfo.querySelector('img').src = `assets/${cardType}.png`;
    modalInfo.querySelector('img').alt = `${cardType}`;

    modalInfo.querySelector('h4').innerHTML = cardTitle;
    modalInfo.querySelector('p').innerHTML = cardDescription;

    modal.classList.add('active');


  });
};

modal.querySelector('a').addEventListener('click', () => {
  modal.classList.remove('active');
});