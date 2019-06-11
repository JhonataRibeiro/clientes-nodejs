const Cliente = require('../models/cliente');

const get = req => {
  const { id } = req.params;
  const options = id ? id : req.query;

  const method = id ? 'findById' : 'find';
  return Cliente[method](options).then(result => result);
};

const create = req => {
  const { body } = req;
  return Cliente.create(body).then(result => result);
};

const atualiza = req => {
  const { id } = req.params;
  const { body } = req;

  return Cliente.findByIdAndUpdate(id, body, cliente => {
    return cliente;
  });
};

const excluir = req => {
  const { id } = req.params;

  return Cliente.findByIdAndDelete(id, cliente => {
    return cliente;
  });
};

module.exports = {
  create,
  get,
  atualiza,
  excluir
};
