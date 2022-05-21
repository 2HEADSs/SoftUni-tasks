function solve(input) {
  let size = input[0];
  let color = input[1];
  let count = Number(input[2]);
  let sum = 0;

  switch (size) {
    case "Large":
      if (color === "Red") {
        sum = count * 16;
      } else if (color === "Green") {
        sum = count * 12;
      } else {
        sum = count * 9;
      }
      break;
    case "Medium":
      if (color === "Red") {
        sum = count * 13;
      } else if (color === "Green") {
        sum = count * 9;
      } else {
        sum = count * 7;
      }
      break;
    case "Small":
      if (color === "Red") {
        sum = count * 9;
      } else if (color === "Green") {
        sum = count * 8;
      } else {
        sum = count * 5;
      }
      break;
  }
  sum *= 0.65;
  console.log(`${sum.toFixed(2)} leva.`);
}
solve(["Large", "Red", "7"]);
solve(["Medium", "Green", "5"]);
solve(["Small", "Yellow", "3"]);
