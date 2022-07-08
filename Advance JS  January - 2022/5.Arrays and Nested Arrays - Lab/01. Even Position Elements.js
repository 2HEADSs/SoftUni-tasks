function solve(input) {
  let arr = input;
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (i % 2 === 0) {
      output.push(el);
    }
  }
  console.log(output.join(' '));
}
solve(['20', '30', '40', '50', '60']);
