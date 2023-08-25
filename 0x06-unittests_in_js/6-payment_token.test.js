const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;
const {describe, it} = require('mocha');

describe('getPaymentTokenFromAPI', () => {
  it('should test the getpayment api', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.eql({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  }) 
});