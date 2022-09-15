// 'use strict'
let person = {
    name: 'Pavel',
    age: '30',
    sex: 'male'
}

let internalNameProperties = Object.getOwnPropertyDescriptor(person, 'name')
Object.defineProperty(person, 'name', { value: 'Mihail', writable: false })

console.log(person);
console.log(internalNameProperties);
let internalNameProperties2 = Object.getOwnPropertyDescriptor(person, 'name')
console.log(internalNameProperties2);
person.name = 'Stefan'
console.log(person);
Object.defineProperty(person, 'name', { value: 'Ivan', writable: false })

console.log(person);
