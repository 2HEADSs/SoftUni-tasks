function simpleCalculator(a, b, operator) {
  let result = 0;
  let multiply = (a, b) => a * b;
  let divide = (a, b) => a / b;
  let add = (a, b) => a + b;
  let subtract = (a, b) => a - b;

  switch (operator) {
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
  }

  console.log(result);
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
