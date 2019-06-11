const mongodb = require('mongodb');
const express = require('express');
const config = require('./db');

const app = express();
const port = process.env.PORT || 3000;

const client = mongodb.MongoClient;
client.connect(config.DB, function(err, db) {
  if (err) {
    console.log('database is not connected');
  } else {
    console.log('connected!!');
  }
});

app.get('/', function(req, res) {
  res.json({ hello: 'world' });
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
