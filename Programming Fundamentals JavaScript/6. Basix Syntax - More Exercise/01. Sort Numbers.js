function sort(a, b, c) {
  let output = [];

  for (let i of arguments) {
    output.push(i);
  }
  output.sort().reverse();
  for (let n of output) {
    console.log(n);
  }
}
sort(2, 1, 3);
