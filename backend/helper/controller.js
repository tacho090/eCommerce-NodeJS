// exports.create = function(req, res, next) {
//     const stripeToken = req.body.id;
//     console.log(req.body);
//     const price = Helper.getPrice(req.body.order);
//     const priceInPence = price * 100;
//     stripeToken.charges.create({
//         amount: priceInPence,
//         currency: 'usd',
//         source: stripeToken,
//         capture: false
//     }).then(res => {

//     }).catch(err => {

//     });
// };