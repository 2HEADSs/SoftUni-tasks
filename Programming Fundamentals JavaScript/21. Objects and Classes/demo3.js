function createPerson(firstName, lastName, age){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}
let myPerson = createPerson('Pavel', 'Dimitrov', 29)
console.log(createPerson('Pavel', 'Dimitrov', 29));