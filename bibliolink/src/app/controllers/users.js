const fs = require('fs');
const data = require('../../../data.json');

module.exports = {
  home(request, response) {
    return response.render('index');
  },

  create(request, response) {
    const keys = Object.keys(request.body);

    for (let key of keys) {
      if (request.body[key] == '') {
        return response.send('Fill all the fields, please!');
      }
    }

    const user = {
      id,
      ...request.body
    };

    data.users.push(user);

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
      if (err) return response.send('Write Error!');

      return response.redirect('/profile');
      
    });

  },

  profile(request, response) {
    return response.render('profile');
  },
};