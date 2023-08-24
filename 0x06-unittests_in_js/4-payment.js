const Utils = require('./utils')
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber(totalAmount, totalShipping, 'SUM');
  console.log('The total is: ' + result);
}
module.exports = sendPaymentRequestToApi;
