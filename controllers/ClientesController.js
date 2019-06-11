const Cliente = require('../models/cliente');

exports.get = (req, res, next) => {
  try {
    Cliente.find().exec(function(err, clientes) {
      if (err) return handleError(err);
      res.status(200).send({ clientes: clientes });
    });
  } catch (err) {
    console.log('error: ', err);
  }
};

exports.post = (req, res, next) => {
  try {
    var cliente = new Cliente(req.body);
    cliente.save(function(err, clienteSalvo) {
      if (err) return handleError(err);
      res.status(201).send({ cliente: clienteSalvo });
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
