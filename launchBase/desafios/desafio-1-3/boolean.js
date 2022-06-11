const classA = [
  {
    name: 'Mayk',
    grade: 10.0,
  },
  {
    name: 'Caio',
    grade: 10,
  },
  {
    name: 'Jun',
    grade: 3,
  },
  {
    name: 'Carlito',
    grade: 4,
  },
];

function markAsFlunked(student) {
  student.flunked = false;

  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendFlunkedMessage(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is FLUNKED!`);
  }
}

function studentsFlunkeds(students) {
  for (student of students) {
    markAsFlunked(student);
    sendFlunkedMessage(student);
  }
}

studentsFlunkeds(classA);