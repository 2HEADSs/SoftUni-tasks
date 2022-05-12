function solve(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let count = Number(input[2]);

  let sum = 0;
  switch (season) {
    case "Spring":
      sum = 3000;
      break;
    case "Summer":
    case "Autumn":
      sum = 4200;
      break;
    case "Winter":
      sum = 2600;
      break;
  }
  if (count <= 6) {
    sum *= 0.9;
  } else if (count <= 11) {
    sum *= 0.85;
  } else if (count >= 12) {
    sum *= 0.75;
  }
  if(count % 2 === 0 && season !== "Autumn"){
      sum *= 0.95;
  }
  let difference = Math.abs(budget - sum)
  if(budget >= sum){
      console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
  }else{
      console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
  }
}
solve(["3000", "Summer", "11"]);
console.log("-----------------");
solve(["3600", "Autumn", "6"]);
console.log("-----------------");
solve(["2000", "Winter", "13"]);
// В зависимост от броя си групата ползва отстъпка:
// •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// •	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// •	Ако групата е от 12 нагоре  –  отстъпка от 25%.
