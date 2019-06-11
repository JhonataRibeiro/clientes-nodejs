const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
  nome: { type: String, default: '' },
  email: { type: String, default: '' },
  cep: { type: String, default: '' },
  bairro: { type: String, default: '' },
  agencia: { type: Number },
  conta: { type: Number }
});

const Cliente = mongoose.model('Cliente', clienteSchema);
module.exports = Cliente;
