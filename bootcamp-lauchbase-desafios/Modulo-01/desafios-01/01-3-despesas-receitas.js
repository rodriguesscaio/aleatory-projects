const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9],
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 13.5, 19.9],
  },
  {
    nome: "Lucia",
    receitas: [9.8, 12.3, 340.2, 45.3],
    despesas: [450.2, 29.9],
  },
];

function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas);
  const somaDespesas = somaNumeros(despesas);

  return somaReceitas - somaDespesas;
}

function somaNumeros(numeros) {
  soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
  }

  return soma;
}

for (let usuario of usuarios) {
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas);

  if (saldo > 0) {
    console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`);
  } else {
    console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`);
  }
}
