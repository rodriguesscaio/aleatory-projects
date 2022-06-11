const links = document.querySelectorAll('header .links a');

for (let link of links) {
  if (location.pathname.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
}