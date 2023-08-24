/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('check integers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('checks ints and floats', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('checks round down', () => {
    assert.equal(calculateNumber(1.1, 3.3), 4);
  });
  it('checks round up', () => {
    assert.equal(calculateNumber(1.7, 3.7), 6);
  });
  it('checks strings', () => {
    assert.equal(calculateNumber(1, 'all'), NaN);
  });
  it('checks tuples', () => {
    assert.equal(calculateNumber((1), (2, 5)), 6);
  });
  it('checks list with single element', () => {
    assert.equal(calculateNumber([1], 3.7), 5);
  });
  it('checks list with multiple elements', () => {
    assert.equal(calculateNumber([1, 3], 3.7), NaN);
  });
  it('checks Nan', () => {
    assert.equal(calculateNumber(1, NaN), NaN);
  });
});
