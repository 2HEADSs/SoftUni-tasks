function solve(input) {
  let capacity = Number(input[0]);
  let sum = 0;
  let inputL = input.length;
  let left = capacity;
  for (i = 1; i <= inputL - 1; i++) {
    let current = input[i];

    if (current === "Movie time!") {
      console.log(`There are ${left} seats left in the cinema.`);
      break;
    }
    let currentCount = Number(input[i]);
    left -= currentCount;
    if (left < 0) {
      console.log(`The cinema is full.`);
      break;
    }
    if (currentCount % 3 === 0) {
      sum += currentCount * 5 - 5;
    } else {
      sum += currentCount * 5;
    }
  }
  console.log(`Cinema income - ${sum} lv.`);
}
// solve([])
// solve(["50", "15", "15", "10", "6", "3", "3"]);
// solve(["60", "10", "6", "3", "20", "15", "Movie time!"]);
// solve(["50", "15", "10", "10", "15", "5"]);
solve([
  "100",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "10",
  "Movie time!",
]);
