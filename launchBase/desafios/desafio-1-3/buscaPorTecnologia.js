const usuarios = [
  { nome: 'Caio', tecnologias: ['JavaScript', 'CSS', 'HTML'] },
  { nome: 'Jasmine', tecnologias: ['Java', 'Laravel'] },
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
];

function checaSeUsuarioUsaCSS(usuario) {

  for (let i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] === 'CSS') {
      return true;
    }
  }

  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuario ${usuarios[i].nome} trabalha com CSS`);
  }
}