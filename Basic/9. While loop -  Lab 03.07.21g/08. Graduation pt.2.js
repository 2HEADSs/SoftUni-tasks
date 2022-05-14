function solve(input) {
  let index = 0;
  let name = input[index];
  index++;
  let grade = 1;
  let excluded = 0;
  let average = 0;
  let isExcluded = false;
  while (grade <= 12) {
    let yearGrade = Number(input[index]);
    index++;
    if (yearGrade >= 4.0) {
      grade++;
      average += yearGrade;
      continue;
    } else {
      excluded++;
    }
    if (excluded == 2) {
      console.log(`${name} has been excluded at ${grade} grade`);
      isExcluded = true;
      break;
    }
  }
  average = average / 12;
  if (!isExcluded) {
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  }
}
solve([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
solve(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);
