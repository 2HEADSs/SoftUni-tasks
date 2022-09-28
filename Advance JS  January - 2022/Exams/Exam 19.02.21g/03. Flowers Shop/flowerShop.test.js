const flowerShop = require('./flowerShop');
const { expect } = require('chai');
describe('flowerShop functionality tests', () => {
    describe('calcPriceOfFlowers', () => {
        it('throw Error if inputs are wrong', () => {
            //thorw Error
            expect(() => flowerShop.calcPriceOfFlowers(5, 25, 30)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('string', 25.5, 30)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('string', 25, 'some')).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('string', 'some', 30)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('string', 10, 23.25)).to.throw('Invalid input!');
        })
        //return correct
        it('should return correct result', () => {
            expect(flowerShop.calcPriceOfFlowers('Roses', 10, 2)).to.equal('You need $20.00 to buy Roses!')
            expect(flowerShop.calcPriceOfFlowers('Lilia', 2, 3)).to.equal('You need $6.00 to buy Lilia!')
            expect(flowerShop.calcPriceOfFlowers('Oak', 0, 0)).to.equal('You need $0.00 to buy Oak!')
        })
    })
    describe('checkFlowersAvailable', () => {
        it('should return available', () => {
            expect(flowerShop.checkFlowersAvailable('Roses', ['Roses', 'Lilia', 'Oak'])).to.equal('The Roses are available!');
            expect(flowerShop.checkFlowersAvailable('Lilia', ['Roses', 'Lilia', 'Oak'])).to.equal('The Lilia are available!');
            expect(flowerShop.checkFlowersAvailable('Oak', ['Roses', 'Lilia', 'Oak'])).to.equal('The Oak are available!');
        })
        it('should return sold', () => {
            expect(flowerShop.checkFlowersAvailable('Hrisantema', ['Roses', 'Lilia', 'Oak'])).to.equal('The Hrisantema are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Orchid', ['Roses', 'Lilia', 'Oak'])).to.equal('The Orchid are sold! You need to purchase more!');
            expect(flowerShop.checkFlowersAvailable('Oak', [])).to.equal('The Oak are sold! You need to purchase more!');
        })
    })
    describe('sellFlowers', () => {
        it('should throw Error', () => {
            expect(() => flowerShop.sellFlowers(5, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(5, 'string')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 'string')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 4)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers({}, 0)).to.throw('Invalid input!');
        })
        it('should return correct', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily')
        })
    })
})