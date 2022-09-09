class Dog {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  makeSound() {
    console.log(`${this.name} is ${this.age} years old and Barks`);
  }
  

}
let firstDog = new Dog('Zeus', 20);
let secondtDog = new Dog('Kiara', 21);
console.log(firstDog);
console.log(secondtDog);
firstDog.makeSound()