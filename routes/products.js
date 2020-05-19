const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

router.post('/',async (req, res) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product = await product.save();
    res.send(product);
});

module.exports = router;