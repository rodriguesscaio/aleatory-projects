const Student = require('../models/Student');
const { date, grade } = require('../../lib/utils');

module.exports = {
  index(request, response) {
    Student.all(students => {
      return response.render('students/index', { students });
    });
  },

  create(request, response) {
    Student.teachersSelectOptions((options) => {
      return response.render('students/create', { teachersOptions: options });
    });

  },

  post(request, response) {
    const keys = Object.keys(request.body);

    for (key of keys) {
      if (request.body[key] == '') {
        return response.send('Please, full all fields.')
      }
    };

    Student.create(request.body, student => {
      return response.redirect(`/students/${student.id}`);
    });
  },

  show(request, response) {
    const { id } = request.params;

    Student.find(id, student => {
      if (!student) return response.send('Student not found');

      student.birth = date(student.birth).birthDay;
      student.school_year = grade(student.school_year);

      return response.render('students/show', { student });
    });
  },

  edit(request, response) {
    const { id } = request.params;

    Student.find(id, student => {
      if (!student) return response.send('Student not found');

      student.birth = date(student.birth).iso;

      Student.teachersSelectOptions((options) => {
        return response.render('students/edit', { student, teachersOptions: options });
      });

    });
  },

  update(request, response) {
    const keys = Object.keys(request.body);

    for (key of keys) {
      if (request.body[key] == '') {
        return response.send('Please, full all fields.')
      }
    };

    const { id } = request.body;

    Student.update(request.body, () => {
      return response.redirect(`/students/${id}`);
    });
  },

  delete(request, response) {
    const { id } = request.body;

    Student.delete(id, () => {
      return response.redirect('/students');
    });
  },
};