const express = require('express');
const fs = require('fs');

const router = express.Router();
const path = './resources/banks.json';

let handlerGetIndex = (req,res,next) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        const banks = JSON.parse(data);
        res.status(200).json(banks);
    });
}

const handlerGetById = (req, res, next) => {
    const id = req.params.id;
    fs.readFile(path, 'utf-8', (err, data) => {
        let banks = JSON.parse(data);
        let bank = banks[id];
        res.send(bank);
    });
 }

 handlerPostBankById = (req, res, next) => {
    const id = req.body.id;
    fs.readFile(path, 'utf-8', (err, data) => {
        let banks = JSON.parse(data);
        let bank = banks[id];
        res.send(bank);
    });
 }

router.get('/', handlerGetIndex);
router.get('/:id', handlerGetById);
router.post('/bank', handlerPostBankById);
module.exports = router;