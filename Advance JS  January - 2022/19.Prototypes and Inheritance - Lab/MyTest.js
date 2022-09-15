let child = {
    name: 'Mihail',
    age: 2,
    city: 'Burgas'
}
// Show all property of object + internal
console.log(Object.getOwnPropertyDescriptors(child));
// Show current property of Object
console.log(Object.getOwnPropertyDescriptor(child, 'name'));
//log all keys from object
Object.entries(child).forEach(x => console.log(x[0] + ':' + ' ' + x[1]));
// create new property to Object- DIDN'T WORK
// Object.defineProperty(child['weight'] = 1000)
Object.defineProperty(child, 'weight', {value: 500, writable:false});
console.log(child.weight);
Object.entries(child).forEach(x => console.log(x[0] + ':' + ' ' + x[1]));
Object.keys(child)

//Modify internal property
// Object.defineProperty(child, 'name', { enumerable: false })
Object.entries(child).forEach(x => console.log(x[0] + ':' + ' ' + x[1]));


Object.defineProperty(child, 'info', {
    get: function () {
        return `${this.name} ----------- ${this.age} years old`
    },
    set: function (value) {
        let [name, ageText] = value.split(' -!- ');
        this.name = name;
        this.age = Number(ageText)
    }
})
console.log(child);
child.info = 'Mihail dimitrov -!- 2.4'
console.log(child.info);
console.log(child);