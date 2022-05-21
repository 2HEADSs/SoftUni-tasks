function solve(input) {
  let budget = Number(input[0]);
  let statist = Number(input[1]);
  let pricePerOne = Number(input[2]);
  let sumClothes = statist * pricePerOne;
  let decor = budget * 0.1;

  if (statist > 150) {
    sumClothes *= 0.9;
  }
  let total = sumClothes + decor;
  if (total > budget) {
    let diffference = total - budget;
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diffference.toFixed(2)} leva more.`);
  } else {
    let difference = budget - total;
    console.log(`Action!`);
    console.log(
      `Wingard starts filming with ${difference.toFixed(2)} leva left.`
    );
  }
}
solve(["20000", "120", "55.5"]);
solve(["15437.62", "186", "57.99"]);
