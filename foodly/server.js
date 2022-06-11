const express = require('express');
const nunjucks = require('nunjucks');
const methodOverride = require('method-override');

const server = express();
const routes = require('./routes');
const data = require('./data.json');

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});


server.get('/', (request, response) => {
  return response.render('index', { recipes: data.recipes });
});

server.get('/recipes', (request, response) => {
  return response.render('recipes', { recipes: data.recipes });
});

server.get('/recipes/:index', (request, response) => {
  const recipeIndex = request.params.index;
  
  const foundRecipe = data.recipes.find(recipe => recipe.id == recipeIndex);

  if (!foundRecipe) {
    return response.send('Recipe not found!');
  }
  
  return response.render('recipe', { recipe: foundRecipe });
});

server.get('/about', (request, response) => {
  return response.render('about');
});


server.listen(3333, () => console.log('Server on port 3333!'));