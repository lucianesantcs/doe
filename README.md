![banner](https://raw.githubusercontent.com/lucianesantcs/Doe/master/public/mockup.png)

# Doe

O projeto DOE é um sistema de cadastro para doadores de sangue, desenvolvido na Maratona Dev pela Rocketseat.

## Overview

Além do que foi usado nas aulas, algumas melhorias foram feitas no CSS em alguns detalhes visuais, também utilização de Media Queries para responsividade, e no back end tratamento visual na parte de erro do banco de dados e afins.

### Previews

Screens das telas encontram-se na pasta `./public`

## Tecnologias

- HTML e CSS
- JavaScript
- NodeJS
- PostgreSQL
- Nunjucks
- Nodemon

## Como usar

Faça um clone deste repositório:

```sh
  $ git clone https://github.com/lucianesantcs/Doe.git
```

Instale as dependências:

```sh
  # com npm
  $ npm install

  # com yarn
  $ yarn install
```

### Conexão com banco de dados

Crie uma nova conexão do PostgresSQL, altere as variáveis de ambiente no arquivo `.env` <br>
Seu banco de dados irá precisar de uma tabela chamada `donors`, com os campos `name`, `email`, e `blood` <br>
Mas você pode alterar tudo como desejar no arquivo `server.js` na pasta `/src/services`

### Inicie o projeto

Entre na pasta do projeto e inicie:

```sh
  # com npm
  $ npm start

  # com yarn
  $ yarn start
```

Acesse o projeto em `localhost:3000`

## Author

**Luciane Santos**

- Email: lucianesantcs@gmail.com
- GitHub: [@lucianesantcs](https://github.com/lucianesantcs)
- LinkedIn: [@lucianesantcs](https://linkedin.com/in/lucianesantcs)

## License

Copyright © 2020 Luciane Santos / Rocketseat
