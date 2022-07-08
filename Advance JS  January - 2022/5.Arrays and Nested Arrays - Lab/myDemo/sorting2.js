let firstArr = [2, 43, 1, 58, 100, 23,]

firstArr.sort(compareNums);

function compareNums(a, b) {
    if (a > b) {
        return 1
    } else if (a === b) {
        return 0
    } else {
        return -1
    }
}
console.log(firstArr);


let secondArr = [45, 12, 14, 7, 23, 889, 1];

secondArr.sort(someFunc);
function someFunc(a, b) {
    return a - b
}

console.log(secondArr);