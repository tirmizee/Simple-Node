const express = require('express');
const app = express();

const userRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

app.use('/users', userRoutes);
app.use('/products', productsRoutes);

module.exports = app;