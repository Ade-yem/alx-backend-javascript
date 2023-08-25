const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber (addition)', () => {
  it('checks addition of integers', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('checks addition of ints and floats', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('checks addition of floats', () => {
    expect(calculateNumber('SUM', 1.1, 3.3)).to.equal(4);
  });
  it('checks round up', () => {
    expect(calculateNumber('SUM', 1.7, 3.7)).to.equal(6);
  });
  it('checks strings', () => {
    expect(calculateNumber('SUM', 1, 'all')).to.be.NaN;
  });
  it('checks tuples', () => {
    expect(calculateNumber('SUM', (1), (2, 5))).to.equal(6);
  });
  it('checks list with single element', () => {
    expect(calculateNumber('SUM', [1], 3.7)).to.equal(5);
  });
  it('checks list with multiple elements', () => {
    expect(calculateNumber('SUM', [1, 3], 3.7)).to.be.NaN;
  });
  it('checks Nan', () => {
    expect(calculateNumber('SUM', 1, NaN)).to.be.NaN;
  });
});

describe('calculateNumber (division)', () => {
  it('checks division of integers', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });
  it('checks division of ints and floats', () => {
    expect(calculateNumber('DIVIDE', 10, 1.7)).to.equal(5);
  });
  it('checks division of floats', () => {
    expect(calculateNumber('DIVIDE', 12.2, 3.3)).to.equal(4);
  });
  it('checks round up', () => {
    expect(calculateNumber('DIVIDE', 23.7, 3.7)).to.equal(6);
  });
  it('checks strings', () => {
    expect(calculateNumber('DIVIDE', 1, 'all')).to.be.NaN;
  });
  it('checks tuples', () => {
    expect(calculateNumber('DIVIDE', (30), (2, 5))).to.equal(6);
  });
  it('checks list with single element', () => {
    expect(calculateNumber('DIVIDE', [20], 3.7)).to.equal(5);
  });
  it('checks list with multiple elements', () => {
    expect(calculateNumber('DIVIDE', [1, 3], 3.7)).to.be.NaN;
  });
  it('checks Nan', () => {
    expect(calculateNumber('DIVIDE', 1, NaN)).to.be.NaN;
  });
});

describe('calculateNumber (subtraction)', () => {
  it('checks addition of integers', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('checks addition of ints and floats', () => {
    expect(calculateNumber('SUBTRACT', 4, 3.7)).to.equal(0);
  });
  it('checks addition of floats', () => {
    expect(calculateNumber('SUBTRACT', 4.1, 3.3)).to.equal(1);
  });
  it('checks round up', () => {
    expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(-2);
  });
  it('checks strings', () => {
    expect(calculateNumber('SUBTRACT', 1, 'all')).to.be.NaN;
  });
  it('checks tuples', () => {
    expect(calculateNumber('SUBTRACT', (1), (2, 5))).to.equal(-4);
  });
  it('checks list with single element', () => {
    expect(calculateNumber('SUBTRACT', [7], 3.7)).to.equal(3);
  });
  it('checks list with multiple elements', () => {
    expect(calculateNumber('SUBTRACT', [1, 3], 3.7)).to.be.NaN;
  });
  it('checks Nan', () => {
    expect(calculateNumber('SUBTRACT', 1, NaN)).to.be.NaN;
  });
});

describe('calculateNumber (check errors)', () => {
  it('checks WRONG TYPE', () => {
    expect(calculateNumber('SUBTRAC', 1, 3)).to.equal(undefined);
  });
  it('checks WRONG TYPES', () => {
    expect(calculateNumber(1, 4, 3.7)).to.equal(undefined);
  });
  it('checks division by zero', () => {
    expect(calculateNumber('DIVIDE', 4.1, 0.3)).to.equal('Error');
  });
});
