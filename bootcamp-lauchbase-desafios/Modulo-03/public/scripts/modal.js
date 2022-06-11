const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', () => {
    window.location.href = `/courses/${card.id}`;
  });
}
