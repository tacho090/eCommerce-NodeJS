const { Product } = require('../models/product');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    Product.find({}).lean()
        .exec(function(err, docs) {
            res.render('shop/index', {
                title: 'eCommerce NodeJS',
                products: docs
            });
        });
    // Product.find(function(err, docs) {
    //     res.render('shop/index', {
    //         title: 'eCommerce NodeJS',
    //         products: docs
    //     });
    // });
});

module.exports = router;