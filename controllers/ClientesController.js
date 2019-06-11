const Usuario = require('../models/usuario');

exports.get = (req, res, next) => {
  try {
    Usuario.find().exec(function(err, usuarios) {
      if (err) return handleError(err);
      res.status(200).send({ clientes: usuarios });
    });
  } catch (err) {
    console.log('error: ', err);
  }
};

exports.post = (req, res, next) => {
  try {
    var usuario = new Usuario(req.body);
    usuario.save(function(err, usuario) {
      if (err) return handleError(err);
      res.status(201).send({ cliente: usuario });
    });
  } catch (err) {
    console.log('error: ', err);
  }
};

exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
