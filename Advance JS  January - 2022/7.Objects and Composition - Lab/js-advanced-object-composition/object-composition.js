let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk: function () {
        console.log(`${this.model}: Beep beep!`);
    },
    owner: {
        name: 'Pesho',
        age: 30,
    }
};

car['honk']();

// Print nested value
console.log(car.owner.name);
console.log(car.owner['name']);
console.log(car['owner']['name']);
console.log(car['owner'].name);

// Nested destructuring
let { owner } = car;

// Renaming in destructuring
let { owner: person } = car;

// function all(){
//     function print() {
//       console.log(`${this.name} is printing a page`);
//     }
//     function scan() {
//       console.log(`${this.name} is scanning a document`);
//     }
//     let printer = { name: 'ACME Printer', print: print() };
//     let scanner = { name: 'Initech Scanner', scan };
//     let copier = { name: 'ComTron Copier', print, scan };

//     console.log(printer.print);
// }
// all()


