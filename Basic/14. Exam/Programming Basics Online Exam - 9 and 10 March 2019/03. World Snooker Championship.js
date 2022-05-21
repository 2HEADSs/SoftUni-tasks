function solve(input) {
  let level = input[0];
  let type = input[1];
  let count = Number(input[2]);
  let pic = input[3];
  let total = 0;

  let sum = 0;
  switch (type) {
    case "Standard":
      if (level === "Quarter final") {
        sum = count * 55.5;
      } else if (level === "Semi final") {
        sum = count * 75.88;
      } else {
        sum = count * 110.1;
      }
      break;
    case "Premium":
      if (level === "Quarter final") {
        sum = count * 105.2;
      } else if (level === "Semi final") {
        sum = count * 125.22;
      } else {
        sum = count * 160.66;
      }
      break;
    case "VIP":
      if (level === "Quarter final") {
        sum = count * 118.9;
      } else if (level === "Semi final") {
        sum = count * 300.4;
      } else {
        sum = count * 400;
      }
      break;
  }
  if (sum > 4000) {
    total = sum * 0.75;
  } else if (sum > 2500) {
    total = sum * 0.9;
  } else {
    total = sum;
  }
  if (pic === "Y" && sum < 4000) {
    total += count * 40;
  }
  console.log(total.toFixed(2));
}
// solve(["Final", "Premium", "25", "Y"]);
// solve(["Semi final", "VIP", "9", "Y"]);
solve(["Quarter final", "Standard", "11", "N"]);
