function solve(input) {
  let arr = input;
  arr.sort((a, b) => a - b);
  let output = [];
  while (output.length < 2) {
    output.push(arr.shift());
  }
console.log(output.join(" "));
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
