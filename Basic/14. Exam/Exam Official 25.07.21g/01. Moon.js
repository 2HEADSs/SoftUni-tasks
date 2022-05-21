function moon(input) {
  let speed = Number(input[0]);
  let fuelPer100 = Number(input[1]);
  let distance = 384400 * 2;
  let time = distance / speed + 3;
  let fuelNeed = (fuelPer100 * distance) / 100;
  console.log(Math.ceil(time));
  console.log(fuelNeed);
}
moon(["10000", "5"]);
moon(["5000", "7"]);
