function topIntegers(arr) {
    let arrayOfNums = arr;
    let arrayL = arrayOfNums.length;
    let newArr = [];
    for(let i = 0; i < arrayL; i ++){
        let currentFirst = arrayOfNums[i];
        let currentSecond = arrayOfNums[i + 1];
        if(currentFirst > currentSecond){
            newArr.push(currentFirst)
        }
        if(i == arrayL - 1){
            newArr.push(currentFirst)
        }
    }
    console.log(newArr.join(' '));
}
topIntegers([1, 4, 3, 2]);
topIntegers([14, 24, 3, 19, 15, 17]);
topIntegers([41, 41, 34, 20]);
topIntegers([27, 19, 42, 2, 13, 45, 48]);
