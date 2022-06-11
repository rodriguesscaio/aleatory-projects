const fs = require('fs');

const data = require('../data.json');
const { age, graduation, date } = require('../utils');

exports.index = (request, response) => {
  const teachers = data.teachers.map(teacher => {
    return {...teacher, area: teacher.area.split(',')}
  });

  return response.render('teachers/index', { teachers });
};

exports.create = (request, response) => {
  return response.render('teachers/create');
}

exports.post = (request, response) => {
  let { avatar_url, name, birth, degreeSchool, typeClass, area } = request.body;

  const keys = Object.keys(request.body);

  for (let key of keys) {
    if (request.body[key] === '' || request.body[key] === 'Selecione aqui') return response.send('Fill all the fields, please.');
  }

  birth = Date.parse(request.body.birth);
  const id = Number(data.teachers.length + 1);
  const created_at = Date.now();

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    degreeSchool,
    typeClass,
    area,
    created_at
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send('Write file error');

    return response.redirect(`/teachers/${id}`);
  });
};

exports.show = (request, response) => {
  const { id } = request.params;

  const foundTeacher = data.teachers.find(teacher => teacher.id == id);

  if (!foundTeacher) {
    return response.send('Teacher not found, try again.')
  }

  const teacher = {
    ...foundTeacher,
    birth: age(foundTeacher.birth),
    area: foundTeacher.area.split(','),
    degreeSchool: graduation(foundTeacher.degreeSchool),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
  };

  return response.render('teachers/show', { teacher });
};

exports.edit = (request, response) => {
  const { id } = request.params;

  const foundTeacher = data.teachers.find(teacher => teacher.id == id);

  if (!foundTeacher) {
    return response.send('Teacher not found, try again.');
  }

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth).iso,
    degreeSchool: graduation(foundTeacher.degreeSchool),
  };

  return response.render('teachers/edit', { teacher });
};

exports.update = (request, response) => {
  const { id } = request.body;

  let index = 0;

  const foundTeacher = data.teachers.find((teacher, foundIndex) => {
    if (teacher.id == id) {
      index = foundIndex;
      return true;
    };
  });

  if (!foundTeacher) {
    return response.send('Teacher not found.');
  }

  const teacher = {
    ...foundTeacher,
    ...request.body,
    id: Number(request.body.id),
    birth: Date.parse(request.body.birth),
  };

  data.teachers[index] = teacher;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if(err) return response.send('Write error');

    return response.redirect(`/teachers/${id}`);
  });
};

exports.delete = (request, response) => {
  const { id } = request.body;

  const filteredTeachers = data.teachers.filter(teacher => teacher.id != id);

  data.teachers = filteredTeachers;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send('Write error');

    return response.redirect('/teachers');
  });
};