function solve(input) {
  let time = input[0];
  let type = input[1];
  let net = input[2];
  let count = Number(input[3]);
  let sum = 0;
  let tax = 0;

  switch (time) {
    case "one":
      switch (type) {
        case "Small":
          tax = 9.98;
          sum = count * tax;
          break;
        case "Middle":
          tax = 18.99;
          sum = count * tax;
          break;
        case "Large":
          tax = 25.98;
          sum = count * tax;
          break;
        case "ExtraLarge":
          tax = 35.99;
          sum = count * tax;
          break;
      }
      break;
    case "two":
      switch (type) {
        case "Small":
          tax = 8.58;
          sum = count * tax;
          break;
        case "Middle":
          tax = 17.09;
          sum = count * tax;
          break;
        case "Large":
          tax = 23.59;
          sum = count * tax;
          break;
        case "ExtraLarge":
          tax = 31.79;
          sum = count * tax;
          break;
      }
      break;
  }
  switch (net) {
    case "yes":
      if (tax <= 10) {
        sum += 5.5 * count;
      } else if (tax <= 30) {
        sum += 4.35 * count;
      } else {
        sum += 3.85 * count;
      }
  }
  if (time === "two") {
    sum *= 0.9625;
  }
  console.log(`${sum.toFixed(2)} lv.`);
}
solve(["one", "Small", "yes", "10"]);
solve(["two", "Large", "no", "10"]);
solve(["two", "ExtraLarge", "yes", "20"]);
solve(["two", "Small", "yes", "20"]);
