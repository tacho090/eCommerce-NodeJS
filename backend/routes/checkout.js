const express = require('express');
const router = express.Router();

router.get('/secret', async (req, res) => {
   const intent = res.json({client_secret: intent.client_secret});
});

module.exports = router;