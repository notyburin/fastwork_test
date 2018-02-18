'use strict';

const express = require('express');
const cors = require('cors')

const PORT = 3030;

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'mysql',
    user : 'root',
    password : 'example',
    database : 'myapp_test'
  }
});

const app = express();

app.use(cors());

app.use(express.static('build'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.get('/employees', (req, res) => {
  knex.select('*')
    .from('employees')
    .then((data) => {
      res.send(data);
    });
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);