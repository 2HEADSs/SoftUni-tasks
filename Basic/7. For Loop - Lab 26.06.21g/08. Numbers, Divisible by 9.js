function solve(input) {
  let n = Number(input[0]);
  let m = Number(input[1]);
  let sum = 0;
  let exitNum = "";

  for (let i = n; i <= m; i++) {
    if (i % 9 === 0) {
      sum += i;
      exitNum += i + `\n`;
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(exitNum);
}
solve(["100", "200"]);
