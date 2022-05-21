function solve(input) {
  let inputL = input.length;
  let num = 0;
  let sum = 0;
  for (i = 0; i <= inputL; i++) {
    num = Number(input[i]);
    if (num < 0) {
      console.log("Negative number!");
      break;
    }
    sum = num * 2;
    console.log(`Result: ${sum.toFixed(2)}`);
  }
}
solve(["12", "43.2144", "12.3", "543.23", "-20"]);
