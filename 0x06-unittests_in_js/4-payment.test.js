const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment')
const Utils = require('./utils')
const assert = require('assert')

describe('sendPaymentRequestToApi', () => {  
  it('validate the usage of the Utils function', function() {
    const spyConsole = sinon.spy(console, 'log');
    const spyStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    assert(spyConsole.withArgs('The total is: 10').calledOnce);
    assert(spyStub.withArgs('SUM', 100, 20).calledOnce);
  });
})
