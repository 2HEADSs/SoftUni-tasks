let arr = [10, '13', {}, 30, true, '_', 40, BigInt, 50, 51, null, undefined];
//splice from 1 index 2 elements and add something after 1 index - mutating arr
let splice = arr.splice(1, 2, 'Pavel Dimitrov');

console.log(splice);
console.log(arr);
console.log("-_-_-_-_-_-_-_-");
//slice 2,3,4 without 5 index - not mutating
let slice = arr.slice(2, 5);
console.log(slice);
console.log(arr);