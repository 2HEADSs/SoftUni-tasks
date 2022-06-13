function numModification(num) {
  let startNum = num.toString().split("").join("");
  let long = startNum.length;
  let newNum = "";
  let sum = 0;
  let count = 0;
  for (let i = 0; i < long; i++) {
    let current = startNum[i];
    newNum += current;
    sum += Number(current);
    count++;
  }
  let average = sum / count;
  while (average <= 5) {
    newNum += 9;
    sum += 9;
    count++;
    average = sum / count;
  }
  console.log(newNum);
}
numModification(101);
numModification(5835);
