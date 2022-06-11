const cep = require('cep-promise');

const input = document.querySelector('.input');
const button = document.querySelector('.botao');
const divCEP = document.querySelector('.cep');

button.onclick = () => {
   alert('ola')
}

const searchCEP = async (cepNumber) => {
  const response = await cep(cepNumber);
  
  return divCEP.append(response);
};


