const service = require('../services/agenciasService');
const { responseErrorJson, responseJson } = require('../utils/utils');

const get = async (req, res) => {
  try {
    const result = await service.get(req);
    return responseJson(res, result);
  } catch (error) {
    return responseErrorJson(res, 'agencia::get', error);
  }
};

const post = async (req, res) => {
  try {
    const result = await service.create(req);
    return responseJson(res, result);
  } catch (error) {
    return responseErrorJson(res, 'agencia::post', error);
  }
};

const put = async (req, res) => {
  try {
    const result = await service.atualiza(req);
    return responseJson(res, result);
  } catch (error) {
    return responseErrorJson(res, 'agencia::put', error);
  }
};

const excluir = async (req, res) => {
  try {
    const result = await service.excluir(req);
    return responseJson(res, result);
  } catch (error) {
    return responseErrorJson(res, 'agencia::delete', error);
  }
};

module.exports = {
  get,
  post,
  put,
  excluir
};
