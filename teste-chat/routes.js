const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.render('index.html');
});

module.exports = routes;