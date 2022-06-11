// Crie um programa para calcular o IMC e nível de obesidade
// de uma pessoa.

const nome = 'Caio';
const peso = 110;
const altura = 1.80;
const sexo = 'M';

const imc = peso / (altura * altura);
console.log(imc);

if (imc >= 30) {
  console.log(`${nome} você está acima do peso`);
} else {
  console.log(`${nome} você não está acima do peso`);
}