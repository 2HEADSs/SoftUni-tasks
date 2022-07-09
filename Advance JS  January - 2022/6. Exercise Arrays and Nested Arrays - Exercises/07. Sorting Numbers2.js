function solve(input) {
  let sortedAscending = input.sort((a, b) => a - b);
  let output = [];
  let needLnegth = input.length;
  while (output.length < needLnegth) {
    let smallest = sortedAscending.shift();
    let biggest = sortedAscending.pop();
    output.push(smallest);
    output.push(biggest);
  }
  //check if they are odd - do not return "undefined"
  let finalResult = output.filter((el) => {
    return typeof el !== 'undefined';
  });
  return finalResult;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
