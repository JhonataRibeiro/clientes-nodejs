const express = require('express');
const config = require('./config/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.DB, {
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);
app.use('/', require('./routes/index.js'));

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
