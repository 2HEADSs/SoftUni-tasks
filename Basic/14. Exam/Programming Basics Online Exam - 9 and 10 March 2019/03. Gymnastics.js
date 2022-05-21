function solve(input) {
  let country = input[0];
  let type = input[1];
  let sum = 0;
  switch (country) {
    case "Russia":
      if (type === "ribbon") {
        sum = 9.1 + 9.4;
      } else if (type === "hoop") {
        sum = 9.3 + 9.8;
      } else {
        sum = 9.6 + 9.0;
      }
      break;
    case "Bulgaria":
      if (type === "ribbon") {
        sum = 9.6 + 9.4;
      } else if (type === "hoop") {
        sum = 9.55 + 9.75;
      } else {
        sum = 9.5 + 9.4;
      }
      break;
    case "Italy":
      if (type === "ribbon") {
        sum = 9.2 + 9.5;
      } else if (type === "hoop") {
        sum = 9.45 + 9.35;
      } else {
        sum = 9.7 + 9.15;
      }
      break;
  }
  let difference = 20 - sum;
  let percent = (difference / 20) * 100;
  console.log(`The team of ${country} get ${sum.toFixed(3)} on ${type}.`);
  console.log(`${percent.toFixed(2)}%`);
}
solve(["Bulgaria", "ribbon"]);
solve(["Russia", "rope"]);
solve(["Italy", "hoop"]);
