function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let type;
  if (sum % 1 == 0) {
    type = "Integer";
  } else {
    type = "Float";
  }
  console.log(`${sum} - ${type}`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
