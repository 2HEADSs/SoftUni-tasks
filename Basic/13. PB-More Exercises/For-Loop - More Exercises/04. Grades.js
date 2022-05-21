function solve(input) {
  let countStudents = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  let sum = 0;

  for (i = 1; i <= countStudents; i++) {
    let grade = Number(input[i]);
    sum += grade;
    if (grade >= 5) {
      p1++;
    } else if (grade >= 4.0) {
      p2++;
    } else if (grade >= 3.0) {
      p3++;
    } else {
      p4++;
    }
  }
  p5 = sum / countStudents;

  p1 = (p1 / countStudents) * 100;
  p2 = (p2 / countStudents) * 100;
  p3 = (p3 / countStudents) * 100;
  p4 = (p4 / countStudents) * 100;
  console.log(`Top students: ${p1.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${p2.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${p3.toFixed(2)}%`);
  console.log(`Fail: ${p4.toFixed(2)}%`);
  console.log(`Average: ${p5.toFixed(2)}`);
}
solve([
  "10",
  "3.00",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6.00",
  "4.50",
  "2.44",
  "5",
]);
