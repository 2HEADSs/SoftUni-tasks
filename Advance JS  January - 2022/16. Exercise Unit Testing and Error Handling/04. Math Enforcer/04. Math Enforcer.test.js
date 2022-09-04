// const mathEnforcer = require('./04. Math Enforcer');
// const { assert } = require('chai');

// describe('mathEnforcer function test', () => {
//   describe('add five function test', () => {
//     //Test with incorrect input - 5
//     it('should return undefined with string', () => {
//       assert(mathEnforcer.addFive('TestString') === undefined);
//     });

//     it('should return undefined with an object', () => {
//       assert(mathEnforcer.addFive({}) === undefined);
//     });

//     it('should return undefined with an array', () => {
//       assert(mathEnforcer.addFive([]) === undefined);
//     });

//     it('should return undefined with undefined', () => {
//       assert(mathEnforcer.addFive(undefined) === undefined);
//     });

//     it('should return undefined with null', () => {
//       assert(mathEnforcer.addFive(null) === undefined);
//     });

//     //Test with correct input - 3
//     it('Positive integer + 5', () => {
//       assert(mathEnforcer.addFive(5) === 10);
//     });

//     it('Negative number + 5', () => {
//       assert(mathEnforcer.addFive(-5) === 0);
//     });

//     it('Decimel number + 5', () => {
//       assert(mathEnforcer.addFive(5.5) === 10.5);
//     });
//   });
//   describe('subtractTen function test', () => {
//     //Test with incorrect tests - 5
//     it('should return undefined with string', () => {
//       assert(mathEnforcer.subtractTen('TestString') === undefined);
//     });

//     it('should return undefined with an object', () => {
//       assert(mathEnforcer.subtractTen({}) === undefined);
//     });

//     it('should return undefined with an array', () => {
//       assert(mathEnforcer.subtractTen([]) === undefined);
//     });

//     it('should return undefined with undefined', () => {
//       assert(mathEnforcer.subtractTen(undefined) === undefined);
//     });

//     it('should return undefined with null', () => {
//       assert(mathEnforcer.subtractTen(null) === undefined);
//     });
//     //Test with correct input - 3
//     it('Positive integer - 10', () => {
//       assert(mathEnforcer.subtractTen(5) === -5);
//     });

//     it('Negative number - 10', () => {
//       assert(mathEnforcer.subtractTen(-5) === -15);
//     });

//     it('Decimel number - 10', () => {
//       assert(mathEnforcer.subtractTen(15.5) === 5.5);
//     });
//   });
//   describe('sum of two numbers function test', () => {
//     //Test with correct inputs - 3
//     it('Two positive integer numbers', () => {
//       assert(mathEnforcer.sum(10, 20) === 30);
//     });
//     it('Two negative numbers', () => {
//       assert(mathEnforcer.sum(-10, -2.5) === -12.5);
//     });
//     it('Two decimal numbers', () => {
//       assert(mathEnforcer.sum(10.5, 2.1) === 12.6);
//     });
//     //Test with incorrect input
//     it('First parameter string', () => {
//       assert(mathEnforcer.sum('', 10) === undefined);
//     });
//     it('Second parameter string', () => {
//       assert(mathEnforcer.sum(10, 'TestString') === undefined);
//     });
//   });
// });
