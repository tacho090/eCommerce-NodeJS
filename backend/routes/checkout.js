const express = require('express');
const router = express.Router();
const controller = require('../helper/controller');
const cors = require('cors');
const sk = process.env.stripe_sk;
const stripeClient = require('stripe')(sk);

router.get('/secret', async (req, res) => {
   const intent = res.json({client_secret: intent.client_secret});
});

router.post('/order', cors(), async (req, res) => {
   console.log(process.env.stripe_sk);
   console.log(typeof(process.env.stripe_sk));
   stripeClient.charges.create({
      amount: 100, // should be total for products purchased
      source: req.body.stripeTokenId,
      currency: 'usd',
      description: 'Test charge'
   }).then(function() {
      console.log('charge succesful');
      res.json({ message: 'Succesfully purchased items '})
   }).catch(function(err) {
      console.log(err);
      res.status(500).end();
   })
})

module.exports = router;

