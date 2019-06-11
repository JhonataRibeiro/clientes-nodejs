const express = require('express');
const mongodb = require('mongodb');
const config = require('./config/db');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

setTimeout(() => {
  mongoose.connect(config.DB, {
    useNewUrlParser: true
  });
}, 2000);

app.use('/', require('./routes/index.js'));

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
