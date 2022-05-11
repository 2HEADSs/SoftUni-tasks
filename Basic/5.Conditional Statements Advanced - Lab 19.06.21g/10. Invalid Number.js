function solve(input) {
  let n = Number(input[0]);

  let isValid = (n >= 100 && n <= 200) || n === 0;
  if (!isValid) {
    console.log("invalid");
  }
}
solve(["75"]);
console.log("--------------");
solve(["150"]);
console.log("--------------");
solve(["220"]);
console.log("--------------");
solve(["199"]);
console.log("--------------");
solve(["-1"]);
console.log("--------------");
solve(["100"]);
console.log("--------------");
solve(["200"]);
console.log("--------------");
solve(["0"]);
