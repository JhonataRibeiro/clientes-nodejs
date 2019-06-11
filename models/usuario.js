const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nome: { type: String, default: '' },
  email: { type: String, default: '' },
  cep: { type: String, default: '' },
  bairro: { type: String, default: '' },
  agencia: { type: Number },
  conta: { type: Number }
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;
