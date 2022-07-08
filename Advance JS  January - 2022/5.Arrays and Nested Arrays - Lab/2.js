function solve(a, b) {
  let output = [1];
  let n = Number(a);
  let k = Number(b);

  while (output.length < n) {
    let sum = 0;
    if (output.length < k) {
      for (let el of output) {
        sum += el;
      }
    } else {
      for (let i = output.length-1; i > output.length - 1 - k; i--) {
        sum += output[i];
      }
    }
    output.push(sum);
  }
  return output;
}
console.log(solve(6, 3));
