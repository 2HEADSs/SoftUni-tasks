function solve(input, count) {
  for (let i = 1; i <= count; i++) {
    let lastElement = input.pop();
    input.unshift(lastElement);
  }
  console.log(input.join(' '));
}
solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
