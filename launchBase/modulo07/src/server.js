const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const session = require('./config/session');

const routes = require('./routes');

const server = express();

server.use(session);
server.use((request, response, next) => {
  response.locals.session = request.session;
  next();
});

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(methodOverride('_method'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure('src/app/views', {
  express: server,
  autoescape: false,
  noCache: true
});


server.listen(5000, () => {
  console.log('server is running!')
});