function solve(input) {
  let n1 = Number(input[0]);
  let maxNum = Number.NEGATIVE_INFINITY;
  for (let i = 1; i <= n1; i++) {
    let num = Number(input[i]);

    if (num > maxNum) {
      maxNum = num;
    }
  }
  console.log(`max = ${maxNum}`);
}
solve(["2", "100", "99"]);
