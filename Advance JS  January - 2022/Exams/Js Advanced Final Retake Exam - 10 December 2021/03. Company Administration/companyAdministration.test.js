const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');

describe('companyAdministration functionality test', () => {
    describe('hiringEmployee', () => {
        it('should throw an Eror if "position" is diferent from "Programmer"', () => {
            expect(() => companyAdministration.hiringEmployee('Pavel', 'Worker', 5)).to.throw(`We are not looking for workers for this position.`)
        })
        it('should return successfully hired Pavel', () => {
            expect(companyAdministration.hiringEmployee('Pavel', 'Programmer', 5)).to.equal(`Pavel was successfully hired for the position Programmer.`)
        })
        it('should return successfully hired Pesho', () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.equal(`Pesho was successfully hired for the position Programmer.`)
        })
        it('should return not aproved Stefan', () => {
            expect(companyAdministration.hiringEmployee('Stefan', 'Programmer', 2)).to.equal(`Stefan is not approved for this position.`)
        })
    })
    describe('calculateSalary', () => {
        it('shoul throw Eroor if the input is not a number', () => {
            expect(() => companyAdministration.calculateSalary('string')).to.throw('Invalid hours')
        })
        it('shoul throw Eroor if the input is a negative number', () => {
            expect(() => companyAdministration.calculateSalary(-10)).to.throw('Invalid hours')
        })
        it('should return regulara salary hour * 15', () => {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500)
        })
        it('should return regulara salary hour * 15', () => {
            expect(companyAdministration.calculateSalary(10.5)).to.equal(157.5)
        })
        it('should return bonus salary hour * 15 + 1000', () => {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000)
        })
    })
    describe('firedEmployee', () => {
        it('shoul throw Error if input is not array', () => {
            expect(() => companyAdministration.firedEmployee('test', 0.5)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee([], 'test')).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Petar'], 25)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Petar'], -1)).to.throw('Invalid input')
        })

        it('shoul remove employee', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George')
        })
    })
})