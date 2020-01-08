const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

const app = express();
app.use(morgan('dev'));
app.use('/users', userRoutes);
app.use('/products', productsRoutes);

module.exports = app;