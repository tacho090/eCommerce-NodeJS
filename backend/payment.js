const stripe = require('stripe')(process.env.stripe_sk);

const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    metadata: {integration_check: 'accept_a_payment'}
});