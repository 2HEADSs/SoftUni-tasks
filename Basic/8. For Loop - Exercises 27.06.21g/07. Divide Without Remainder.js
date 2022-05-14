function solve(input) {
  let numCount = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  for (let i = 1; i <= numCount; i++) {
    let currentNum = input[i];
    if (currentNum % 2 === 0) {
      p1++;
    }
    if (currentNum % 3 === 0) {
      p2++;
    }
    if (currentNum % 4 === 0) {
      p3++;
    }
  }
  p1 = (p1 / numCount) * 100;
  p2 = (p2 / numCount) * 100;
  p3 = (p3 / numCount) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
}
solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
