const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment')
const Utils = require('./utils')
const { expect } = require('chai')

describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();
  beforeEach(function() {
    sandbox.spy(console, 'log');
  });
  afterEach(function() {
    sandbox.restore();
  });
  it('validate the usage of the Utils function', function() {
    expect(sendPaymentRequestToApi(100, 20, 'SUM')).to.equal(Utils.calculateNumber('SUM', 100, 20));
  })
})