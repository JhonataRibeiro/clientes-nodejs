const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { agencia } = require('../models/agencia');

const clienteSchema = new Schema({
  nome: { type: String, required: true, default: '' },
  email: { type: String, default: '' },
  cep: { type: Number, default: '' },
  bairro: { type: String, default: '' },
  agencias: [{ type: Schema.Types.ObjectId, ref: 'Agencia' }]
});

const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;
