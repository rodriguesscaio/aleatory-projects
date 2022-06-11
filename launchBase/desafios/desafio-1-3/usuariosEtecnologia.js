const usuarios = [
  { nome: 'Caio', tecnologias: ['JavaScript', 'CSS', 'HTML'] },
  { nome: 'Jasmine', tecnologias: ['Java', 'Laravel'] },
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
}
