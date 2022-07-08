let arr = [10, '13', {}, 30, true, '_', 40, BigInt, 50, 51, null, undefined];
//reverse whole array and mutating
let reverse = arr.reverse();

console.log(reverse);
console.log(arr);
//first make copy with slice after that reverse;
let firstArr = arr
    .reverse()
    .slice(0);

console.log(firstArr);
