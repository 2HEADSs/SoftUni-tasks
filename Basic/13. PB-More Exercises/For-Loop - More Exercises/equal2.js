function equalPairs(input) {
  let a = 0;
  let b = 0;
  let sum1 = 0;
  let sum2 = 0;
  let topDiff = 0;
  let difference = 0;

  for (let i = 0; i < input.length; i += 2) {
    a = Number(input[i - 1]);
    b = Number(input[i]);

    sum1 = a + b;

    if (sum2 !== 0) {
      difference = Math.abs(sum1 - sum2);
      if (difference > topDiff) {
        topDiff = difference;
      }
    }
    sum2 = sum1;
  }
  if (topDiff !== 0) {
    console.log(`No, maxdiff=${topDiff}`);
  } else {
    console.log(`Yes, value=${sum2}`);
  }
}
equalPairs([
  "7",
  "34",
  "-33",
  "52",
  "12",
  "-32",
  "32",
  "23",
  "41",
  "7",
  "25",
  "34",
  "23",
  "124",
  "21",
]);
