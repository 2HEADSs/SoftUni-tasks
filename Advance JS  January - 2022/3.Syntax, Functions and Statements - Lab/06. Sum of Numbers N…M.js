function solve(firstNum, secondNum) {
  let sum = 0;
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);

  for (let i = firstNum; i <= secondNum; i++) {
    sum += i;
  }
  console.log(sum);
}
solve("1", "5");
solve("-8", "20");
