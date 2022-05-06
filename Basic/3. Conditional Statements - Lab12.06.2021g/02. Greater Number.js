function solve(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
solve(["5", "3"]);
solve(["3", "5"]);
