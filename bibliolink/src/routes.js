const express = require('express');
const users = require('./app/controllers/users');

const routes = express.Router();

routes.get('/', users.home);
routes.get('/profile', users.profile);
routes.post('/profile', users.create);

module.exports = routes;