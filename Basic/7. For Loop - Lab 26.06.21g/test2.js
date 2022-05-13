function solve(input) {
  let a = Number(input[0]);
  for (i = a; i >= 1; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
//   solve(["2"]);
//   solve(["3"]);
solve(["5"]);
