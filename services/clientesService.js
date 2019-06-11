const Cliente = require('../models/cliente');

const get = req => {
  const { _id } = req.params;
  const options = _id ? _id : req.query;

  const method = _id ? 'findById' : 'find';
  return Cliente[method](options).then(result => result);
};

const create = req => {
  console.log('req no servico', req);
  const { body } = req;
  return Cliente.create(body).then(result => result);
};

module.exports = {
  create,
  get
};
