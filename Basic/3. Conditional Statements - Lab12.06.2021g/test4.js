function solve(input) {
  let capacity = Number(input[0]);
  let countLoaded = 0;
  let result = 0;
  for (let i = 1; i < Infinity; i++) {
    if (capacity >= input[i]) {
      countLoaded += 1;
      result = countLoaded / 3;
    }
    if (input[i] !== "End") {
      if (capacity > 0 && !Number.isInteger(result)) {
        capacity = capacity - +input[i];
      } else if (Number.isInteger(result) && capacity > 0 && i > 1) {
        capacity = capacity - (+input[i] + +input[i] * (10 / 100));
      }
    } else if (capacity <= 0) {
      console.log(`No more space!`);
      break;
    } else {
      console.log(`Congratulations! All suitcases are loaded!`);
      break;
    }
  }
  console.log(`Statistic: ${countLoaded} suitcases loaded.`);
}
solve(["1200.2", "260", "380.5", "125.6", "305", "End"]);
