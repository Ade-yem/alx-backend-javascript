const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber (addition)', () => {
  it('checks addition of integers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('checks addition of ints and floats', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('checks addition of floats', () => {
    assert.strictEqual(calculateNumber('SUM', 1.1, 3.3), 4);
  });
  it('checks round up', () => {
    assert.strictEqual(calculateNumber('SUM', 1.7, 3.7), 6);
  });
  it('checks strings', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 'all'), NaN);
  });
  it('checks tuples', () => {
    assert.strictEqual(calculateNumber('SUM', (1), (2, 5)), 6);
  });
  it('checks list with single element', () => {
    assert.strictEqual(calculateNumber('SUM', [1], 3.7), 5);
  });
  it('checks list with multiple elements', () => {
    assert.strictEqual(calculateNumber('SUM', [1, 3], 3.7), NaN);
  });
  it('checks Nan', () => {
    assert.strictEqual(calculateNumber('SUM', 1, NaN), NaN);
  });
});

describe('calculateNumber (division)', () => {
  it('checks division of integers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });
  it('checks division of ints and floats', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 1.7), 5);
  });
  it('checks division of floats', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 12.2, 3.3), 4);
  });
  it('checks round up', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 23.7, 3.7), 6);
  });
  it('checks strings', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 'all'), NaN);
  });
  it('checks tuples', () => {
    assert.strictEqual(calculateNumber('DIVIDE', (30), (2, 5)), 6);
  });
  it('checks list with single element', () => {
    assert.strictEqual(calculateNumber('DIVIDE', [20], 3.7), 5);
  });
  it('checks list with multiple elements', () => {
    assert.strictEqual(calculateNumber('DIVIDE', [1, 3], 3.7), NaN);
  });
  it('checks Nan', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, NaN), NaN);
  });
});

describe('calculateNumber (subtraction)', () => {
  it('checks addition of integers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('checks addition of ints and floats', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 3.7), 0);
  });
  it('checks addition of floats', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.1, 3.3), 1);
  });
  it('checks round up', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 3.7), -2);
  });
  it('checks strings', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 'all'), NaN);
  });
  it('checks tuples', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', (1), (2, 5)), -4);
  });
  it('checks list with single element', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', [7], 3.7), 3);
  });
  it('checks list with multiple elements', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', [1, 3], 3.7), NaN);
  });
  it('checks Nan', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, NaN), NaN);
  });
});

describe('calculateNumber (check errors)', () => {
  it('checks WRONG TYPE', () => {
    assert.strictEqual(calculateNumber('SUBTRAC', 1, 3), undefined);
  });
  it('checks WRONG TYPES', () => {
    assert.strictEqual(calculateNumber(1, 4, 3.7), undefined);
  });
  it('checks division by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.1, 0.3, ), 'Error');
  });
});
