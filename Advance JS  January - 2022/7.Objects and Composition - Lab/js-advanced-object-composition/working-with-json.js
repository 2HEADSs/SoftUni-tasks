let car = {
    model: 'BMW',
    year: 2010,
    facelift: true
};
//LOG  original object (car)
console.log(car);

// Convert object to JSON
let jsonCar = JSON.stringify(car);

console.log(jsonCar);

// Convert JSON to object
let parsedCar = JSON.parse(jsonCar);

console.log(parsedCar);