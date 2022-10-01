const dealership = require('./Dealeship');
const { expect } = require('chai');
describe('Test dealership functionality', () => {
    describe('newCarCost', () => {
        it('should return finalPrice if', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000);
        })
        it('should return new Car', () => {
            expect(dealership.newCarCost('Merc', 20000)).to.equal(20000);
            expect(dealership.newCarCost('Ferari', 30000)).to.equal(30000);
        })
    })
    describe('carEquipment', () => {
        it('shoul extras', () => {
            expect(dealership.carEquipment(['AC', 'Stereo', 'TV'], [0, 1, 2])).to.deep.equal(['AC', 'Stereo', 'TV']);
            expect(dealership.carEquipment(['AC', 'Stereo', 'TV', 'Nav', 'Fridger'], [0, 1, 3])).to.deep.equal(['AC', 'Stereo', 'Nav']);

        })
    })
    describe('euroCategory', () => {
        it('should return LOW', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        })
        it('should return price', () => {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        })
    })
})
