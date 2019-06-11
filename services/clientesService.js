const Cliente = require('../models/cliente');

const get = req => {
  const { _id } = req.params;
  const options = _id ? _id : req.query;

  const method = _id ? 'findById' : 'find';
  return Cliente[method](options).then(result => result);
};

const create = req => {
  const { body } = req;
  return Cliente.create(body).then(result => result);
};

const atualiza = req => {
  const { _id } = req.params;
  console.log('_id', _id);
  const { body } = req;

  return Cliente.findByIdAndUpdate(_id, body);

  // return Cliente.update(body).then(result => result);
};

module.exports = {
  create,
  get,
  atualiza
};
