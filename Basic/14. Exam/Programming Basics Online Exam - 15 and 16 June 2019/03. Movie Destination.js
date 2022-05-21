function solve(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let count = Number(input[3]);
  let sum = 0;

  switch (season) {
    case "Winter":
      switch (destination) {
        case "Dubai":
          sum = count * 45000;
          break;
        case "Sofia":
          sum = count * 17000;
          break;
        case "London":
          sum = count * 24000;
          break;
      }
      break;

    case "Summer":
      switch (destination) {
        case "Dubai":
          sum = count * 40000;
          break;
        case "Sofia":
          sum = count * 12500;
          break;
        case "London":
          sum = count * 20250;
          break;
      }
      break;
  }
  if (destination === "Dubai") {
    sum *= 0.7;
  }
  if (destination === "Sofia") {
    sum *= 1.25;
  }
  let dif = Math.abs(budget - sum);
  if (budget >= sum) {
    console.log(
      `The budget for the movie is enough! We have ${dif.toFixed(2)} leva left!`
    );
  } else {
    console.log(`The director needs ${dif.toFixed(2)} leva more!`);
  }
}
solve(["400000", "Sofia", "Winter", "20"]);
solve(["1000000", "Dubai", "Summer", "5"]);
solve(["200000", "London", "Summer", "7"]);
