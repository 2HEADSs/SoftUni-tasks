function topIntegers(arr) {
  let arrayOfNums = arr;
  let arrayL = arrayOfNums.length;
  let newArr = [];
  let isBigger = false;
  for (let i = 0; i < arrayL; i++) {
    let currentFirst = arrayOfNums[i];
    for (let j = i + 1; j < arrayL; j++) {
      let currentSecond = arrayOfNums[j];
      if (currentFirst > currentSecond) {
        isBigger = true;
      } else {
        isBigger = false;
        break;
      }
    }
    if (isBigger || i == arrayL - 1) {
      newArr.push(currentFirst);
    }
  }
  console.log(newArr.join(' '));
}
// topIntegers([1, 4, 3, 2]);
// topIntegers([14, 24, 3, 19, 15, 17]);
topIntegers([41, 41, 34, 20]);
// topIntegers([27, 19, 42, 2, 13, 45, 48]);
