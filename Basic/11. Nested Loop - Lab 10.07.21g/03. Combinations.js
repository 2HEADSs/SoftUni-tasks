function solve(input) {
  let n = Number(input[0]);
  let count = 0;

  for (let a = 0; a <= n; a++) {
    for (let b = 0; b <= n; b++) {
      for (let c = 0; c <= n; c++) {
        if (a + b + c === n) {
          count++;
        }
      }
    }
  }
  console.log(count);
}
solve(["25"]);
solve(["20"]);
solve(["5"]);
