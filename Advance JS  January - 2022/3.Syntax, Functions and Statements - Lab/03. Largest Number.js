function solve(a, b, c) {
  let maxNum = 0;

  if (a > b && a > c) {
    maxNum = a;
  } else if (b > a && b > c) {
    maxNum = b;
  } else if (c > a && c > b) {
    maxNum = c;
  }
  console.log(`The largest number is ${maxNum}.`);
}
solve(5, -3, 16);
solve(-3, -5, -22.5);
