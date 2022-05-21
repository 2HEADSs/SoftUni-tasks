function solve(input) {
  let degrees = Number(input[0]);
  if (degrees >= 5.0 && degrees <= 11.9) {
    console.log("Cold");
  } else if (degrees >= 12.0 && degrees <= 14.9) {
    console.log("Cool");
  } else if (degrees >= 15.0 && degrees <= 20.0) {
    console.log("Mild");
  } else if (degrees >= 20.1 && degrees <= 25.9) {
    console.log("Warm");
  } else if (degrees >= 26.0 && degrees <= 35.0) {
    console.log("Hot");
  } else {
    console.log("unknown");
  }
}
solve(["16.5"]);
solve(["8"]);
solve(["22.4"]);
solve(["26"]);
solve(["0"]);
