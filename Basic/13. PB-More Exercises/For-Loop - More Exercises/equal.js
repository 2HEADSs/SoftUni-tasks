function equalPairs(input) {
  let num = Number(input[0]);

  let a = 0;
  let b = 0;
  let a1 = 0;
  let b1 = 0;
  let sum = 0;
  let sum1 = 0;
  let diff = 0;

  for (let i = 1; i < num * 2; i += 2) {
    if (i % num !== 0) {
      a = Number(input[i]);
      b = Number(input[i + 1]);
      sum = a + b;
    } else if (i % num === 0) {
      a1 = Number(input[i]);
      b1 = Number(input[i + 1]);
      sum1 = a1 + b1;
    }
  }

  if (sum !== sum1) {
    diff = Math.abs(sum - sum1);
  }
  if (sum === sum1) {
    console.log(`Yes, value=${sum}`);
  } else if (sum !== sum1) {
    console.log(`No, maxdiff=${diff}`);
  }
}
equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
