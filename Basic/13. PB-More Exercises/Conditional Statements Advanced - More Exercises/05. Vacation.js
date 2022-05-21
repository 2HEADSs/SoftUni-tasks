function solve(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let type = "";
  let place = "";
  let sum = 0;

  if (budget <= 1000) {
    type = "Camp";
    switch (season) {
      case "Summer":
        place = "Alaska";
        sum = budget * 0.65;
        break;
      case "Winter":
        place = "Morocco";
        sum = budget * 0.45;
        break;
    }
  } else if (budget > 1000 && budget <= 3000) {
    type = "Hut";
    switch (season) {
      case "Summer":
        place = "Alaska";
        sum = budget * 0.8;
        break;
      case "Winter":
        place = "Morocco";
        sum = budget * 0.6;
        break;
    }
  } else if (budget > 3000) {
    type = "Hotel";
    switch (season) {
      case "Summer":
        place = "Alaska";
        sum = budget * 0.9;
        break;
      case "Winter":
        place = "Morocco";
        sum = budget * 0.9;
        break;
    }
  }
  console.log(`${place} - ${type} - ${sum.toFixed(2)}`);
}
solve(["800", "Summer"]);
solve(["799.50", "Winter"]);
solve(["3460", "Summer"]);
solve(["1100", "Summer"]);
solve(["5000", "Winter"]);
solve(["2543.99", "Winter"]);
