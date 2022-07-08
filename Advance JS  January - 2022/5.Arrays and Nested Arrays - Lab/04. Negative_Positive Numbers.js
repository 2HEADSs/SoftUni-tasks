function solve(input) {
  let output = [];
  for (let el of input) {
    if (el >= 0) {
      output.push(el);
    } else {
      output.unshift(el);
    }
  }
  console.log(output.join('\n'));
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
