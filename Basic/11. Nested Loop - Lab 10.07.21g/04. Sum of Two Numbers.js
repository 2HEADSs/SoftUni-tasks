function solve(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let mag = Number(input[2]);
  let isFound = false;
  let counter = 0;

  for (let a = x; a <= y; a++) {
    for (let b = x; b <= y; b++) {
      counter++;
      if (a + b === mag) {
        console.log(`Combination N:${counter} (${a} + ${b} = ${mag})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${counter} combinations - neither equals ${mag}`);
  }
}
solve(["1", "10", "5"]);
solve(["88", "888", "1000"]);
solve(["23", "24", "20"]);
solve(["88", "888", "2000"]);
