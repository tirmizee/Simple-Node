const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.status(200).json({
       message : 'Handing GET request to /users'
   });
});

router.get('/id', (req, res, next) => {
    res.send({
        userId : 'test'
    });
 });

module.exports = router;