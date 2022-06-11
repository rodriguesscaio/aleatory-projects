const cards = document.querySelectorAll('.card');
const modelOverlay = document.querySelector('.modal-overlay');

for (let card of cards) {
  const cardId = card.getAttribute('id');
  card.addEventListener('click', () => {
    window.location.href = `/courses/${cardId}`
  });
};
