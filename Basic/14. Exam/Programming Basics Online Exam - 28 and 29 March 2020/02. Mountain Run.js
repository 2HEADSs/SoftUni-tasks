function solve(input) {
  let recordSec = Number(input[0]);
  let distanceMet = Number(input[1]);
  let timeSec1M = Number(input[2]);

  let metterSlow = Math.floor(distanceMet / 50) * 30;
  let sumTime = metterSlow + distanceMet * timeSec1M;
  let diffference = sumTime - recordSec;

  if (sumTime < recordSec) {
    console.log(`Yes! The new record is ${sumTime} seconds.`);
  } else {
    console.log(`No! He was ${diffference} seconds slower.`);
  }
}
solve(["10164", "1400", "25"]);
solve(["5554.36", "1340", "3.23"]);
solve(["1377", "389", "3"]);
