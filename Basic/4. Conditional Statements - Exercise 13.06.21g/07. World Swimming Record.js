function solve(input) {
  let WR = Number(input[0]);
  let distance = Number(input[1]);
  let time = Number(input[2]);

  let secondsAded = Math.floor(distance / 15) * 12.5;
  let swimmingTimie = distance * time + secondsAded;
  if (swimmingTimie > WR) {
    let secondsSlower = swimmingTimie - WR;
    console.log(
      `No, he failed! He was ${secondsSlower.toFixed(2)} seconds slower.`);
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${swimmingTimie.toFixed(2)} seconds.`);
  }
}
solve(["10464", "1500", "20"]);
solve(["55555.67", "3017", "5.03"]);
