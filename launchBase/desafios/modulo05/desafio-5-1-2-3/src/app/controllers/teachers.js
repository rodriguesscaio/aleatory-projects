const Teacher = require('../models/Teacher');
const { age, graduation, date } = require('../../lib/utils');

module.exports = {
  index(request, response) {
    const { filter } = request.query;

    if (filter) {
      Teacher.findBy(filter, (teachers) => {
        const updateTeacher = teachers.map(teacher => {
          return {
            ...teacher,
            subjects_taught: teacher.subjects_taught.split(','),
          };
        });

        return response.render('teachers/index', { teachers: updateTeacher, filter });
      });
    } else {
      Teacher.all(teachers => {
        if(!teachers) return response.redirect('/teachers/index');
  
        const updateTeacher = teachers.map(teacher => {
          return {
            ...teacher,
            subjects_taught: teacher.subjects_taught.split(','),
          };
        });
  
        return response.render('teachers/index', { teachers: updateTeacher });
      });
    }
  },

  create(request, response) {
    return response.render('teachers/create');
  },

  post(request, response) {
    const keys = Object.keys(request.body);

    for (let key of keys) {
      if (request.body[key] === '' || request.body[key] === 'Selecione aqui') return response.send('Fill all the fields, please.');
    };

    Teacher.create(request.body, teacher => {
      return response.redirect(`teachers/${teacher.id}`);
    });
  },

  show(request, response) {
    const { id } = request.params;

    Teacher.find(id, teacher => {
      if (!teacher) return response.send('Teacher nor found.');

      teacher.birth_date = age(teacher.birth_date);
      teacher.education_level = graduation(teacher.education_level);
      teacher.subjects_taught = teacher.subjects_taught.split(',');
      teacher.create_at = date(Date.now()).format;

      return response.render('teachers/show', { teacher });
    });
  },

  edit(request, response) {
    const { id } = request.params;

    Teacher.find(id, teacher => {
      if (!teacher) return response.send('Teacher not found.');

      teacher.birth_date = date(teacher.birth_date).iso;

      return response.render('teachers/edit', { teacher });
    });
  },

  update(request, response) {
    const keys = Object.keys(request.body);

    for (let key of keys) {
      if (request.body[key] == '' || request.body[key] === 'Selecione aqui') return response.send('Fill all the fields, please.');
    };

    const { id } = request.body;

    Teacher.update(request.body, () => {
      return response.redirect(`teachers/${id}`);
    });
  },

  delete(request, response) {
    const { id } = request.body;

    Teacher.delete(id, () => {
      return response.redirect('/teachers');
    });
  },
};
