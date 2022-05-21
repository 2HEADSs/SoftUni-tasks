function solve(input) {
  let count = Number(input[0]);
  let sum = 0;
  for (let i = 1; i < input.length; i++) {
    let current = Number(input[i]);
    sum += current;
  }
  console.log(`${(sum / count).toFixed(2)}`);
}
solve(["4", "3", "2", "4", "2"]);
