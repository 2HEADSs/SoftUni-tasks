function solve(input) {
  let budget = Number(input[0]);
  let type = input[1];
  let count = Number(input[2]);

  let normalPrice = 249.99;
  let vipPrice = 499.99;
  let transportPrice = 0;
  let ticketPrice = 0;
  if (count <= 4) {
    transportPrice = budget * 0.75;
  } else if (count <= 9) {
    transportPrice = budget * 0.6;
  } else if (count <= 24) {
    transportPrice = budget * 0.5;
  } else if (count <= 49) {
    transportPrice = budget * 0.4;
  } else if (count > 50) {
    transportPrice = budget * 0.25;
  }
  if (type === "Normal") {
    ticketPrice = count * normalPrice;
  } else if (type === "VIP") {
    ticketPrice = count * vipPrice;
  }
  let total = transportPrice + ticketPrice;
  let difference = Math.abs(budget - total);
  if (budget >= total) {
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
  }
}
solve(["1000", "Normal", "1"]);
solve(["30000", "VIP", "49"]);
