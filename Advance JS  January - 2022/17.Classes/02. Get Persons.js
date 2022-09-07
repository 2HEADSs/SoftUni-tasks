function getPerson() {
  let arrayOfPeople = [];

  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  arrayOfPeople.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
  arrayOfPeople.push(new Person('SoftUni'));
  arrayOfPeople.push(new Person('Stephan', 'Johnson', 25));
  arrayOfPeople.push(new Person('Anna', 'Simpson', 24, 'g.p@gmail.com'));
  //   console.log(arrayOfPeople);
  return arrayOfPeople;
}
getPerson();
