const numberOperations = require('./03. Number Operations_Resources.js');
const { expect } = require('chai');

describe('numberOperations fuctionality test', () => {
    describe('powerNumber', () => {
        it('should return the power of the given number', () => {
            expect(numberOperations.powNumber(5)).to.equal(25)
        })
    })

    describe('numberCkecker', () => {
        it('should throw Error if input is not a number', () => {
            expect(() => numberOperations.numberChecker('strng')).to.throw('The input is not a number!')
        })
        it('should return if the number is lower than 100("50"))', () => {
            expect(numberOperations.numberChecker('50')).to.equal('The number is lower than 100!')
        })
        it('should return if the number is lower than 100(-10)', () => {
            expect(numberOperations.numberChecker(-10)).to.equal('The number is lower than 100!')
        })
        it('should return if the number is bigger than 100(120)', () => {
            expect(numberOperations.numberChecker('125')).to.equal('The number is greater or equal to 100!')
        })
        it('should return if the number is bigger than 100(100)', () => {
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!')
        })
    })
    describe('sumArrays', () => {
        it('should returns new array, which represents the sum of the two arrays by indexes', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 4, 5],[2, 4, 8, 10])).to.deep.equal([3, 6, 11, 14, 5])
        })
    })
})