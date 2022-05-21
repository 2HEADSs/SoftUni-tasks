function series(input) {
  let budget = Number(input[0]);
  let series = Number(input[1]);
  let sum = 0;
  for (let i = 2; i <= series * 2; i++) {
    let name = input[i];
    i++;
    let price = Number(input[i]);
    if (name == "Thrones") {
      price *= 0.5;
    } else if (name === "Lucifer") {
      price *= 0.6;
    } else if (name === "Protector") {
      price *= 0.7;
    } else if (name === "TotalDrama") {
      price *= 0.8;
    } else if (name === "Area") {
      price *= 0.9;
    }
    sum += price;
  }
  let difference = 0;
  if (budget >= sum) {
    difference = budget - sum;
    console.log(
      `You bought all the series and left with ${difference.toFixed(2)} lv.`
    );
  } else {
    difference = sum - budget;
    console.log(`You need ${difference.toFixed(2)} lv. more to buy the series!`);
  }
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series([
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
