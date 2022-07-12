function solve(car) {
  let newCar = {};
  newCar.model = car.model;
  function getEngine(engine) {
    if (engine <= 90) {
      return { power: 90, volume: 1800 };
    } else if (car.power <= 120) {
      return { power: 120, volume: 2400 };
    } else {
      return { power: 200, volume: 3500 };
    }
  }

  let neededSize = car.wheelsize % 2 === 0 ? car.wheelsize - 1 : car.wheelsize;
  newCar.model = car.model;
  newCar.engine = getEngine(car.power);
  newCar.carriage = { type: car.carriage, color: car.color };
  newCar.wheels = new Array(4).fill(neededSize);
  return newCar;
}
solve({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14,
});
solve({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17,
});
