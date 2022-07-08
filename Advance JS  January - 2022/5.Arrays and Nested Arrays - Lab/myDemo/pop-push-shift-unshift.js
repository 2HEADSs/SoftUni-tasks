let arr = [10, '13', {}, 30, true, '_', 40, BigInt, 50, 51, null, undefined];


let first = arr.shift();
let last = arr.pop();

console.log(first);
console.log(last);
console.log(arr);
console.log("-_-_-_-_-_-_-_-");
let newFirst = arr.unshift('Pavel');
let newLast = arr.push('Dimitrov');

console.log(arr);