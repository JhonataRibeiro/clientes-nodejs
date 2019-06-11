const service = require('../services/clientesService');
const { responseErrorJson, responseJson } = require('../utils/utils');

const get = async (req, res) => {
  try {
    const result = await service.get(req);
    return responseJson(res, result);
  } catch (error) {
    return responseErrorJson(res, 'cliente::get', error);
  }
};

const post = async (req, res) => {
  try {
    const result = await service.create(req);
    return responseJson(res, result);
  } catch (error) {
    return responseErrorJson(res, 'cliente::get', error);
  }
};

const put = async (req, res) => {
  let id = req.params.id;
  try {
    const result = await service.atualiza(req);
    return responseJson(res, result);
  } catch (error) {
    return responseErrorJson(res, 'cliente::get', error);
  }
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

// exports.get = (req, res, next) => {
//   try {
//     Cliente.find().exec(function(err, clientes) {
//       if (err) return handleError(err);
//       res.status(200).send({ clientes: clientes });
//     });
//   } catch (err) {
//     console.log('error: ', err);
//   }
// };

// exports.post = (req, res, next) => {
//   try {
//     var cliente = new Cliente(req.body);
//     cliente.save(function(err, clienteSalvo) {
//       if (err) return handleError(err);
//       res.status(201).send({ cliente: clienteSalvo });
//     });
//   } catch (err) {
//     console.log('error: ', err);
//   }
// };

module.exports = {
  get,
  post,
  put
};
