const express = require('express');
const server = express();

// pegar o banco de dados
const db = require('./database/db');

// Configurar pasta pública
server.use(express.static('public'));

// habilitar o uso do req.body 
server.use(express.urlencoded({ extended: true }));

// utilizando template engine (nunjucks)

const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server.get('/', (request, response) => {
  return response.render('index.html', { title: 'Título' });
});

server.get('/create-point', (request, response) => {

  return response.render('create-point.html');
});

server.post('/savepoint', (request, response) => {
  // inserir dados no banco de dados
  const { image, name, address, address2, state, city, items } = request.body;

  const query = `
  INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  ) VALUES (?,?,?,?,?,?,?);
`
  const values = [
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }

    console.log('Cadastrado com sucesso!');
    console.log(this);

  return response.render('create-point.html', { saved: true });

  }

 db.run(query, values, afterInsertData);

});

server.get('/search', (request, response) => {
  const search = request.query.search;

  if (search == '') {
    return response.render('search-results.html', { total: 0 });
  };

  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
    if (err) {
      return response.send('Cidade não encontrada');
    }

    const total = rows.length;

    return response.render('search-results.html', { places: rows, total });
  });

});

server.get('/search', (request, response) => {
  // pegar os dados no banco de dados
  db.all(`SELECT * FROM places`, function(err, rows) {
    if (err) {
      console.log(err);
      return response.send('Erro no cadastro');
    }

    const total = rows.length;
    // mostrar a página html com os dados do banco de dados
    return response.render('search-results.html', { places: rows, total });
  });
});

server.listen(3002, () => {
  console.log('servidor subiu');
});