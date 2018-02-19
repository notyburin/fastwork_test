'use strict';

const express = require('express');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());
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

app.post('/employees', (req, res) => {
  const employee = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    salary: req.body.salary
  }
  knex.insert(employee)
    .into('employees')
    .then(() => {
      res.send({ message: 'employee created!' });
    });
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);