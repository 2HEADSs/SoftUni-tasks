function carFactory(inputObject) {
  let newCar = {};
  let engine = {};
  let carriage = {};

  newCar.model = inputObject.model;

  if (inputObject.power <= 90) {
    engine.power = 90;
    engine.volume = 1800;
  } else if (inputObject.power <= 120) {
    engine.power = 120;
    engine.volume = 2400;
  } else if (inputObject.power <= 200) {
    engine.power = 200;
    engine.volume = 3500;
  }
  carriage.type = inputObject.carriage;
  carriage.color = inputObject.color;

  if (inputObject.wheelsize % 2 == 0) {
    inputObject.wheelsize--;
  }
  let tyre = [];
  while (tyre.length < 4) {
    tyre.push(inputObject.wheelsize);
  }
  newCar.engine = engine;
  newCar.carriage = carriage;
  newCar.wheels = tyre;

  return newCar;
}
carFactory({
  model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14,
});
carFactory({
  model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17,
});
