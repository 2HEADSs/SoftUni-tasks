//function declaration
function printFullName(firstName, secondName) {
  //firstName and secondName are pamateres(параметри)
  console.log(firstName + ' ' + secondName);
}
//function invocation
printFullName('Peter', 'Ivanov');
//'Peter' and 'Ivanov' are arguments(аргументи)

//function expressions
let countDown = function (number) {
  for (let i = number; i > 0; i--) {
    console.log(i);
  }
};
countDown(10);

//Arrow function

let countUp = (max) => {
  for (let i = 0; i < max; i++) {
    console.log(i);
  }
};
countUp(10);

//return function
function sum(a, b) {
  return a + b;
}
//again return function but short because is on one row
let sumArrow = (a, b) => a + b;

let result = sum(1, 3);
console.log(result);

//Method
let nameOne = 'Pesho';
console.log(nameOne.toUpperCase());

//default parameter
function solve(input = 10) {
  console.log(input + 23);
  //the answer is 33 because function don't have argument and takes the default one
}
solve();
