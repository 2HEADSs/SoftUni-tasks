function solve(input) {
  let day = input[0];
  let sum = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Friday":
      sum = 12;
      break;
    case "Wednesday":
    case "Thursday":
      sum = 14;
      break;
    case "Saturday":
    case "Sunday":
      sum = 16;
      break;
  }
  console.log(sum);
}
solve(["Monday"]);
solve(["Friday"]);
solve(["Sunday"]);
