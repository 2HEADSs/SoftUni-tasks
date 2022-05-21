function solve(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let sumAvgGrade = 0;
  let counter = 0;
  while (command !== "Finish") {
    counter++;
    let presentationName = command;
    let tempAvgGrade = 0;
    for (i = 0; i < n; i++) {
      let tempGrade = Number(input[index]);
      index++;
      tempAvgGrade += tempGrade;
    }
    tempAvgGrade = tempAvgGrade / n;
    console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`);
    sumAvgGrade += tempAvgGrade;
    command = input[index];
    index++;
  }
  sumAvgGrade = sumAvgGrade / counter;
  console.log(`Student's final assessment is ${sumAvgGrade.toFixed(2)}.`);
}
solve([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
