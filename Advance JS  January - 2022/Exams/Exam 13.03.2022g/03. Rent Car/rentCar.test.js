const rentCar = require('./rentCar');
const {expect} = require('chai');

describe('rentCar functionality',()=>{
    describe('searchCar functionality test',()=> {
        //throww error
        it('should throww an erro if input is not right',()=>{
            expect(() => rentCar.searchCar('some', 'model')).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(25, 'model')).to.throw('Invalid input!');
            expect(() => rentCar.searchCar([], 24)).to.throw('Invalid input!');
        })
        //throww error
        it('should throww an erro if input is not right', () => {
            expect(() => rentCar.searchCar(['audi', 'subaru', 'seat'], 'some')).to.throw('There are no such models in the catalog!');

        })
        // right input
        it('should return correct length',()=> {
            expect(rentCar.searchCar(['audi', 'subaru','seat','seat'], 'seat'))
                .to.equal('There is 2 car of model seat in the catalog!')
            expect(rentCar.searchCar(['audi', 'subaru', 'seat', 'seat'], 'audi'))
                .to.equal('There is 1 car of model audi in the catalog!')
            expect(rentCar.searchCar(['audi', 'subaru', 'seat', 'seat'], 'subaru'))
                .to.equal('There is 1 car of model subaru in the catalog!')
        })
    })

    describe('calculatePrice functionalitu test',()=> {
        //throw an error
        it('should throww an erro if input is not right', () => {
            expect(() => rentCar.calculatePriceOfCar(25, 25)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(25, 'some')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(25, 25)).to.throw('Invalid input!');
        })
        //throw an error
        it('should throww an erro if car not exist', () => {
            expect(() => rentCar.calculatePriceOfCar('fiat', 25)).to.throw('No such model in the catalog!');
            expect(() => rentCar.calculatePriceOfCar('subaru', 10)).to.throw('No such model in the catalog!');
        })

        // right input
        it('should return the right',()=>{
            expect(rentCar.calculatePriceOfCar('Volkswagen', 10))
                .to.equal('You choose Volkswagen and it will cost $200!')
            expect(rentCar.calculatePriceOfCar('Audi', 10))
                .to.equal('You choose Audi and it will cost $360!')
        })
    })
    describe('checkBudget functionality test',()=>{
        //wrong input
        it('should throww an erro if car not exist', () => {
            expect(() => rentCar.checkBudget("10", 10, 90)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(2.5, 10,'ase')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(10,2.5)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(10, 2, 3.23)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(10.5, 2.5, 3.23)).to.throw('Invalid input!');
        })
        //right input
        it('should return need bigger budget',()=>{
            expect(rentCar.checkBudget(10, 10, 90)).to.equal('You need a bigger budget!')
            expect(rentCar.checkBudget(25,2,10)).to.equal('You need a bigger budget!')
        })
        //succses
        it('should return succes', () => {
            expect(rentCar.checkBudget(10, 10, 200)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(10, 10, 100)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(25, 2, 100)).to.equal('You rent a car!')
        })

    })
})