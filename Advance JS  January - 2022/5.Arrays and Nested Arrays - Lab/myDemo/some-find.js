let arr = [10, '13', {}, 30, true, '_', 40, BigInt, 50, 51, null, undefined];

let num13 = arr.some((x) => x === '13');
console.log(num13);

let find = arr.find((x) => x > 1)
console.log(find);