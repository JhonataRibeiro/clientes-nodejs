const Agencia = require('../models/agencia');

exports.get = (req, res, next) => {
  try {
    Agencia.find().exec(function(err, agencias) {
      if (err) return handleError(err);
      res.status(200).send({ agencias: agencias });
    });
  } catch (err) {
    console.log('error: ', err);
  }
};

exports.post = (req, res, next) => {
  try {
    var agencia = new Agencia(req.body);
    agencia.save(function(err, agencia) {
      if (err) return handleError(err);
      res.status(201).send({ agencia: agencia });
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
