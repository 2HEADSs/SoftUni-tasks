function gcd(a, b) {
  let firstNum = Number(a);
  let secondNum = Number(b);

  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }
  console.log(firstNum);
}
// gcd(15, 5);
gcd(2154, 458);
