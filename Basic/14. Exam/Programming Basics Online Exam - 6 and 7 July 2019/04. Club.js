function solve(input) {
  let budget = Number(input[0]);
  let textL = input.length;
  let sum = 0;
  let diff = 0;
  for (let i = 1; i <= textL-1; i++) {
    let current = input[i];
    if (current === "Party!") {
      console.log(`We need ${diff.toFixed(2)} leva more.`);
      break;
    }
    let currentCockteil = current;
    let currentPrice = currentCockteil.length;

    i++;
    current = Number(input[i]);
    let currentSum = currentPrice * current;

    if (currentSum % 2 !== 0) {
      currentSum *= 0.75;
    }
    sum += currentSum;

    diff = Math.abs(budget - sum);
    if (sum >= budget) {
      console.log(`Target acquired.`);
    }
  }
  console.log(`Club income - ${sum.toFixed(2)} leva.`);
}
solve(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
solve(["100", "Sidecar", "7", "Mojito", "5", "White", "Russian", "10"]);