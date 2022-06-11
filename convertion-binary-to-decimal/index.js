const inputElement = document.querySelector('.entrada');
const divNumero = document.querySelector('.numero');
const buttonElement = document.querySelector('.button');
const message = document.querySelector('.message');

buttonElement.onclick = () => {
  divNumero.innerHTML = '';

  inputElement.value = '';
}

const value = inputElement.value;


function updateValueRealTime() {
  const value = inputElement.value;

  if (value.length > 16) {
    return divNumero.innerHTML = 'O limite é 8 digítos binário.'
  }

  const arrayNumber = value.toString().split('');

  function verifyNumbers(array) {
    return array > 1;
  }

  const verify = arrayNumber.some(verifyNumbers);

  if (verify === true) {
    return divNumero.innerHTML = 'Não há apenas 0 e 1, tente novamente.'
  }

  const parseValue = parseInt(value, 2);

  if (!parseValue) {
    return divNumero.innerHTML = '';
  }

  const div = divNumero.innerHTML = parseValue;
}

setInterval(updateValueRealTime, 1);