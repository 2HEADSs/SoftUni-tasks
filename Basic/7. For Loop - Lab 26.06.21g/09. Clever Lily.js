function solve(input) {
  let age = Number(input[0]);
  let priceDishwasher = Number(input[1]);
  let priceToy = Number(input[2]);
  let sumMoney = 0;
  let sumToys = 0;
  let money = 10;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 1) {
      sumToys++;
    } else {
      sumMoney += money;
      money += 10;
      sumMoney--;
    }
  }
  sumMoney += sumToys * priceToy;
  let difference = Math.abs(priceDishwasher - sumMoney);
  if (sumMoney >= priceDishwasher) {
    console.log(`Yes! ${difference.toFixed(2)}`);
  } else {
    console.log(`No! ${difference.toFixed(2)}`);
  }
}
solve(["10", "170", "6"]);
console.log("-----------------------");
solve(["21", "1570.98", "3"]);
