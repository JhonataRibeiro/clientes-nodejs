const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agenciaSchema = new Schema({
  banco: { type: String },
  agencia: { type: Number },
  nomeAgencia: { type: String },
  conta: { type: Number }
});

const agencia = mongoose.model('Agencia', agenciaSchema);
module.exports = agencia;
