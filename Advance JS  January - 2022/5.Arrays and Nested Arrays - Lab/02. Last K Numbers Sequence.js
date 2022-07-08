function solve(a, b) {
  let output = [1];
  let n = Number(a);
  let k = Number(b);

  while (output.length < n) {
    let sum = 0;
    if (output.length < k) {
      for (let num of output) {
        sum += num;
      }
    } else {
      for (let i = output.length - 1; i > output.length - 1 - k; i--) {
        let current = output[i];
        sum += current;
      }
    }
    output.push(sum);
  }
  return output;
}
solve(6, 3);
