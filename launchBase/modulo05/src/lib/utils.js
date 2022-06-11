module.exports = {
  age(timestamp) {
    const dateNow = new Date();
    const birthDate = new Date(timestamp);

    let age = dateNow.getFullYear() - birthDate.getFullYear();

    const month = dateNow.getMonth() - birthDate.getMonth();

    if ( month < 0 || month == 0 
          && dateNow.getDate <= birthDate.getDate() ) {
            age = age - 1;
          }

    return age;
  },

  date(timestamp) {
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
      format: `${day}/${month}/${year}`,
    };
  },
};