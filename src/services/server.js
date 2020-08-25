const express = require('express');
const nunjucks = require('nunjucks');
const Pool = require('pg').Pool;
const database = require('./database/db');

const server = express();

server.use(express.static('src/static'));
server.use(express.urlencoded({ extended: true }));

nunjucks.configure('src/pages', {
  express: server,
  noCache: true,
});

const db = new Pool(database);

server.get('/', function (req, res) {
  db.query('SELECT * FROM donors', function (err, result) {
    if (err) return res.render('erro.html');
    const empty = 'Sem doadores. Clique em Quero Ajudar e faça uma doação!';
    const donors = result.rows;
    if (donors == '') {
      return res.render('index.html', { empty });
    } else {
      return res.render('index.html', { donors });
    }
  });
});

server.post('/', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const blood = req.body.blood;

  if (name == '' || email == '' || blood == '') {
    db.query('SELECT * FROM donors', function (err, result) {
      const donors = result.rows;
      return res.render('index.html', { valor: 'Preencha todos os dados', donors });
    });
  } else {
    const query = `
	INSERT INTO donors ("name", "email", "blood") 
	VALUES ($1, $2, $3)`;

    const values = [name, email, blood];

    db.query(query, values, function (err) {
      if (err) return res.render('erro.html');
      return res.redirect('/');
    });
  }
});

server.listen(3000);
