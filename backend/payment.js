const stripe = require('stripe')('pk_test_51Gq6xdIPCOadEjnwAHYGcx4WzIsTVbdhGxS732lQ1ftaTMpDTO89CDDMr4kxUVeRCwqWINhQGKD7e62kIxkEg4x100zQkd84Sp');

const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    metadata: {integration_check: 'accept_a_payment'}
});