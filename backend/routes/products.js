const auth = require('../middleware/auth');
const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.send(await Product.find());
});

router.post('/', auth, async (req, res) => {
    let product = new Product({
        imagePath: req.body.imagePath,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        publishedBy: req.body.publishedBy
    });
    product = await product.save();
    res.send(product);
});

module.exports = router;