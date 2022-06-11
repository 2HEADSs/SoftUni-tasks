function factorial(firstNum, secondNum) {
  let firtsFactorial = first(firstNum);
  let secondFactorial = second(secondNum);

  let output = firtsFactorial / secondFactorial;
  return output.toFixed(2);
  function first(a) {
    let firstResult = 1;
    for (let i = 1; i <= a; i++) {
      firstResult *= i;
    }
    return firstResult;
  }

  function second(b) {
    let secondResult = 1;
    for (let j = 1; j <= b; j++) {
      secondResult *= j;
    }
    return secondResult;
  }
}
console.log(factorial(5, 2));
console.log(factorial(6, 2));
