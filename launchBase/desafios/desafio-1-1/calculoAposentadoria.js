const nome = 'Joana';
const sexo = 'F';
const idade = 70;
const contribuicao = 25;

const calculoContribuicao = idade + contribuicao;

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95;
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85;

if (homemPodeAposentar || mulherPodeAposentar) {
  console.log(`${nome}, você pode se aposentar!`);
} else {
  console.log(`${nome}, você não pode se aposentar!`);
}