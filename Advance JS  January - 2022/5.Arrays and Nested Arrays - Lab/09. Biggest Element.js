function solve(input) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  for (let el of input) {
    let sorted = el.sort((a, b) => b - a);
    if (sorted[0] > maxNum) {
      maxNum = sorted[0];
    }
  }
  return maxNum
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
solve([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
