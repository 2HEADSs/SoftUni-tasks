function solve(input) {
  let firstNum = "" + input[0];
  let secondNum = "" + input[1];

  let firstNum1 = Number(firstNum[0]);
  let firstNum2 = Number(firstNum[1]);
  let firstNum3 = Number(firstNum[2]);
  let firstNum4 = Number(firstNum[3]);

  let secondNum1 = Number(secondNum[0]);
  let secondNum2 = Number(secondNum[1]);
  let secondNum3 = Number(secondNum[2]);
  let secondNum4 = Number(secondNum[3]);
  let print = "";

  for (let i = firstNum1; i <= secondNum1; i++) {
    for (let j = firstNum2; j <= secondNum2; j++) {
      for (let k = firstNum3; k <= secondNum3; k++) {
        for (let l = firstNum4; l <= secondNum4; l++) {
          if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
            print += `${i}${j}${k}${l} `;
          }
        }
      }
    }
  }
  console.log(print);
}
solve(["2345", "6789"]);
