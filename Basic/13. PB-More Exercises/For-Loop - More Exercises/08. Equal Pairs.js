function solve(input) {
  let pair = Number(input[0]);
  let different = 0;
  let sumNow = 0;
  let sumFirst = 0;
  let lastDif = 0;
  let bigestSum = 0;
  let minSum = 0;
  for (i = 1; i <= pair * 2; i++) {
    let current = Number(input[i]);
    sumNow = 0;
    sumNow += current;
    i++;
    current = Number(input[i]);
    sumNow += current;
    if (sumNow > bigestSum) {
      bigestSum = sumNow;
    }
    if (sumNow < minSum) {
      minSum = sumNow;
    }
    if (i < 3) {
      sumFirst = sumNow;
      minSum = sumNow;
    }
    if (sumFirst > sumNow) {
      different = sumFirst - sumNow;
      if (lastDif < different) {
        lastDif = different;
      }
    } else if (sumNow > sumFirst) {
      different = sumNow - sumFirst;
      if (lastDif < different) {
        lastDif = different;
      }
    }
  }
  if (different === 0) {
    console.log(`Yes, value=${sumNow}`);
  } else if (different !== 0) {
    console.log(`No, maxdiff=${bigestSum - minSum}`);
  }
}
// solve(["3", "1", "2", "0", "3", "4", "-1"]);
// solve(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
// solve(["2", "1", "2", "2", "2"]);
solve([
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
