function solve(input) {
  let days = Number(input[0]);
  let allFood = Number(input[1]);
  let dogFoodKg = Number(input[2]);
  let catFoodKf = Number(input[3]);
  let turtleFoodKg = Number(input[4]) / 1000;
  let cat = days * catFoodKf;
  let dog = days * dogFoodKg;
  let turttle = days * turtleFoodKg;
  let sum = cat + dog + turttle;
  if (allFood >= sum) {
    console.log(`${Math.floor(allFood - sum)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(sum - allFood)} more kilos of food are needed.`);
  }
}
solve(["2", "10", "1", "1", "1200"]);
solve(["5", "10", "2.1", "0.8", "321"]);
