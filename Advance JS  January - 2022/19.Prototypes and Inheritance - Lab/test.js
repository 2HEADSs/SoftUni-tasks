let obj1 = {
    name: 'Pavel',
    age: 22
}
let obj2 = Object.assign({}, obj1);
console.log(obj1);
console.log(obj2);
console.log(obj1 == obj2);

for(let key in obj1){
    console.log(obj1[key]);
}