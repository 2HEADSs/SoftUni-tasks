let arr = [10, '13', {}, 30, true, '_', 40, BigInt, 50, 51, null, undefined];
//fill arr with 'pavel' from 2 index before 5 index
arr.fill('pavel', 2, 5);

console.log(arr);
//fill whole array with empty object
arr.fill({});
console.log(arr);
