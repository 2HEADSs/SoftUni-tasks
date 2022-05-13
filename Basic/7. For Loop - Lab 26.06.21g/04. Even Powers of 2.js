function solve(input) {
  let n = Number(input[0]);
  for (let i = 0; i <= n; i += 2) {
    let result = Math.pow(2, i);
    console.log(result);
  }
}
// solve(["3"]);
// console.log("--------------");
// solve(["4"]);
// console.log("--------------");
// solve(["5"]);
// console.log("--------------");
// solve(["6"]);
// console.log("--------------");
solve(["7"]);
