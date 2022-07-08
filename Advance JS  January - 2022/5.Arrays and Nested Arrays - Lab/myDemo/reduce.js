let nums = [2, 43, 1, 58, 100, 23,]
// //1 type
// function sumNums(acc, curr) {
//     return acc + curr;
// }
// let sum = nums.reduce(sumNums, 100)

//2type
let sum = nums.reduce(function (acc, curr) {
    return acc + curr;
}, 0)

// //3type
// let sum = nums.reduce((a, x) => a + x,0);


//find average
let average = nums.reduce((a, x, i, arr) => {
    return a + (x / arr.length)
}, 0)

//filter

let evenNums = nums.reduce((a, x) => {
    if (x % 2 == 0) {
        a.push(x);
    }
    return a
}, [])


console.log(sum);
console.log(average);
console.log(evenNums);