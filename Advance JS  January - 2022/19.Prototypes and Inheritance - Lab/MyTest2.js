let car = {
    manifacature: 'Subaru',
    model: 'Legacy',
    year: 2005
}
console.log(car);
//copy with new reference
let clonedCar = Object.assign({}, car);
console.log(clonedCar);
car.year = 1900;
console.log(car);
console.log(clonedCar);


// / Object freeze
Object.freeze(car)
car.color = 'grey';
console.log(car);

Object.seal(car);
car.window = 'yes';

console.log(car);