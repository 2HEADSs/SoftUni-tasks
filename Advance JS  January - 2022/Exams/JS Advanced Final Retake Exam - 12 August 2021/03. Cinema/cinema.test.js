const cinema = require('./cinema.js');
const { expect } = require('chai');

describe('Cinema functionality tests', () => {
    describe('showMovies', () => {
        it('should check if array lenght < 0', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        });

        it('should return the array separeted by comma and space !== 0', () => {
        let arr = ['Matrix', 'Matrix2','Matrix3','Matrix4'];
        expect(cinema.showMovies(arr)).to.equal("Matrix, Matrix2, Matrix3, Matrix4");
        });
    });

    describe('ticketPrice',() => {
        it('shoul check if the given project type is included', ()=>{
            expect(cinema.ticketPrice('Normal')).to.equal(7.5);
            expect(cinema.ticketPrice('Premiere')).to.equal(12.0);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        })
        it('should throw erros if the given input is not included in schedule', () =>{
            expect( ()=> cinema.ticketPrice('VIP')).to.throw ('Invalid projection type.');
        })
    });

    describe('swapSeatsInHall',() => {
        it('should return Unsuccessful .....', ()=> {
            expect(cinema.swapSeatsInHall(5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('papagal', 25)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(12, 'string')).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2.5, 2.8)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 30)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, -4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, -4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, 4)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 8)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(8, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(23, 23)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('should return Successful .....', ()=>{
            expect(cinema.swapSeatsInHall(2,8)).to.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(20,1)).to.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,20)).to.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(3,17)).to.equal('Successful change of seats in the hall.')
        });

    });
});

