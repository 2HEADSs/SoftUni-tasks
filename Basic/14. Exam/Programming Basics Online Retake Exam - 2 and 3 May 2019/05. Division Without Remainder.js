function solve(input) {
  let allNums = Number(input[0]);
  let index = 1;
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  while (index <= allNums) {
    let current = Number(input[index]);
    if (current % 2 === 0) {
      p1++;
    }
    if (current % 3 === 0) {
      p2++;
    }
    if (current % 4 === 0) {
      p3++;
    }
    index++;
  }
  p1 = (p1 / allNums) * 100;
  p2 = (p2 / allNums) * 100;
  p3 = (p3 / allNums) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);;
  console.log(`${p3.toFixed(2)}%`);
}
solve(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
solve(["3", "3", "6", "9"]);
