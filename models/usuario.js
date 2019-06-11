const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clientes', {
  useNewUrlParser: true
});

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, default: '' },
  email: { type: String, default: '' },
  cep: { type: String, default: '' },
  bairro: { type: String, default: '' },
  agencia: { type: Number },
  conta: { type: Number }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;
