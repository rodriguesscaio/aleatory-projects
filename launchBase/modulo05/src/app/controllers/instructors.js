const Instructor = require('../models/Instructor');
const { age, date } = require('../../lib/utils'); 

module.exports = {
  index(request, response) {
    let { filter, page, limit } = request.query;

    page = page || 1;
    limit = limit || 2;
    let offset = limit * (page - 1);

    const params = {
      filter,
      page,
      limit,
      offset,
      callback(instructors) {

        const pagination = {
          total: Math.ceil(instructors[0].total / limit),
          page
        };
        return response.render('instructors/index', { instructors, pagination, filter });
      },
    };

    Instructor.paginate(params);
  },

  create(request, response) {
    return response.render('instructors/create');
  },

  post(request, response) {
    const keys = Object.keys(request.body);

    for (let key of keys) {
      if (request.body[key] == '') return response.send('Please, fill all the fields');
    };

    Instructor.create(request.body, (instructor) => {
      return response.redirect(`/instructors/${instructor.id}`);
    });
  },

  show(request, response) {
    const { id } = request.params;

    Instructor.find(id, (instructor) => {
      if (!instructor) return response.send('Instructor not found!');

      instructor.age = age(instructor.birth);
      instructor.services = instructor.services.split(',');

      instructor.create_at = date(instructor.create_at).format;
      
      return response.render('instructors/show', { instructor });
    });
  },

  edit(request, response) {
    const { id } = request.params;

    Instructor.find(id, (instructor) => {
      if (!instructor) response.send('Instructor not found!');

      instructor.birth = date(instructor.birth).iso;

      return response.render('instructors/edit', { instructor });
    });
  },

  put(request, response) {
    const keys = Object.keys(request.body);

    for (let key of keys) {
      if (request.body[key] == '') return response.send('Please, fill all the fields');
    };

    const { id } = request.body;

    Instructor.update(request.body, () => {
      return response.redirect(`/instructors/${id}`);
    });
  },

  delete(request, response) {
    const { id } = request.body;

    Instructor.delete(id, () => {
      return response.redirect('/instructors');
    });
  },
};