let arr = [10, '13', {}, 30, true, '_', 40, BigInt, 50, 51, null, undefined];
let [a, b, ...rest] = arr;
console.log(a);
console.log(b);
console.log(rest);
console.log(arr);
console.log("------------------------------------------------------------");


let firstArr = [...arr];
firstArr[0] = 11;
firstArr = [...firstArr]
console.log(arr);
console.log(firstArr);

firstArr[3] = 'something';

console.log(firstArr);
let thirdArr = [...arr];
console.log([...arr]);
console.log(...thirdArr);
console.log(...arr);
