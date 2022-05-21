function solve(input) {
  let company = input[0];
  let adultTickets = Number(input[1]);
  let kidsTickets = Number(input[2]);
  let adultPrice = Number(input[3]);
  let taxes = Number(input[4]);
  let kidsPrice = adultPrice * 0.3;
  let adultSum = adultPrice + taxes;
  let kidsSum = kidsPrice + taxes;
  let sum = adultTickets * adultSum + kidsTickets * kidsSum;
  let profit = sum * 0.2;
  console.log(
    `The profit of your agency from ${company} tickets is ${profit.toFixed(
      2
    )} lv.`
  );
}
solve(["WizzAir", "15", "5", "120", "40"]);
solve(["Ryanair", "60", "23", "158.96", "39.12"]);
