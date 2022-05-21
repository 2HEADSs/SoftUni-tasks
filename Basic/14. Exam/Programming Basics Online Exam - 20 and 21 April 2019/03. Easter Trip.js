function solve(input) {
  let place = input[0];
  let time = input[1];
  let nights = Number(input[2]);
  let sum = 0;

  switch (place) {
    case "Germany":
      if (time === "21-23") {
        sum = nights * 32;
      } else if (time === "24-27") {
        sum = nights * 37;
      } else if (time === "28-31") {
        sum = nights * 43;
      }
      break;
    case "Italy":
      if (time === "21-23") {
        sum = nights * 28;
      } else if (time === "24-27") {
        sum = nights * 32;
      } else if (time === "28-31") {
        sum = nights * 39;
      }
      break;
    case "France":
      if (time === "21-23") {
        sum = nights * 30;
      } else if (time === "24-27") {
        sum = nights * 35;
      } else if (time === "28-31") {
        sum = nights * 40;
      }
      break;
  }
  console.log(`Easter trip to ${place} : ${sum.toFixed(2)} leva.`);
}
solve(["Germany", "24-27", "5"]);
solve(["Italy", "21-23", "7"]);
solve(["France", "28-31", "8"]);
