const Agencia = require('../models/agencia');

const get = req => {
  const { id } = req.params;
  const options = id ? id : req.query;

  const method = id ? 'findById' : 'find';
  return Agencia[method](options).then(result => result);
};

const create = req => {
  const { body } = req;
  return Agencia.create(body).then(result => result);
};

const atualiza = req => {
  const { id } = req.params;
  const { body } = req;

  return Agencia.findByIdAndUpdate(id, body, agencia => {
    return agencia;
  });
};

const excluir = req => {
  const { id } = req.params;

  return Agencia.findByIdAndDelete(id, agencia => {
    return agencia;
  });
};

module.exports = {
  create,
  get,
  atualiza,
  excluir
};
