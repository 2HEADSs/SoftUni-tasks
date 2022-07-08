let arr = [10, '13', {}, 30, true, '_', 40, BigInt, 50, 51, null, undefined];

let includes13 = arr.includes('13');
console.log(includes13);

let includesName = arr.includes('Pavel');
console.log(includesName);

let includesObject = arr.includes(Object);
console.log(includesObject);
console.log(typeof(arr[2]));
let index = arr.indexOf(40,2);
//2 - start 

console.log(index);