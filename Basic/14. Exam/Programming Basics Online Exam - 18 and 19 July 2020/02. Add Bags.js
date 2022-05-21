function solve(input) {
  let priceOver20 = Number(input[0]);
  let weight = Number(input[1]);
  let days = Number(input[2]);
  let count = Number(input[3]);
  let sum = 0;
  if (weight < 10) {
    sum = priceOver20 * 0.2;
  } else if (weight <= 20) {
    sum = priceOver20 * 0.5;
  } else if (weight > 20) {
    sum = priceOver20;
  }
  if (days < 7) {
    sum *= 1.4;
  } else if (days <= 30 && days >= 7) {
    sum *= 1.15;
  } else if (days > 30) {
    sum *= 1.1;
  }
  let sumTotal = sum * count;
  console.log(`The total price of bags is: ${sumTotal.toFixed(2)} lv. `);
}
solve(["30", "18", "15", "2"]);
solve(["25.50", "5", "36", "6"]);
solve(["63.80", "23", "3", "1"]);
