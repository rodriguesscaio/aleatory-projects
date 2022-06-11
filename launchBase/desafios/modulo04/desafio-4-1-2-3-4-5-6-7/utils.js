module.exports = {
  age: (timestamp) => {
    const dateNow = new Date();

    const birthDate = new Date(timestamp);

    let age = dateNow.getFullYear() - birthDate.getFullYear();

    const month =  dateNow.getMonth() - birthDate.getMonth();

    if ( month < 0 || month == 0 && dateNow.getDate() <= birthDate.getDate() ) {
      age = age - 1;
    }

    return age;
  },

  graduation: (degree) => {
    switch (degree) {
      case 'medio':
        return 'Ensino Médio Completo';
      case 'superior':
        return 'Ensino Superior Completo';
      case 'M':
        return 'Mestrado';
      case 'D':
        return 'Doutorado';
    }
  },

  date: (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();

    const month = `0${date.getUTCMonth() + 1}`.slice(-2);

    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
    };
  },

  grade: (year) => {
    switch (year) {
      case '5EF':
        return '5º ano do Ensino Fundamental';
      case '6EF':
        return '6º ano do Ensino Fundamental';
      case '7EF':
        return '7º ano do Ensino Fundamental';
      case '8EF':
        return '8º ano do Ensino Fundamental';
      case '9EF':
        return '9ª ano do Ensino Fundamental';
      case '1EM':
        return '1º ano do Ensino Médio';
      case '2EM':
        return '2º ano do Ensino Médio';
      case '3EM':
        return '3º ano do Ensino Médio';
    }
  },
};