const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (request, response) => {
  const about = {
    avatar_url: 'https://avatars1.githubusercontent.com/u/58239862?s=460&u=5c4318b8e4cd101efa45b9ed92b3e1af78534a3d&v=4',
    name: 'Caio Rodrigues',
    role: 'Estudante da Rocketseat',
    description: 'Programador iniciante full-stack, adquirindo conhecimento das melhores tecnologias Web.',
    links: [
      { name: 'Github', url: 'https://github.com/rodrigues-caio' },
      { name: 'Twitter', url: 'https://twitter.com' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/caio-rodrigues-442b08b2' },
    ],
  };

  return response.render('about', { about });
});

server.get('/portfolio', (request, response) => {
  response.render('portfolio', { items: videos });
});

server.get('/video', (request, response) => {
  const id = request.query.id;

  const video = videos.find(video => {
    return (video.id === id); 
  });
  
  if (!video) {
    return response.send('Video not found!');
  };

  return response.render('video', { item: video });
});

server.listen(5000, () => {
  console.log('server is running!')
});