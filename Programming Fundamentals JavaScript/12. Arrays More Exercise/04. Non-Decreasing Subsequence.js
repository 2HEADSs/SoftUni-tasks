function subsequence(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let output = "";

  for (let i = 0; i < arr.length; i++) {
    let current = Number(arr[i]);
    if (current >= max) {
      max = current;
      output += current + " ";
    }
  }
  console.log(output);
}
subsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
subsequence([1, 2, 3, 4]);
subsequence([20, 3, 2, 15, 6, 1]);
