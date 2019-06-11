const express = require('express');
const mongodb = require('mongodb');
const config = require('./config/db');
const Usuario = require('./models/usuario');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const client = mongodb.MongoClient;

setTimeout(() => {
  mongoose.connect('mongodb://mongo:27017/clientes', {
    useNewUrlParser: true
  });
}, 2000);

setTimeout(() => {
  client.connect('mongodb://mongo:27017/clientes', function(err, db) {
    if (err) {
      console.log('database is not connected', err);
    } else {
      console.log('connected!!');
    }
  });
}, 2000);

app.get('/', function(req, res) {
  res.json({ hello: 'world' });
});

app.get('/cliente', function(req, res) {
  try {
    var usuario = new Usuario({ nome: 'jhonata' });
    usuario.save(function(err) {
      if (err) return handleError(err);
      res.send({
        status: 201,
        message: 'Usuário salvo'
      });
    });

    // console.log('entrou aqui 1');
    // const usuario = new Usuario({ nome: 'Jhonata' });
    // console.log('entrou aqui 2');
    // usuario.save(function() {
    //   console.log('entrou aqui 3');
    //   if (err) return handleError(err);
    //   res.send({
    //     status: 201,
    //     message: 'Usuário salvo'
    //   });
    // });
  } catch (err) {
    console.log('error: ', err);
  }
});

app.get('/listar', function(req, res) {
  try {
    Usuario.find().exec(function(err, clientes) {
      if (err) return handleError(err);

      res.send({
        status: 200,
        clientes: clientes
      });
    });
  } catch (err) {
    console.log('error: ', err);
  }
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
