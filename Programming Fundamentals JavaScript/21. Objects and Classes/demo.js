class Cat {
  name = "";
  breed = "";

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}
let firstCat = new Cat("Pesho", "Persian");
let secondCat = new Cat("Lora", "Angora");
let thirdCat = new Cat("Omar", "Siam");

console.log(JSON.stringify(firstCat));
console.log(secondCat);
console.log(thirdCat);