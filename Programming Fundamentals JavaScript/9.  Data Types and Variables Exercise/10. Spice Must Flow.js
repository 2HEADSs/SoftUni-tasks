function spiceMustFlow(input) {
  let startingYield = input;
  let day = 0;
  let yieldMiningPerDay = 0;
  let totalYield = 0;

  for (let yield = startingYield; yield >= 100; yield -= 10) {
    day++;
    yieldMiningPerDay = yield;
    if (yieldMiningPerDay >= 26) {
      yieldMiningPerDay -= 26;
    }
    totalYield += yieldMiningPerDay;
  }
  if (totalYield >= 26) {
    totalYield -= 26;
  }
  console.log(day);
  console.log(totalYield);
}
spiceMustFlow(111);
spiceMustFlow(450);
