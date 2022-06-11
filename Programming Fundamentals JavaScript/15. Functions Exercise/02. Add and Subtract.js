function printResult(fNum, sNum, tNum) {
  function sumOfTwoNumber(firsNum, secondNum) {
    return firsNum + secondNum;
  }
  function subtract(sum, thirdNum) {
    return sum - thirdNum;
  }
  let sum = sumOfTwoNumber(fNum, sNum);
  let output = subtract(sum, tNum);
  
  console.log(output);
}
printResult(23, 6, 10);
printResult(1, 17, 30);
printResult(42, 58, 100);
