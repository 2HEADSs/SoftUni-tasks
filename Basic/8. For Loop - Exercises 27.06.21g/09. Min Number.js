function solve(input) {
  let numCount = Number(input[0]);
  let inputL = input.length;
  let minNum = 0;
  for (i = 1; i <= inputL; i++) {
    let num = Number(input[i]);
    if (num < numCount) {
      minNum = num;
    }
  }
  console.log(minNum);
}
solve(["3", "-10", "20", "-30"]);
solve[("2", "100", "99")];
solve(["2", "-1", "-2"]);
solve(["4", "45", "-20", "7", "99"]);
