function solve(input) {
  let num = input[0];
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    let n = Number(num[i]);
    sum += n;
  }
  console.log(`The sum of the digits is:${sum}`);
}
solve(["1234"]);
solve(["564891"]);
solve(["56489132423467788001"])
