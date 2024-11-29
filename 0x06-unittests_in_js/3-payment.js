const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const calcul = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${calcul}`);
}

module.exports = sendPaymentRequestToApi;
