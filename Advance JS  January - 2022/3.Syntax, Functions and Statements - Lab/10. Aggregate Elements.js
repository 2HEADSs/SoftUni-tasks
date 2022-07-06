function solve(input) {
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = '';

  for (let el of input) {
    sum1 += el;
    sum2 += 1 / el;
    sum3 += el;
  }
  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
}
solve([1, 2, 3]);
solve([2, 4, 8, 16]);
