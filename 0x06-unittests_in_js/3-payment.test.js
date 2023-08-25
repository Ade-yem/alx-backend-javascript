const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')
const assert = require('assert')

describe('sendPaymentRequestToApi', () => {
  it('validate the usage of the Utils function', function() {
    const spyConsole = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(spyConsole.calledOnce);
    spyConsole.restore();
  })
})
