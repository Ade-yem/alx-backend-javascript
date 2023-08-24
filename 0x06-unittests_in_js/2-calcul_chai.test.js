/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */

const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber (addition)', () => {
  it('checks addition of integers', () => {
    expect(calculateNumber(1, 3, 'SUM')).to.equal(4);
  });
  it('checks addition of ints and floats', () => {
    expect(calculateNumber(1, 3.7, 'SUM')).to.equal(5);
  });
  it('checks addition of floats', () => {
    expect(calculateNumber(1.1, 3.3, 'SUM')).to.equal(4);
  });
  it('checks round up', () => {
    expect(calculateNumber(1.7, 3.7, 'SUM')).to.equal(6);
  });
  it('checks strings', () => {
    expect(calculateNumber(1, 'all', 'SUM')).to.be.NaN;
  });
  it('checks tuples', () => {
    expect(calculateNumber((1), (2, 5), 'SUM')).to.equal(6);
  });
  it('checks list with single element', () => {
    expect(calculateNumber([1], 3.7, 'SUM')).to.equal(5);
  });
  it('checks list with multiple elements', () => {
    expect(calculateNumber([1, 3], 3.7, 'SUM')).to.be.NaN;
  });
  it('checks Nan', () => {
    expect(calculateNumber(1, NaN, 'SUM')).to.be.NaN;
  });
});

describe('calculateNumber (division)', () => {
  it('checks division of integers', () => {
    expect(calculateNumber(1, 3, 'DIVIDE')).to.equal(0.3333333333333333);
  });
  it('checks division of ints and floats', () => {
    expect(calculateNumber(10, 1.7, 'DIVIDE')).to.equal(5);
  });
  it('checks division of floats', () => {
    expect(calculateNumber(12.2, 3.3, 'DIVIDE')).to.equal(4);
  });
  it('checks round up', () => {
    expect(calculateNumber(23.7, 3.7, 'DIVIDE')).to.equal(6);
  });
  it('checks strings', () => {
    expect(calculateNumber(1, 'all', 'DIVIDE')).to.be.NaN;
  });
  it('checks tuples', () => {
    expect(calculateNumber((30), (2, 5), 'DIVIDE')).to.equal(6);
  });
  it('checks list with single element', () => {
    expect(calculateNumber([20], 3.7, 'DIVIDE')).to.equal(5);
  });
  it('checks list with multiple elements', () => {
    expect(calculateNumber([1, 3], 3.7, 'DIVIDE')).to.be.NaN;
  });
  it('checks Nan', () => {
    expect(calculateNumber(1, NaN, 'DIVIDE')).to.be.NaN;
  });
});

describe('calculateNumber (subtraction)', () => {
  it('checks addition of integers', () => {
    expect(calculateNumber(1, 3, 'SUBTRACT')).to.equal(-2);
  });
  it('checks addition of ints and floats', () => {
    expect(calculateNumber(4, 3.7, 'SUBTRACT')).to.equal(0);
  });
  it('checks addition of floats', () => {
    expect(calculateNumber(4.1, 3.3, 'SUBTRACT')).to.equal(1);
  });
  it('checks round up', () => {
    expect(calculateNumber(1.7, 3.7, 'SUBTRACT')).to.equal(-2);
  });
  it('checks strings', () => {
    expect(calculateNumber(1, 'all', 'SUBTRACT')).to.be.NaN;
  });
  it('checks tuples', () => {
    expect(calculateNumber((1), (2, 5), 'SUBTRACT')).to.equal(-4);
  });
  it('checks list with single element', () => {
    expect(calculateNumber([7], 3.7, 'SUBTRACT')).to.equal(3);
  });
  it('checks list with multiple elements', () => {
    expect(calculateNumber([1, 3], 3.7, 'SUBTRACT')).to.be.NaN;
  });
  it('checks Nan', () => {
    expect(calculateNumber(1, NaN, 'SUBTRACT')).to.be.NaN;
  });
});

describe('calculateNumber (check errors)', () => {
  it('checks WRONG TYPE', () => {
    expect(calculateNumber(1, 3, 'SUBTRAC')).to.equal(undefined);
  });
  it('checks WRONG TYPES', () => {
    expect(calculateNumber(4, 3.7, 'SUBTR')).to.equal(undefined);
  });
  it('checks division by zero', () => {
    expect(calculateNumber(4.1, 0.3, 'DIVIDE')).to.equal('Error');
  });
});
