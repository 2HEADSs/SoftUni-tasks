function solve(arr) {
  let halfLength = Math.ceil(arr.length / 2);
  let output = [];
  let sort = arr.sort((a, b) => a - b);

  while (output.length < halfLength) {
    output.unshift(sort.pop());
  }
  return output
}
console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));
