function solve(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let sum = 0;
  let location = "";
  let place = "";
  if (budget <= 100) {
    location = "Bulgaria";
    if (season === "summer") {
      place = "Camp";
      sum = budget * 0.3;
    } else {
      place = "Hotel";
      sum = budget * 0.7;
    }
  } else if (budget <= 1000) {
    location = "Balkans";
    if (season === "summer") {
      place = "Camp";
      sum = budget * 0.4;
    } else {
      place = "Hotel";
      sum = budget * 0.8;
    }
  } else if (budget > 1000) {
    location = "Europe";
    sum = budget * 0.9;
    place = "Hotel";
  }
  console.log(`Somewhere in ${location}`);
  console.log(`${place} - ${sum.toFixed(2)}`);
}
solve(["50", "summer"]);
console.log("--------------");
solve(["75", "winter"]);
console.log("--------------");
solve(["312", "summer"]);
console.log("--------------");
solve(["678.53", "winter"]);
console.log("--------------");
solve(["1500", "summer"]);
