function solve(input, step) {
  let output = [];
  for (let i = 0; i < input.length; i += step) {
    output.push(input[i]);
  }
  return output;
}
solve(['5', '20', '31', '4', '20'], 2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);
