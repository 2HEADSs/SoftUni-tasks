function magicSum(arr, num) {
  let newArr = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let firstNum = arr[i];
    let sum = 0;
    for (let j = i + 1; j < length; j++) {
      let secondNum = arr[j];
      if (firstNum + secondNum === num) {
        newArr.push(firstNum, secondNum);
        console.log(newArr.join(" "));
        newArr = [];
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
