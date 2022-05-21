function solve(input) {
  let type = input[0];
  let sugar = input[1];
  let count = Number(input[2]);
  let sum = 0;

  switch (type) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          sum = count * 0.9 * 0.65;
          break;
        case "Normal":
          sum = count * 1;
          break;
        case "Extra":
          sum = count * 1.2;
          break;
      }
      break;
    case "Cappuccino":
      switch (sugar) {
        case "Without":
          sum = count * 1 * 0.65;
          break;
        case "Normal":
          sum = count * 1.2;
          break;
        case "Extra":
          sum = count * 1.6;
          break;
      }
      break;
    case "Tea":
      switch (sugar) {
        case "Without":
          sum = count * 0.5 * 0.65;
          break;
        case "Normal":
          sum = count * 0.6;
          break;
        case "Extra":
          sum = count * 0.7;
          break;
      }
      break;
  }
  if (type === "Espresso" && count >= 5) {
    sum *= 0.75;
  }
  if (sum > 15) {
    sum *= 0.8;
  }
  console.log(`You bought ${count} cups of ${type} for ${sum.toFixed(2)} lv.`);
}
solve(["Espresso", "Without", "10"]);
solve(["Cappuccino", "Normal", "13"]);
solve(["Tea", "Extra", "3"]);
