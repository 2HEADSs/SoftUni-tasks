function solve(input) {
  let budget = Number(input[0]);
  let countSeries = Number(input[1]);
  let index = 2;
  let current = input[index];
  let series = 0;
  let sum = 0;
  let price = 0;
  while (series < countSeries) {
    if (current === "Thrones") {
      index++;
      price = Number(input[index]);
      sum += price * 0.5;
    } else if (current === "Lucifer") {
      index++;
      price = Number(input[index]);
      sum += price * 0.6;
    } else if (current === "Protector") {
      index++;
      price = Number(input[index]);
      sum += price * 0.7;
    } else if (current === "TotalDrama") {
      index++;
      price = Number(input[index]);
      sum += price * 0.8;
    } else if (current === "Area") {
      index++;
      price = Number(input[index]);
      sum += price * 0.9;
    } else {
      index++;
      price = Number(input[index]);
      sum += price;
    }
    series++;
    index++;
    current = input[index];
  }
  let differences = Math.abs(budget - sum);
  if (budget >= sum) {
    console.log(
      `You bought all the series and left with ${differences.toFixed(2)} lv.`
    );
  } else {
    console.log(
      `You need ${differences.toFixed(2)} lv. more to buy the series!`
    );
  }
}
solve(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
solve([
  "25",
  "6",
  "Teen Wolf",
  "8",
  "Protector",
  "5",
  "TotalDrama",
  "5",
  "Area",
  "4",
  "Thrones",
  "5",
  "Lucifer",
  "9",
]);
