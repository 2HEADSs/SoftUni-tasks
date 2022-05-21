function solve(input) {
  let budget = Number(input[0]);
  let left = budget;
  let inputL = input.length;
  let countProducts = 0;
  let sum = 0;

  for (i = 1; i <= inputL - 1; i++) {
    let current = input[i];
    if (current === "Stop") {
      console.log(
        `You bought ${countProducts} products for ${sum.toFixed(2)} leva.`
      );
      break;
    }
    countProducts++;
    i++;
    currentPrice = Number(input[i]);
    if (countProducts % 3 === 0) {
      currentPrice /= 2;
    }
    if (currentPrice > left) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${(currentPrice - left).toFixed(2)} leva!`);
    }
    left -= currentPrice;
    sum += currentPrice;
  }
}
solve([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);
solve(["54", "Thermal underwear", "24", "Sunscreen", "45"]);
