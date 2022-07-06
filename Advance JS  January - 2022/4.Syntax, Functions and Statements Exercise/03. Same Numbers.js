function sameNums(num) {
  let isSame = true;
  let data = num.toString();
  let firstNum = data[0];
  let sum = 0;

  for (let el of data) {
    if (el == firstNum) {
      sum += Number(el);
    } else {
      isSame = false;
      sum += Number(el);
    }
  }
  console.log(isSame);
  console.log(sum);
}
sameNums(2222222);
sameNums(1234);
