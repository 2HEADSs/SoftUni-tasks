function solve(input) {
  let output = Number(input.shift()) + Number(input.pop());
  return output;
}
console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));
