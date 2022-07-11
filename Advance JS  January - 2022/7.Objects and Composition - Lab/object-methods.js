let car = {
  model: 'BMW',
  year: 2010,
  hong: function () {
    console.log('Beep beep!');
  },
  hong2: () => {
    console.log('Beeeeeeeep!');
  },
  hong3() {
    console.log('Beebebebeeeeeeep!');
  },
};

car.hong(); // invoking function wich is in object
car.hong2();
car.hong3();

//Object as function librarry
function devision(a, b) {
  return a / b;
}

//Object as function library
let calc = {
  sum: function (a, b) {
    return a + b;
  },
  multiplication: function (a, b) {
    return a * b;
  },
  substraction: function (a, b) {
    return a - b;
  },
  devision: devision
};
console.log(calc.sum(10, 15));
