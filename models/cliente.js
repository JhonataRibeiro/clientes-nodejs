const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { agencia } = require('../models/agencia');

const clienteSchema = new Schema({
  nome: { type: String, default: '' },
  email: { type: String, default: '' },
  cep: { type: String, default: '' },
  bairro: { type: String, default: '' },
  agencia: [{ type: Schema.Types.ObjectId, ref: 'Agencia' }]
});

const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;
