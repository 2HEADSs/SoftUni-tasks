function solve(input) {
  let km = Number(input[0]);
  let time = input[1];
  let sum = 0;
  if (km < 20) {
    if (time === "day") {
      sum = 0.79 * km + 0.7;
    } else {
      sum = 0.9 * km + 0.7;
    }
  } else if (km >= 20 && km < 100) {
    sum = 0.09 * km;
  } else {
    sum = 0.06 * km;
  }
  console.log(sum.toFixed(2));
}
solve(["5", "day"]);
solve(["7", "night"]);
solve(["25", "day"]);
solve(["180", "night"]);
