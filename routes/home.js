const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('shop/index', { title: 'Index page', message: 'Index page'})
});

module.exports = router;