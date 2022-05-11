function solve(input) {
  let num = Number(input[0]);
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Error");
      break;
  }
}
solve(["1"]);
solve(["2"]);
solve(["3"]);
solve(["4"]);
solve(["5"]);
solve(["6"]);
solve(["7"]);
solve(["-1"]);
