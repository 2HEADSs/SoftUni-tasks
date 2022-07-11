// Single line object literal
let otherPerson = { name: 'Pesho', age: 20, isMail: true };

//Multi line object litera
let person = {
  name: 'Pesho',
  age: 20,
  isMail: true,
};

//Dynamic assign of properties
let cat = {};

let propName = 'age';

cat.name = 'Navcho'; //dot notation - MORE USEFUL
cat['breed'] = 'Persian'; //Bracket notation - IMPORTANT 'breed';
cat['fur-color'] = 'yellow';
//cat.fur - color; //WE CAN'T USE THIS BECAUSE OF ('-');
cat[propName] = 7;
console.log(cat['fur-color']);
console.log(cat.age);
console.log(cat);

//Empty object literal
let emptyObject = {};

// Object destructuring Assingnment Syntax
let { age, breed, ...rest } = cat;
console.log(age);
console.log(breed);
console.log(rest);
console.log(cat);

//CLONE Object
//First way to clone Object whith destructuring - create a new Reference and new Object
let { ...clonedCat } = cat;
console.log(clonedCat);

//Object References
let otherCat = cat;
otherCat.name = 'Garry';

//Comparing Objects
let person1 = {name:'Pesho'};
let person2 = {name:'Pesho'};
console.log(person1 == person2);
console.log(otherCat == cat);


