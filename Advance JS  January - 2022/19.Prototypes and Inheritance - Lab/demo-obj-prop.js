let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(obj.c);
let objPrototype = Object.getPrototypeOf(obj);
objPrototype.d = 4
console.log(objPrototype);

console.log(obj);

console.log(obj.d);

console.log(obj === objPrototype);
console.log('-----------------');
for(let key in obj){
    console.log(key);
}
console.log(obj);