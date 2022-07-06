function solve(first, second, third) {
  let sum = 0;
  let avgSum = 0;
  sum = first.length + second.length + third.length;
  avgSum = Math.floor(sum / 3);
  console.log(sum);
  console.log(avgSum);
}
solve("chocolate", "ice cream", "cake");
solve("pasta", "5", "22.3");
