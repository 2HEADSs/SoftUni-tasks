function solve(input) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  let outputArr = [];

  for (let el of input) {
    if (el >= maxNum) {
      outputArr.push(el);
      maxNum = el;
    }
  }
  return outputArr;
}
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]))
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
