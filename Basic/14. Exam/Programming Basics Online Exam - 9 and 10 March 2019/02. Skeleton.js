function solve(input) {
  let controlMin = Number(input[0]);
  let controlSec = Number(input[1]);
  let length = Number(input[2]);
  let secondPer100 = Number(input[3]);

  let control = controlMin * 60 + controlSec;
  let time = (length / 100) * secondPer100 - (length / 120) * 2.5;
  let difference = time - control;
  if (control >= time) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${time.toFixed(3)}.`);
  } else {
    console.log(
      `No, Marin failed! He was ${difference.toFixed(3)} second slower.`
    );
  }
}
solve(["2", "12", "1200", "10"]);
solve(["1", "20", "1546", "12"]);
