function solve(input) {
  let budget = Number(input[0]);
  let gender = input[1];
  let age = input[2];
  let sport = input[3];
  let sum = 0;

  switch (gender) {
    case "m":
      switch (sport) {
        case "Gym":
          sum = 42;
          break;
        case "Boxing":
          sum = 41;
          break;
        case "Yoga":
          sum = 45;
          break;
        case "Zumba":
          sum = 34;
          break;
        case "Dances":
          sum = 51;
          break;
        case "Pilates":
          sum = 39;
      }
      break;
    case "f":
      switch (sport) {
        case "Gym":
          sum = 35;
          break;
        case "Boxing":
          sum = 37;
          break;
        case "Yoga":
          sum = 42;
          break;
        case "Zumba":
          sum = 31;
          break;
        case "Dances":
          sum = 53;
          break;
        case "Pilates":
          sum = 37;
      }
      break;
  }
  if (age <= 19) {
    sum *= 0.8;
  }
  let difference = (sum - budget);

  if (budget >= sum) {
    console.log(`You purchased a 1 month pass for ${sport}.`);
  } else {
    console.log(`You don't have enough money! You need $${difference.toFixed(2)} more.`);
  }
}
solve(["50", "m", "23", "Gym"]);
solve(["20", "f", "15", "Yoga"]);
solve(["10", "m", "50", "Pilates"]);
