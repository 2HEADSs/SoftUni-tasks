function solve(input) {
  let budget = Number(input[0]);
  let fuelNeed = Number(input[1]);
  let day = input[2];
  let difference = 0;

  let sum = fuelNeed * 2.1 + 100;
  if (day === "Sunday") {
    sum *= 0.80;
  } else {
    sum *= 0.90;
  }
  if(budget >= sum){
      difference = budget-sum;
      console.log(`Safari time! Money left: ${difference.toFixed(2)} lv.`);
  }else{
      difference = sum - budget;
      console.log(`Not enough money! Money needed: ${difference.toFixed(2)} lv.`);
  }
}
solve(["1000", "10", "Sunday"]);
solve(["120", "30", "Saturday"]);
