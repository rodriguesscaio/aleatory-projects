// importar a dependência do sqlite
const sqlite3 = require('sqlite3').verbose();

// criar o objeto que irá fazer operações no bd
const db = new sqlite3.Database('./src/database/database.db');

 // utilizar o objeto de banco de dados, para nossas operações
/* db.serialize(() => {
  // Criar uma tabela com comando SQL
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT 
    ); 
  `);

  // Inserir dados na tabela
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
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80",
    "Outra COleta",
    "Guilherme Gemballa, Jardim América",
    "Número 260",
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos Eletrônicos, Lâmpadas"
  ];

  function afterInsertData(err) {
    if (err) {
      return console.log(err);
    }

    console.log('Cadastrado com sucesso!');
    console.log(this);
  }

 db.run(query, values, afterInsertData); // trocas os valores de uma maneira dinâmica

  // Consultar os dados da tabela
  /* db.all(`SELECT name FROM places`, function(err, rows) {
    if (err) {
      console.log(err);
    }

    console.log("Aqui estão os seus registros: ")
    console.log(rows);
  }); */
  // Deletar um dado da tabela

/*   db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    if (err) {
      console.log(err);
    }

    console.log('Registro deletado com sucesso');
  }); 
}); 

*/



module.exports = db;