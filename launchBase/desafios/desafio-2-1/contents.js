const cards = document.querySelectorAll('.card');
const modelOverlay = document.querySelector('.modal-overlay');

for (let card of cards) {
  const cardId = card.getAttribute('id');
  card.addEventListener('click', () => {
    modelOverlay.classList.add('active');
    modelOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cardId}`;
  });
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modelOverlay.classList.remove('active');
});