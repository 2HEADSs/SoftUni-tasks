function solve(input) {
  let rent = Number(input[0]);
  let statues = rent * 0.7;
  let catering = statues * 0.85;
  let sound = catering / 2;
  let sum = rent + statues + catering + sound;
  console.log(sum.toFixed(2));
}
solve(["3500"]);
solve(["5555"]);
