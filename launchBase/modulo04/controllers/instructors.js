const fs = require('fs');

const data = require('../data.json');
const { age, date } = require('../utils');

exports.index = (request, response) => {
  return response.render('instructors/index', { instructors: data.instructors });
}

exports.create = (request, response) => {
  return response.render('instructors/create');
};

exports.post = (request, response) => {
  const keys = Object.keys(request.body);

  for (key of keys) {
    if (request.body[key] === '') {
      return response.send('Please, fill all fields!');
    }
  }

  let { avatar_url, name, birth, services, gender } = request.body;

  birth = Date.parse(birth);
  const created_at = Date.now();
  const id = Number(data.instructors.length + 1);

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at,
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send('Write file error');

    return response.redirect(`/instructors/${id}`);
  });

  // return response.send(request.body);
}

exports.show = (request, response) => {
  const { id } = request.params;

  const foundInstructor = data.instructors.find(instructor => instructor.id == id);

  if (!foundInstructor) {
    return response.send('Instructor not found, try again.');
  };

  const date = new Date(foundInstructor.created_at);

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    services: foundInstructor.services.split(','),
    created_at: new Intl.DateTimeFormat("pt-BR").format(date),
  };

  return response.render('instructors/show', { instructor });
};

exports.edit = (request, response) => {
  const { id } = request.params;

  const foundInstructor = data.instructors.find(instructor => instructor.id == id);

  if (!foundInstructor) {
    return response.send('Not found instructor, try again.');
  }

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth).iso,
  };

  return response.render('instructors/edit', { instructor });
};

exports.put = (request, response) => {
  const { id } = request.body;

  let index = 0;

  const foundInstructor = data.instructors.find((instructor, foundIndex) => {
    if (instructor.id == id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundInstructor) {
    return response.send('Instructor not found');
  };

  const instructor = {
    ...foundInstructor,
    ...request.body,
    birth: Date.parse(request.body.birth),
  };

  data.instructors[index] = instructor;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) return response.send('Write error');

    return response.redirect(`/instructors/${id}`);
  });
};

exports.delete = (request, response) => {
  const { id } = request.body;

  const filteredInstructors = data.instructors.filter(instructor => instructor.id != id);

  data.instructors = filteredInstructors;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if(err) return response.send('Write error');

    return response.redirect('/instructors');
  });
};