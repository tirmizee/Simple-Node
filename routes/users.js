const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200).json({
       message : 'Handing GET request to /users'
   });
});

router.get('/:id', (req, res, next) => {

    const id = req.params.id;

    fs.readFile('./resources/users.json', 'utf-8', (err, data) => {
        const users = JSON.parse(data);
        const user = users[id];
        res.send(user);
    });

 });

module.exports = router;