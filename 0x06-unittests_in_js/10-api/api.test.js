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

describe('checks the  cart page', () => {
  it('checks correct status code :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  })
  it('checks correct output :id is a number', (done) => {
    request('http://localhost:7865/cart/12', (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  })
  it('checks correct status code :id is not a number', (done) => {
    request('http://localhost:7865/cart/hell', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  })
});

describe('checks the  available_payments endpoint', () => {
  it('checks correct status code', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  })
  it('checks correct output', (done) => {
    const result = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(body).to.deep.equal(JSON.stringify(result));
      done();
    });
  })
});

describe('checks the  login endpoint', () => {
  it('checks correct status code', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      form: {
        userName: 'Betty'
      }
    }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  })
  it('checks correct output', (done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: {
        userName: 'Betty'
      }
    }, (err, res, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  })
});
