function solve(input) {
  let movie = input[0];
  let extra = input[1];
  let count = Number(input[2]);
  let sum = 0;

  switch (movie) {
    case "John Wick":
      switch (extra) {
        case "Drink":
          sum = count * 12;
          break;
        case "Popcorn":
          sum = count * 15;
          break;
        case "Menu":
          sum = count * 19;
          break;
      }
      break;
    case "Star Wars":
      switch (extra) {
        case "Drink":
          sum = count * 18;
          break;
        case "Popcorn":
          sum = count * 25;
          break;
        case "Menu":
          sum = count * 30;
          break;
      }
      break;
    case "Jumanji":
      switch (extra) {
        case "Drink":
          sum = count * 9;
          break;
        case "Popcorn":
          sum = count * 11;
          break;
        case "Menu":
          sum = count * 14;
          break;
      }
      break;
  }
  if (movie === "Star Wars" && count >= 4) {
    sum *= 0.7;
  }
  if (movie === "Jumanji" && count === 2) {
    sum *= 0.85;
  }
  console.log(`Your bill is ${sum.toFixed(2)} leva.`);
}
solve(["John Wick", "Drink", "6"]);
solve(["Star Wars", "Popcorn", "4"]);
solve(["Jumanji", "Menu", "2"]);
