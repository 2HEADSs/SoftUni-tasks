function check(firstNum, secondNum, thirdNum) {
  let totalNegative = 0;

  if (isNegative(firstNum)) {
    totalNegative++;
  }
  if (isNegative(secondNum)) {
    totalNegative++;
  }
  if (isNegative(thirdNum)) {
    totalNegative++;
  }
  if (totalNegative % 2 === 0) {
    return "Positive";
  } else {
    return "Negative";
  }
  function isNegative(number) {
    return number < 0;
  }
}
console.log(check(5, 12, -15));
console.log(check(-6, -12, 14));
console.log(check(-1, -2, -3));
console.log(check(-5, 1, 1));
