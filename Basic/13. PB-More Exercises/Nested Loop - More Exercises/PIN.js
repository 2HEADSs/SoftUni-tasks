function solve(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let num3 = Number(input[2]);

  for (let i = 1; i <= num1; i++) {
    if (i % 2 === 0) {
      for (let j = 2; j <= num2; j++) {
        if ((j % 2 !== 0 || j === 2) && j <= 7) {
          for (let m = 1; m <= num3; m++) {
            if (m % 2 === 0) {
              console.log(`${i} ${j} ${m}`);
            }
          }
        }
      }
    }
  }
}
// solve(["3", "5", "5"]);
solve(["8", "2", "8"]);
