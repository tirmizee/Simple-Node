const express = require('express');
const fs = require('fs');

const router = express.Router();

const handlerGetIndex = (req, res, next) => {
    res.status(200).json({
        message : 'Handing GET request to /products'
    });
}

const handlerGetById =  (req, res, next) => {
    const id = req.params.id;
    fs.readFile('./resources/products.json', 'utf-8', (err, data) => {
        const products = JSON.parse(data);
        const product = products[id];
        res.send(product);
    });
 }

router.get('/', handlerGetIndex);
router.get('/:id', handlerGetById);
module.exports = router;