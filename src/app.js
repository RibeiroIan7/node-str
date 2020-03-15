'use strict';

//Importando 
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

//carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
 
//configurando utilização bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//usando rotas
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;