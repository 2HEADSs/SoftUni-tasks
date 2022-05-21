function solve(input) {
  let player = input[0];
  let startPoint = 301;
  let inputL = input.length;
  let restPoint = startPoint;
  let unSuxes = 0;
  let suxes = 0;

  for (i = 1; i <= inputL - 1; i++) {
    currentZone = input[i];
    if (currentZone === "Retire") {
      console.log(`${player} retired after ${unSuxes} unsuccessful shots.`);
      break;
    }
    i++;
    currentPoints = Number(input[i]);

    if (currentZone === "Single") {
      if (currentPoints > restPoint) {
        unSuxes++;
        continue;
      }
      restPoint -= currentPoints;
      suxes++;
    } else if (currentZone === "Double") {
      currentPoints *= 2;
      if (currentPoints > restPoint) {
        unSuxes++;
        continue;
      }
      restPoint -= currentPoints;
      suxes++;
    } else if (currentZone === "Triple") {
      currentPoints *= 3;
      if (currentPoints > restPoint) {
        unSuxes++;
        continue;
      }
      restPoint -= currentPoints;
      suxes++;
    }
    if (restPoint === 0) {
      console.log(`${player} won the leg with ${suxes} shots.`);
      break;
    }
  }
}
solve([
  "Michael van Gerwen",
  "Triple",
  "20",
  "Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
]);
solve([
  "Stephen Bunting",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "7",
  "Single",
  "12",
  "Double",
  "1",
  "Single",
  "1",
]);
