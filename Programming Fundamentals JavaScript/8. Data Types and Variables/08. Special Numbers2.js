function specialNumbers(num) {
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let tempNum = i;
    tempNum = tempNum.toString();
    let isSpecial;

    for (let j = 0; j < tempNum.length; j++) {
      let current = tempNum[j];
      sum += Number(current);
    }
    if (sum == 5 || sum == 7 || sum == 11) {
      isSpecial = "True";
    } else {
      isSpecial = "False";
    }
    console.log(`${i} -> ${isSpecial}`);
  }
}
specialNumbers(15);
// specialNumbers(20);
