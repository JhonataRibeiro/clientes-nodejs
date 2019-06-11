const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agenciaSchema = new Schema({
  bairro: { type: String, default: '' },
  agencia: { type: Number },
  conta: { type: Number }
});

const Agencia = mongoose.model('Agencia', agenciaSchema);
module.exports = Agencia;
