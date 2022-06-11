const fs = require('fs');
const data = require('../data.json');

module.exports = {
  index: (request, response) => {
    return response.render('admin/index', { recipes: data.recipes });
  },

  show: (request, response) => {
    const { id } = request.params;

    const foundRecipe = data.recipes.find(recipe => recipe.id == id);

    if (!foundRecipe) return response.send('Recipe not found, try again.');

    return response.render('admin/show', { recipe: foundRecipe });
  },

  create: (request, response) => {
    return response.render('admin/create');
  },

  post: (request, response) => {
    const keys = Object.keys(request.body);

    for (key of keys) {
      if (request.body[key] == '') return response.send('Fill all the fields, please!');
    };

    const { image, title, author, ingredients, preparation, information } = request.body;

    let id = 1;

    const lastRecipe = data.recipes[data.recipes.length - 1];

    if (lastRecipe) {
      id = lastRecipe.id + 1;
    }


    const recipe = {
      id,
      image,
      title,
      author,
      ingredients,
      preparation,
      information
    };

    data.recipes.push(recipe);

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) return response.send('Write error');

      return response.redirect(`/admin/recipes/${id}`);
    });

  },

  edit: (request, response) => {
    const { id } = request.params;

    const foundRecipe = data.recipes.find(recipe => recipe.id == id);

    if (!foundRecipe) return response.send('Recipe not exists, try again.');

    return response.render('admin/edit', { recipe: foundRecipe });
  },

  put: (request, response) => {
    let { id } = request.body;

    let index = 0;
    
    const foundRecipe = data.recipes.find((recipe, foundIndex) => {
      if (recipe.id == id) {
        index = foundIndex;
        return true;
      }
    });

    if (!foundRecipe) return response.send('Recipe not found, try again.');

    const recipe = {
      ...request.body,
      id: Number(request.body.id),
    };

    data.recipes[index] = recipe;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) return response.send('Write error');

      return response.redirect(`/admin/recipes/${id}`);
    });
  },

  delete: (request, response) => {
    const { id } = request.body;

    const filteredRecites = data.recipes.filter(recipe => recipe.id != id);

    data.recipes = filteredRecites;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) return response.send('Write error');

      return response.redirect('/admin/recipes');
    });
  },
};