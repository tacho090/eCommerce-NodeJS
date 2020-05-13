const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'eCommerce-NodeJS', message: 'Hello Node'})
});

module.exports = router;