class Dog {
    //default property
    //first way 
    isAngry = true;

    //static property 
    static legNumber = 4;
     
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        //default property - isAngry 
        //second way
        // this.isAngry = true;
    }
    makeSound() {
        return `${this.name} Barks`
    }

    //static method
    static walking(dog) {
        if (dog.isAngry) {
            console.log('Dog needs a walk');
        } else {
            console.log('This dog is fine');
        }
    }
}

// let zeus = new Dog('Zeus', 5, 'doberman');
// console.log(zeus);
// console.log(zeus.makeSound());


// let arr = ['Argos', 'Kira', 'Sharo'];
// let allDogs = arr.map(x => new Dog(x))
// allDogs.forEach(x => console.log((x.makeSound())));

let dog = new Dog('Petur');
//static method
Dog.walking(dog)

console.log(Dog.legNumber);