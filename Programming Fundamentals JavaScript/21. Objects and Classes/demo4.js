function createPerson(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    sayHi: function () {
      console.log("Hi");
    },
    //функциите в обекта могат да бъдат създадени по два начина - 6ти ред и 10-ти ред
    sayBye() {
      console.log("Bye");
    },
  };
  return person;
}
let myPerson = createPerson("Pavel", "Dimitrov", 29);
myPerson.sayHi();
myPerson.sayBye();
myPerson.sayHowAreYou = function () {
  console.log("How are You?");
};
myPerson.sayHowAreYou();
console.log(Object.keys(myPerson));
console.log(Object.values(myPerson));
console.log(Object.entries(myPerson))
for(let key of Object.keys(myPerson)){
console.log(key, '->', myPerson[key]);

}
