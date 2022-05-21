function solve(input) {
  let count = Number(input[0]);
  let weight = Number(input[1]);
  let busWeight = 0;
  let truckWeight = 0;
  let trainWeight = 0;
  let total = 0;

  for (i = 1; i <= count; i++) {
    let current = Number(input[i]);
    total += current;
    if (current <= 3) {
      busWeight += current;
    } else if (current <= 11) {
      truckWeight += current;
    } else {
      trainWeight += current;
    }
  }
  let middle =
    (busWeight * 200 + truckWeight * 175 + trainWeight * 120) / total;
  let busPercent = (busWeight / total) * 100;
  let truckPercent = (truckWeight / total) * 100;
  let trinPercent = (trainWeight / total) * 100;
  console.log(middle.toFixed(2));
  console.log(`${busPercent.toFixed(2)}%`);
  console.log(`${truckPercent.toFixed(2)}%`);
  console.log(`${trinPercent.toFixed(2)}%`);
}
solve(["4", "1", "5", "16", "3"]);
solve(["5", "2", "10", "20", "1", "7"]);
