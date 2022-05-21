function solve(input) {
  let a = Number(input[0]);
  let h = Number(input[1]);
  let s = (a * h) / 2;
  console.log(s.toFixed(2));
}
solve(["20", "30"]);
solve(["15", "35"]);
solve(["7.75", "8.45"]);
solve(["1.23456", "4.56789"]);
