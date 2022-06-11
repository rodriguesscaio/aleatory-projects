const User = require('../models/User');
const { compare } = require('bcryptjs');

async function login(request, response, next) {
  const { email, password } = request.body;

  const user = await User.findOne({ where: { email } });

  if (!user) return response.render('session/login', {
    user: request.body,
    error: 'Usuário não cadastrado!',
  });

  const passed = await compare(password, user.password);

  if(!passed) return response.render('session/login', {
    user: request.body,
    error: 'Senha incorreta.'
  });

  request.user = user;

  next();
};

async function forgot(request, response, next) {
  const { email } = request.body;

  try {
    let user = await User.findOne({ where: { email } });

    if (!user) return response.render('session/forgot-password', {
      user: request.body,
      error: 'Email não cadastrado!',
    });

    request.user = user;

    next();

  } catch(err) {
    console.log(err);
  }
};

async function reset(request, response, next) {
  // procurar o usuário
  const { email, password, passwordRepeat, token } = request.body;
  
  const user = await User.findOne({ where: {email} });

  if (!user) return response.render('session/password-reset', {
    user: request.body,
    token,
    error: 'Usuário não cadastrado!'
  });
  // ver se a senha bate
  if (password !== passwordRepeat) 
    return response.render('session/password-reset', {
      user: request.body,
      token,
      error: 'A senha e a repetição da senha estão incorretas.'
    });
  // verificar se o token bate
  if (token !== user.reset_token) 
    return response.render('session/password-reset', {
      user: request.body,
      token,
      error: 'Token inválido! Solicite uma nova recuperação de senha.'
    });

  // verificar se o token não expirou

  let now = new Date();
  now = now.setHours(now.getHours());

  if (now > user.reset_token_expires)
    return response.render('session/password-reset', {
      user: request.body,
      token,
      error: 'Token expirado! Por favor, solicite uma nova recuperação de senha.'
    });

  request.user = user;

  next();
};

module.exports = {
  login,
  forgot,
  reset
};