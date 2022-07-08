function solve(input) {
  let newArr = [];
  for (let i = 1; i < input.length; i += 2) {
    newArr.push(input[i]);
  }
  let doubledNumbrs =(newArr.map((num) => num * 2));
  let output = doubledNumbrs.reverse()
  return output.join(' ');
}
console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));
