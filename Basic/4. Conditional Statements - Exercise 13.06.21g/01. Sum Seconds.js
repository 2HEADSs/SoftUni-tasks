function solve(input) {
  let secA = Number(input[0]);
  let secB = Number(input[1]);
  let secC = Number(input[2]);
  let totalTime = secA + secB + secC;
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}
solve(["35", "45", "44"]);
solve(["22", "7", "34"])
solve(["50", "50", "49"]);
