const express = require('express');
const fs = require('fs');

const router = express.Router();
const path = './resources/users.json';

const handlerGetIndex = (req, res, next) => {

    const ip = req.connection.remoteAddress;
    fs.readFile(path, 'utf-8', (err, data) => {
        const users = JSON.parse(data);
        res.status(200).json(users);
    });

}

const handlerGetById = (req, res, next) => {

    const id = req.params.id;
    fs.readFile(path, 'utf-8', (err, data) => {
        const users = JSON.parse(data);
        const user = users[id];
        res.send(user);
    });

 }

router.get('/', handlerGetIndex);
router.get('/:id', handlerGetById);
module.exports = router;