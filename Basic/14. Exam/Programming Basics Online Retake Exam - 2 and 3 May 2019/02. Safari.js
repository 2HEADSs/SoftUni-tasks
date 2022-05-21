function solve(input) {
  let budget = Number(input[0]);
  let liters = Number(input[1]);
  let day = input[2];

  let sumFuel = liters * 2.1;
  let guide = 100;
  let sum = sumFuel + guide;
  if (day === "Saturday") {
    sum *= 0.9;
  } else {
    sum *= 0.8;
  }

  if (budget >= sum) {
    let difference = budget - sum;
    console.log(`Safari time! Money left: ${difference.toFixed(2)} lv.`);
  } else {
    let difference = sum - budget;
    console.log(`Not enough money! Money needed: ${difference.toFixed(2)} lv.`);
  }
}
solve(["1000", "10", "Sunday"]);
solve(["120", "30", "Saturday"]);
