function solve(input) {
  let countMonths = Number(input[0]);
  let electricity = 0;
  let water = 0;
  let internet = 0;
  let others = 0;
  let average = 0;
  let waterPerMonths = 20;
  let internetPerMonths = 15;

  for (i = 1; i <= countMonths; i++) {
    let currentElectriscity = Number(input[i]);

    electricity += currentElectriscity;
    water += waterPerMonths;
    internet += internetPerMonths;
    others +=
      currentElectriscity +
      waterPerMonths +
      internetPerMonths +
      (currentElectriscity + waterPerMonths + internetPerMonths) * 0.2;
  }
  average = (electricity + water + internet + others) / countMonths;

  console.log(`Electricity: ${electricity.toFixed(2)} lv`);
  console.log(`Water: ${water.toFixed(2)} lv`);
  console.log(`Internet: ${internet.toFixed(2)} lv`);
  console.log(`Other: ${others.toFixed(2)} lv`);
  console.log(`Average: ${average.toFixed(2)} lv`);
}
solve(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
