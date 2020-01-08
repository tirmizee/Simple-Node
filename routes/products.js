const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'Handing GET request to /products'
    });
 });
 
 router.get('/id', (req, res, next) => {
     res.send({
         productId : 'test'
     });
  });
 
 module.exports = router;