const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber (addition)', () => {
  it('checks addition of integers', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUM'), 4);
  });
  it('checks addition of ints and floats', () => {
    assert.strictEqual(calculateNumber(1, 3.7, 'SUM'), 5);
  });
  it('checks addition of floats', () => {
    assert.strictEqual(calculateNumber(1.1, 3.3, 'SUM'), 4);
  });
  it('checks round up', () => {
    assert.strictEqual(calculateNumber(1.7, 3.7, 'SUM'), 6);
  });
  it('checks strings', () => {
    assert.strictEqual(calculateNumber(1, 'all', 'SUM'), NaN);
  });
  it('checks tuples', () => {
    assert.strictEqual(calculateNumber((1), (2, 5), 'SUM'), 6);
  });
  it('checks list with single element', () => {
    assert.strictEqual(calculateNumber([1], 3.7, 'SUM'), 5);
  });
  it('checks list with multiple elements', () => {
    assert.strictEqual(calculateNumber([1, 3], 3.7, 'SUM'), NaN);
  });
  it('checks Nan', () => {
    assert.strictEqual(calculateNumber(1, NaN, 'SUM'), NaN);
  });
});

describe('calculateNumber (division)', () => {
  it('checks division of integers', () => {
    assert.strictEqual(calculateNumber(1, 3, 'DIVIDE'), 0.3333333333333333);
  });
  it('checks division of ints and floats', () => {
    assert.strictEqual(calculateNumber(10, 1.7, 'DIVIDE'), 5);
  });
  it('checks division of floats', () => {
    assert.strictEqual(calculateNumber(12.2, 3.3, 'DIVIDE'), 4);
  });
  it('checks round up', () => {
    assert.strictEqual(calculateNumber(23.7, 3.7, 'DIVIDE'), 6);
  });
  it('checks strings', () => {
    assert.strictEqual(calculateNumber(1, 'all', 'DIVIDE'), NaN);
  });
  it('checks tuples', () => {
    assert.strictEqual(calculateNumber((30), (2, 5), 'DIVIDE'), 6);
  });
  it('checks list with single element', () => {
    assert.strictEqual(calculateNumber([20], 3.7, 'DIVIDE'), 5);
  });
  it('checks list with multiple elements', () => {
    assert.strictEqual(calculateNumber([1, 3], 3.7, 'DIVIDE'), NaN);
  });
  it('checks Nan', () => {
    assert.strictEqual(calculateNumber(1, NaN, 'DIVIDE'), NaN);
  });
});

describe('calculateNumber (subtraction)', () => {
  it('checks addition of integers', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUBTRACT'), -2);
  });
  it('checks addition of ints and floats', () => {
    assert.strictEqual(calculateNumber(4, 3.7, 'SUBTRACT'), 0);
  });
  it('checks addition of floats', () => {
    assert.strictEqual(calculateNumber(4.1, 3.3, 'SUBTRACT'), 1);
  });
  it('checks round up', () => {
    assert.strictEqual(calculateNumber(1.7, 3.7, 'SUBTRACT'), -2);
  });
  it('checks strings', () => {
    assert.strictEqual(calculateNumber(1, 'all', 'SUBTRACT'), NaN);
  });
  it('checks tuples', () => {
    assert.strictEqual(calculateNumber((1), (2, 5), 'SUBTRACT'), -4);
  });
  it('checks list with single element', () => {
    assert.strictEqual(calculateNumber([7], 3.7, 'SUBTRACT'), 3);
  });
  it('checks list with multiple elements', () => {
    assert.strictEqual(calculateNumber([1, 3], 3.7, 'SUBTRACT'), NaN);
  });
  it('checks Nan', () => {
    assert.strictEqual(calculateNumber(1, NaN, 'SUBTRACT'), NaN);
  });
});

describe('calculateNumber (check errors)', () => {
  it('checks WRONG TYPE', () => {
    assert.strictEqual(calculateNumber(1, 3, 'SUBTRAC'), undefined);
  });
  it('checks WRONG TYPES', () => {
    assert.strictEqual(calculateNumber(4, 3.7, 'SUBTR'), undefined);
  });
  it('checks division by zero', () => {
    assert.strictEqual(calculateNumber(4.1, 0.3, 'DIVIDE'), 'Error');
  });
});
