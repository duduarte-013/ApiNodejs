'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express(); 
const router = express.Router();
 
const Product = require('./models/product');
const Customer = require('./models/customer');

//Conecta ao banco 
mongoose.connect('mongodb+srv://nodestore:nodestore@nodestore.owfw5.mongodb.net/NodeStore?retryWrites=true&w=majority')

//carrega as rotas 
const index = require('./routes/index');
const product = require('./routes/product');
const customer = require('./routes/customer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/', index);
app.use('/products', product);

module.exports = app;
