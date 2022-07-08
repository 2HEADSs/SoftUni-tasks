// to make a rest operator
// copy array with ...rest
// detructuring of array


//slice
let arr = [10, 13, 20, 23, 30, 37, 40, 45, 50, 51, 60,]
// console.log(arr.slice(0, -2));

//reduce
// //SUM NUMS WITH REDUCE
// function sumNumbers(acc, curr) {
//     return acc + curr
// }
// let sum = arr.reduce(sumNumbers, 0);

//SUM NUMS WITH REDUCE
// let sum = arr.reduce(function (acc, curr) {
//     return acc + curr
// }, 0);

//SUM NUMS WITH REDUCE
// let sum = arr.reduce((a, x) => {
//     return a + x
// }, 0);

//SUM NUMS WITH REDUCE
let sum = arr.reduce((a, x) => a + x, 0);


//FIND AVERAGE WITH REDUCE
let average = arr.reduce((a, x, i, numsArr) => {
    return a + (x / numsArr.length)
}, 0)

//FIND EVEN NUMS
let oddNums = arr.reduce((a, x) => {
    if (x % 2 !== 0) {
        a.push(x);
    }
    return a
}, []);

console.log(oddNums);

// console.log(average);
// console.log(sum);