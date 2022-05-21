function solve(input) {
  let period = Number(input[0]);
  let countDoc = 7;
  let treated = 0;
  let untreated = 0;

  for (i = 1; i <= period; i++) {
    let currentCount = Number(input[i]);
    if (i % 3 == 0 && untreated > treated) {
      countDoc++;
    }
    if (currentCount > countDoc) {
      treated += countDoc;
      untreated += currentCount - countDoc;
    } else {
      treated += currentCount;
    }
  }
  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${untreated}.`);
}
solve(["4", "7", "27", "9", "1"]);
console.log("-------------------");
solve(["6", "25", "25", "25", "25", "25", "2"]);
console.log("-------------------");
solve(["3", "7", "7", "7"]);
