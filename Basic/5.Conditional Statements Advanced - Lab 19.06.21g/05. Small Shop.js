function solve(input) {
  let product = input[0];
  let city = input[1];
  let count = Number(input[2]);
  let sum = 0;

  switch (city) {
    case "Sofia":
      if (product === "coffee") {
        sum = 0.5 * count;
        break;
      } else if (product === "water") {
        sum = 0.8 * count;
        break;
      } else if (product === "beer") {
        sum = 1.2 * count;
        break;
      } else if (product === "sweets") {
        sum = 1.45 * count;
        break;
      } else if (product === "peanuts") {
        sum = 1.6 * count;
        break;
      }
    case "Plovdiv":
      if (product === "coffee") {
        sum = 0.4 * count;
        break;
      } else if (product === "water") {
        sum = 0.7 * count;
        break;
      } else if (product === "beer") {
        sum = 1.15 * count;
        break;
      } else if (product === "sweets") {
        sum = 1.3 * count;
        break;
      } else if (product === "peanuts") {
        sum = 1.5 * count;
        break;
      }
    case "Varna":
      if (product === "coffee") {
        sum = 0.45 * count;
        break;
      } else if (product === "water") {
        sum = 0.7 * count;
        break;
      } else if (product === "beer") {
        sum = 1.1 * count;
        break;
      } else if (product === "sweets") {
        sum = 1.35 * count;
        break;
      } else if (product === "peanuts") {
        sum = 1.55 * count;
        break;
      }
  }
  console.log(sum);
}
solve(["coffee", "Varna", "2"]);
solve(["peanuts", "Plovdiv", "1"]);
solve(["beer", "Sofia", "6"]);
solve(["water", "Plovdiv", "3"]);
solve(["sweets", "Sofia", "2.23"]);
