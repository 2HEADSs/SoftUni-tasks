function solve(){
let first = [];
let second = [];

let obj = {
    name: 'Pesho',
    family: 'Ivanov',
    age: 23,
}
    let obj2 = {
        name: 'Pesho2',
        family: 'Ivanov2',
        age: 32,
    }

    obj.name = 'Stefan'

    second.push({name: 'Ivan', age :100})

    first.push(obj,obj2)
    console.log(first);
    console.log(second);
}
solve()