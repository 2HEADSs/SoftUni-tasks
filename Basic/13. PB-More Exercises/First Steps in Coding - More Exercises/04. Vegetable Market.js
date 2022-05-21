function solve(input) {
  let priceVegetables = Number(input[0]);
  let priceFruits = Number(input[1]);
  let vegetableInKg = Number(input[2]);
  let fruitInKg = Number(input[3]);
  let sumVeg = priceVegetables * vegetableInKg;
  let sumFruits = priceFruits * fruitInKg;
  let total = (sumFruits + sumVeg) / 1.94;
  console.log(total.toFixed(2));
}
solve(["0.194", "19.4", "10", "10"]);
solve(["1.5", "2.5", "10", "10"]);
// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]
