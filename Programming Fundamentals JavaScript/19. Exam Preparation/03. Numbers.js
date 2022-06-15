function numbers(arr) {
  let startArr = arr.split(" ").map(Number);
  let max = Number.MIN_SAFE_INTEGER;
  let arrL = startArr.length;
  let sum = 0;
  let countNums = 0;
  let isBigger = false;
  for (let i = 0; i < arrL; i++) {
    sum += startArr[i];
    countNums++;
  }
  let average = sum / countNums;
  let maxNumArr = [];
  for (let j = 0; j < arrL; j++) {
    if (startArr[j] > average) {
      maxNumArr.push(startArr[j]);
      isBigger = true;
    }
  }
  if (!isBigger) {
    console.log("No");
    return;
  }
  maxNumArr.sort(function (a, b) {
    return b - a;
  });

  let output = [];
  for (let i = 0; i < 5; i++) {
    if (i == maxNumArr.length) {
      break;
    }
    output.push(maxNumArr[i]);
  }
  console.log(output.join(' '));
}

numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("1");
numbers("-1 -2 -3 -4 -5 -6");
