function solve(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let clas = "";
  let type = "";
  let sum = 0;
  if (budget <= 100) {
    clas = "Economy class";
    switch (season) {
      case "Summer":
        type = "Cabrio";
        sum = budget * 0.35;
        break;
      case "Winter":
        type = "Jeep";
        sum = budget * 0.65;
        break;
    }
  } else if (budget <= 500) {
    clas = "Compact class";
    switch (season) {
      case "Summer":
        type = "Cabrio";
        sum = budget * 0.45;
        break;
      case "Winter":
        type = "Jeep";
        sum = budget * 0.8;
        break;
    }
  } else {
    clas = "Luxury class";
    type = "Jeep";
    sum = budget * 0.9;
  }
  console.log(`${clas}`);
  console.log(`${type} - ${sum.toFixed(2)}`);
}
solve(["450", "Summer"]);
solve(["450", "Winter"]);
solve(["1100", "Summer"]);
solve(["99.99", "Summer"]);
solve(["1010", "Winter"]);
solve(["70.50", "Winter"]);
