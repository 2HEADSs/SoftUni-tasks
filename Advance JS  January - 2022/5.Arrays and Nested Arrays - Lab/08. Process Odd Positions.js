function solve(input) {
  let newArr = [];
  for (let i = 1; i < input.length; i += 2) {
    newArr.unshift(input[i] * 2);
  }
  return newArr.join(' ')
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
