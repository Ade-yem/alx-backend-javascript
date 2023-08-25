const {describe, it} = require('mocha');
const {expect} = require('chai');
const request = require('request');

describe('Index page', () => {
  const options = {
    url: 'http://localhost:7865',
    method: 'GET'
  };
  it('checks correct status code', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  })  
  it('checks correct result', (done) => {
    request(options, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  })  
});