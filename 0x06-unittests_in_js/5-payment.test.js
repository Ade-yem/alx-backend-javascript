const sinon = require('sinon')
const sendPaymentRequestToApi = require('./5-payment')
const Utils = require('./utils')
const expect = require('chai').expect

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  afterEach(() => {
    console.log.restore();
  });
  it('validate the usage of the Utils function', function() {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it('call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
})
