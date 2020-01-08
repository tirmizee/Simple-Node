const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handing GET request to /products'
    });
 });
 
 router.get('/:id', (req, res, next) => {

    const id = req.params.id;

    fs.readFile('./resources/products.json', 'utf-8', (err, data) => {
        const products = JSON.parse(data);
        const product = products[id];
        res.send(product);
    });

 });
 
 module.exports = router;