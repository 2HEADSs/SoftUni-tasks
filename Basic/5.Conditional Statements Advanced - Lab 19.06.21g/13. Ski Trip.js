function solve(input) {
  let nights = Number(input[0]) - 1;
  let type = input[1];
  let grade = input[2];
  let sum = 0;

  switch (type) {
    case "room for one person":
      sum = nights * 18;
      break;
    case "apartment":
      sum = nights * 25;
      if (nights < 10) {
        sum *= 0.7;
      } else if (nights <= 15) {
        sum *= 0.65;
      } else if (nights > 15) {
        sum *= 0.5;
      }
      break;
    case "president apartment":
      sum = nights * 35;
      if (nights < 10) {
        sum *= 0.9;
      } else if (nights <= 15) {
        sum *= 0.85;
      } else if (nights > 15) {
        sum *= 0.8;
      }
  }
  if (grade === "positive") {
    sum *= 1.25;
  } else {
    sum *= 0.9;
  }
  console.log(sum.toFixed(2));
}
solve(["14", "apartment", "positive"]);
solve(["30", "president apartment", "negative"]);
solve(["12", "room for one person", "positive"]);
solve(["2", "apartment", "positive"]);
