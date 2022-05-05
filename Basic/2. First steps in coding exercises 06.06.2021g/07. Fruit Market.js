function solve(input) {
  let priceStrawberry = Number(input[0]);
  let bananasInKg = Number(input[1]);
  let orangesInKg = Number(input[2]);
  let raspberriesInKg = Number(input[3]);
  let strawberryInKg = Number(input[4]);
  let priceRaspberry = priceStrawberry / 2;
  let priceOranges = priceRaspberry * 0.6;
  let priceBananas = priceRaspberry * 0.2;

  let sumStrawberry = priceStrawberry * strawberryInKg;
  let sumBananas = priceBananas * bananasInKg;
  let sumOranges = priceOranges * orangesInKg;
  let sumRaspberries = priceRaspberry * raspberriesInKg;
  let totalSum = sumStrawberry + sumBananas + sumOranges + sumRaspberries;
  console.log(totalSum);
}
solve(["48", "10", "3.3", "6.5", "1.7"]);
solve(["63.5", "3.57", "6.35", "8.15", "2.5"]);
// •	цената на малините е на половина по-ниска от тази на ягодите;
// •	цената на портокалите е с 40% по-ниска от цената на малините;
// •	цената на бананите е с 80% по-ниска от цената на малините.

// 1.	Цена на ягодите в лева – реално число в интервала [0.00 … 10000.00]
// 2.	Количество на бананите в килограми – реално число в интервала [0.00 … 10000.00]
// 3.	Количество на портокалите в килограми – реално число в интервала [0.00 … 10000.00]
// 4.	Количество на малините в килограми – реално число в интервала [0.00 … 10000.00]
// 5.	Количество на ягодите в килограми – реално число в интервала [0.00 … 10000.00]
