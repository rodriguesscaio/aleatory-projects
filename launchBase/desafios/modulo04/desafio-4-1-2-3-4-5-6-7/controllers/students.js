const fs = require('fs');
const data = require('../data.json');
const { date, grade } = require('../utils');

exports.index = (request, response) => {
  const students = data.students.map(student => {
    return {
      ...student,
      schoolYear: grade(student.schoolYear),
    };
  });

  return response.render('students/index', { students });
};

exports.create = (request, response) => {
  return response.render('students/create');
};

exports.post = (request, response) => {
  const keys = Object.keys(request.body);

  for (key of keys) {
    if (request.body[key] == '') {
      return response.send('Please, full all fields.')
    }
  };

  let id = 1;

  const lastMember = data.students[data.students.length - 1];

  if (lastMember) {
    id = lastMember.id + 1;
  }

  let { birth } = request.body;

  birth = Date.parse(birth);

  const student = {
    id,
    birth,
    ...request.body,
  };

  data.students.push(student);

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send('Write error');

    return response.redirect(`/students/${id}`);
  });
};

exports.show = (request, response) => {
  const { id } = request.params;

  const foundStudent = data.students.find(student => student.id == id);

  if (!foundStudent) {
    return response.send('Student not found, try again.');
  };

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).birthDay,
    schoolYear: grade(foundStudent.schoolYear),
  };

  return response.render('students/show', { student });
};

exports.edit = (request, response) => {
  const { id } = request.params;

  const foundStudent = data.students.find(student => student.id == id);

  if (!foundStudent) {
    return response.send('Student not found, try over.');
  };

  const student = {
    ...foundStudent
  };

  return response.render('students/edit', { student });
};

exports.update = (request, response) => {
  const keys = Object.keys(request.body);

  for (key of keys) {
    if (request.body[key] == '') {
      return response.send('Please, full all the fields');
    };
  };

  let { id } = request.body;

  let index = 0;

  const foundStudent = data.students.find((student, foundIndex) => {
    if (student.id == id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundStudent) {
    return response.send('Student not found, try again.');
  };

  const student = {
    ...foundStudent,
    ...request.body,
    id: Number(request.body.id),
    birth: Date.parse(request.body.birth),
  };

  data.students[index] = student;

  console.log('heello')

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if(err) return response.send('Write error');

    return response.redirect(`/students/${id}`);
  });


};

exports.delete = (request, response) => {
  const { id } = request.body;
  
  const studentsUpdate = data.students.filter(student => student.id != id);

  data.students = studentsUpdate;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send('Write error');

    return response.redirect('/students');
  });
};