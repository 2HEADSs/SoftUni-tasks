let car = {
  model: 'BMW',
  year: 2010,
  facelift: true,
  honk: function () {
    console.log(`${this.model}: Beep beep!`);
  },
};

car.honk();
car.model = 'Mercedess';
car.honk();

let japanesMachine = {
  model: 'Subaru',
};


// Change execution context
let singleHonk = car.honk;

singleHonk();
//singleHonk and noise are reference to adrres of honk function
japanesMachine.noise = singleHonk;
japanesMachine.noise()

let russianMachine = {
  model: 'Lada',
};

russianMachine.bibitka = car.honk;

russianMachine.bibitka();
