const mathEnforcer = require('./4');
const { assert } = require('chai');

describe('mathEnforcer function test', () => {
  //addFive
  describe('addFive function test', () => {
    it('should return undefined when the input is not a number', () => {
      assert(mathEnforcer.addFive('Lion') === undefined);
    });
    it('should return undefined when the input is not a number', () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });
    it('should return num + 5 when input is  a number', () => {
      assert(mathEnforcer.addFive(5) === 10);
    });
    it('should return num + 5 when input is  float number', () => {
      assert(mathEnforcer.addFive(5.5) === 10.5);
    });
  });

  describe('subtractTen function test', () => {
    it('should return undefined when the input is not a number', () => {
      assert(mathEnforcer.subtractTen('Rhino') === undefined);
    });
    it('should return undefined when the input is a array', () => {
      assert(mathEnforcer.subtractTen(['Rhino']) === undefined);
    });
    it('should return num - 10 when input is  a number', () => {
      assert(mathEnforcer.subtractTen(15) === 5);
    });
    it('should return num - 10 when input is  a float number', () => {
      assert(mathEnforcer.subtractTen(15.5) === 5.5);
    });
  });

  describe('sum function test', () => {
    it('should return undefined when the input	 is NOT a number', () => {
      assert(mathEnforcer.sum([], 'Elephant') === undefined);
    });
    it('should return undefined when the input	 is NOT a number', () => {
      assert(mathEnforcer.sum('Rhino', 10) === undefined);
    });
    it('should return undefined when the input	 is NOT a number', () => {
      assert(mathEnforcer.sum('Rhino', 10) === undefined);
    });
    it('should return sum If both parameters are numbers', () => {
      assert(mathEnforcer.sum(5.5, 10) === 15.5);
    });
    it('should return sum If both parameters are numbers', () => {
      assert(mathEnforcer.sum(5, 10) === 15);
    });
    it('should return sum If both parameters are numbers', () => {
      assert(mathEnforcer.sum(-5, 10) === -5);
    });
  });
});
