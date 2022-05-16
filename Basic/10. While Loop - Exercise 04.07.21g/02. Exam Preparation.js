function solve(input) {
  let maxPoor = Number(input[0]);
  let i = 1;
  let current = input[i++];
  let sum = 0;
  let count = 0;
  let last = "";
  let isPoor = false;
  let poor = 0;
  while (current !== "Enough") {
    last = current;
    current = Number(input[i++]);
    sum += current;
    if (current <= 4) {
      maxPoor--;
      poor++;
    }
    if (maxPoor == 0) {
      isPoor = true;
      break;
    }
    count++;
    current = input[i++];
  }
  if (isPoor === false) {
    console.log(`Average score: ${(sum / count).toFixed(2)}`);
    console.log(`Number of problems: ${count}`);
    console.log(`Last problem: ${last}`);
  } else {
    console.log(`You need a break, ${poor} poor grades.`);
  }
}
solve([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
// solve(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
