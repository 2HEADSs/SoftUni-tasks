function solve(input) {
  let count = Number(input[0]);
  let index = 1;
  let red = 0;
  let orange = 0;
  let blue = 0;
  let green = 0;
  let max = Number.MIN_SAFE_INTEGER;

  while (index <= count) {
    let current = input[index++];
    if (current === "red") {
      red++;
    } else if (current === "orange") {
      orange++;
    } else if (current === "blue") {
      blue++;
    } else if (current === "green") {
      green++;
    }
  }
  let maxColor = "";
  if (red > max) {
    max = red;
    maxColor = "red";
  }
  if (orange > max) {
    max = orange;
    maxColor = "orange";
  }
  if (blue > max) {
    max = blue;
    maxColor = "blue";
  }
  if (green > max) {
    max = green;
    maxColor = "green";
  }
  console.log(`Red eggs: ${red}`);
  console.log(`Orange eggs: ${orange}`);
  console.log(`Blue eggs: ${blue}`);
  console.log(`Green eggs: ${green}`);
  console.log(`Max eggs: ${max} -> ${maxColor}`);
}
solve(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
solve(["4", "blue", "red", "blue", "orange"]);
