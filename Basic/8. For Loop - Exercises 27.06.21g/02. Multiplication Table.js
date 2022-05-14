function solve(input) {
  let n = Number(input[0]);
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = i * n;
    console.log(`${i} * ${n} = ${i * n}`);
  }
}
solve(["5"]);
