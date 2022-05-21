function solve(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let output = "";
  let isPrime = true;

  for (let i = 1; i <= a; i++) {
    if (i % 2 !== 0) {
      continue;    }
    for (let j = 2; j <= Math.sqrt(b); j++) {
      if (b % j === 0) {
        isPrime = false;
        break;
      }
      for (let k = 1; k <= c; k++) {
        if (k % 2 !== 0) {
          continue;
        }
        output += `${i} ${j} ${k} `;
      }
    }
  }
  console.log(output);
}
solve(["3", "5", "5"]);
