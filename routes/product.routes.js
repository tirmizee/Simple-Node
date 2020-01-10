const express = require('express');
const fs = require('fs');

const router = express.Router();
const path = './resources/products.json';

const handlerGetIndex = (req, res, next) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        const products = JSON.parse(data);
        res.status(200).json(product);
    });
}

const handlerGetById =  (req, res, next) => {
    const id = req.params.id;
    fs.readFile(path, 'utf-8', (err, data) => {
        const products = JSON.parse(data);
        const product = products[id];
        res.send(product);
    });
 }

 handlerPostProductById = (req, res, next) => {

    const id = req.body.id;
    fs.readFile(path, 'utf-8', (err, data) => {
        let products = JSON.parse(data);
        let product = products[id];
        res.send(product);
    });

 }

router.get('/', handlerGetIndex);
router.get('/:id', handlerGetById);
router.post('/product', handlerPostProductById);
module.exports = router;