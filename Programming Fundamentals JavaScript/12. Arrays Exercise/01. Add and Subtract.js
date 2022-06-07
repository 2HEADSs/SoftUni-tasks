function addAndSubstract(arr) {
  let newArr = [];
  let sumOld = 0;
  let sumNew = 0;
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let currentNumber = arr[i];
    sumOld += currentNumber;
    if (currentNumber % 2 === 0) {
      currentNumber += i;
    } else {
      currentNumber -= i;
    }
    sumNew += currentNumber;
    newArr.push(currentNumber);
  }
  console.log(newArr);
  console.log(sumOld);
  console.log(sumNew);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);
