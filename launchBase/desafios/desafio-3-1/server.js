const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const cards = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
})

server.get('/courses', (request, response) => {
  response.render('courses', { cards });
});

server.get('/courses/:id', (request, response) => {
  const id = request.params.id;

  const course = cards.find(course => course.id === id );

  if (!course) {
    return response.send('Course not found');
  }

  return response.render('course', { card: course });
});

server.get('/about', (request, response) => {
  response.render('about');
});

server.use((request, response) => {
  response.status(404).render('not-found');
});

server.listen(3333, () => {
  console.log('Server running');
});