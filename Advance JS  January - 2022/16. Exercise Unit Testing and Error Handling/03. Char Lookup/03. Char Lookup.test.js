// const lookupChar = require('./03. Char Lookup');
// const { assert } = require('chai');

// describe('lookupChar function tests', () => {
//   it('shoudld return undefined if the first parametere is NOT a string', () => {
//     assert.equal(lookupChar(10, 10), undefined);
//   });
//   it('shoudld return undefined if the second parametere is NOT a number', () => {
//     assert.equal(lookupChar(10, {}), undefined);
//   });
//   it('shoudld return undefined if the second parametere is a float number', () => {
//     assert.equal(lookupChar(10, 22.2), undefined);
//   });
//   //different type of syntaxis
//   it('shoudld return undefined if the firs parametere is NOT a stringand if the second parametere is NOT a number', () => {
//     assert(lookupChar(10, 'Smile') === undefined);
//   });

//   it('should return element at CORRECT index', () => {
//     assert.equal(lookupChar('A', 0), 'A');
//   });
//   it('should return element at CORECT index', () => {
//     assert.equal(lookupChar('Animal', 1), 'n');
//   });

//   it('should return "incorrect index"  if index is incorrect', () => {
//     assert.equal(lookupChar('Animal', -5), 'Incorrect index');
//   });
//   it('should return "incorrect index"  if index is incorrect', () => {
//     assert.equal(lookupChar('Animal', 6), 'Incorrect index');
//   });
//   it('should return "incorrect index"  if index is incorrect', () => {
//     assert.equal(lookupChar('Animal', 1000), 'Incorrect index');
//   });
//   it('empty string as input', () => {
//     assert.equal(lookupChar('', 0), 'Incorrect index');
//   });
// });
