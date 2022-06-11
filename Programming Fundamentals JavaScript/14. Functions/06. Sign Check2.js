function check(firstNum, secondNum, thirdNum) {
  let totalNegative = 0;

  if (firstNum < 0) {
    totalNegative++;
  }
  if (secondNum < 0) {
    totalNegative++;
  }
  if (thirdNum < 0) {
    totalNegative++;
  }
  if (totalNegative % 2 === 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}
console.log(check(5, 12, -15));
console.log(check(-6, -12, 14));
console.log(check(-1, -2, -3));
console.log(check(-5, 1, 1));
