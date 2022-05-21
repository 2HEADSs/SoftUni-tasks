function solve(input) {
  let movie = input[0];
  let extra = input[1];
  let countTickets = Number(input[2]);
  let price = 0;

  switch (movie) {
    case "John Wick":
      switch (extra) {
        case "Drink":
          price = 12 * countTickets;
          break;
        case "Popcorn":
          price = 15 * countTickets;
          break;
        case "Menu":
          price = 19 * countTickets;
          break;
      }
      break;
    case "Star Wars":
      switch (extra) {
        case "Drink":
          price = 18 * countTickets;
          break;
        case "Popcorn":
          price = 25 * countTickets;
          break;
        case "Menu":
          price = 30 * countTickets;
          break;
      }
      break;
    case "Jumanji":
      switch (extra) {
        case "Drink":
          price = 9 * countTickets;
          break;
        case "Popcorn":
          price = 11 * countTickets;
          break;
        case "Menu":
          price = 14 * countTickets;
          break;
      }
      break;
  }
  if (movie === "Star Wars" && countTickets >= 4) {
    price *= 0.7;
  }
  if (movie === "Jumanji" && countTickets === 2) {
    price *= 0.85;
  }
  console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
solve(["John Wick", "Drink", "6"]);
solve(["Star Wars", "Popcorn", "4"]);
solve(["Jumanji", "Menu", "2"]);
