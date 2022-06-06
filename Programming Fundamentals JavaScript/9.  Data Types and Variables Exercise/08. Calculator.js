function calculator(first, second, third) {
  let firstNum = first;
  let operator = second;
  let secondNum = third;
  let result = 0;

  switch (operator) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
  }
  console.log(result.toFixed(2));
}
calculator(5, "+", 10);
calculator(25.5, "-", 3);
