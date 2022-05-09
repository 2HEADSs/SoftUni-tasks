function solve(input) {
  let budget = Number(input[0]);
  let statistCount = Number(input[1]);
  let sumClothesPerOne = Number(input[2]);
  let decor = budget * 0.1;
  let sumAllStatist = statistCount * sumClothesPerOne;
  if (statistCount >= 150) {
    sumAllStatist = statistCount * sumClothesPerOne * 0.9;
  }
  let totalSum = sumAllStatist + decor;
  if (totalSum > budget) {
    let need = totalSum - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${need.toFixed(2)} leva more."`);
  } else {
    let need = budget - totalSum;
    console.log("Action!");
    console.log(`Wingard starts filming with ${need.toFixed(2)} leva left.`);
  }
}
solve(["20000", "120", "55.5"]);
console.log("----------------------------");
solve(["15437.62", "186", "57.99"]);
console.log("----------------------------");
solve(["9587.88", "222", "55.68"]);
