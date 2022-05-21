function solve(input) {
  let chickenCount = Number(input[0]);
  let fishCount = Number(input[1]);
  let veggieCount = Number(input[2]);

  let sumChicken = chickenCount * 10.35;
  let sumFish = fishCount * 12.4;
  let sumVeggie = veggieCount * 8.15;
  let sumDesert = (sumChicken + sumFish + sumVeggie) * 0.2;
  let sum = sumChicken + sumFish + sumVeggie + sumDesert + 2.5;
  console.log(`Total: ${sum.toFixed(2)}`);
}
solve(["2", "4", "3"]);
solve(["10", "0", "6"]);
