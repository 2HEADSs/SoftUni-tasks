function solve(input) {
  let season = input[0];
  let km = Number(input[1]);
  let sum = 0;

  if (km <= 5000) {
    switch (season) {
      case "Spring":
      case "Autumn":
        sum = km * 0.75;
        break;
      case "Summer":
        sum = km * 0.9;
        break;
      case "Winter":
        sum = km * 1.05;
        break;
    }
  } else if (km <= 10000) {
    switch (season) {
      case "Spring":
      case "Autumn":
        sum = km * 0.95;
        break;
      case "Summer":
        sum = km * 1.1;
        break;
      case "Winter":
        sum = km * 1.25;
        break;
    }
  } else if (km <= 20000) {
    sum = km * 1.45;
  }
  let total = sum * 4 * 0.9;
  console.log(total.toFixed(2));
}
solve(["Summer", "3455"]);
solve(["Winter", "4350"]);
solve(["Spring", "1600"]);
solve(["Winter", "5678"]);
solve(["Autumn", "8600"]);
solve(["Winter", "16042"]);
solve(["Spring", "16942"]);
