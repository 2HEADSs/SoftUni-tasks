function solve(input) {
  let name = input[0];
  let days = Number(input[1]);
  let tickets = Number(input[2]);
  let priceTicket = Number(input[3]);
  let percent = Number(input[4]);

  let sum = days * tickets * priceTicket;
  let percentCinema = (sum * percent) / 100;
  let total = sum - percentCinema;
  console.log(`The profit from the movie ${name} is ${total.toFixed(2)} lv.`);
}
solve(["The Programmer", "20", "500", "7.50", "7"]);
solve(["Python Basics ", "40", "34785", "10.45", "14"]);
