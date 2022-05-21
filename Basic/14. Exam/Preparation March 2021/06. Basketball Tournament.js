function solve(input) {
    let index = 0;
    let command = input[index];
    index++;
    let winCount = 0;
    let loseCount = 0;
    let totalGame = 0;

  while (command !== "End of tournaments") {
    let name = command;
    let n = Number(input[index]);
    totalGame += n;
    index++;
    for (let i = 1; i <= n; i++) {
      let teamA = Number(input[index]);
      index++;
      let teamB = Number(input[index]);
      index++;

      if (teamA > teamB) {
          winCount ++;
        console.log(
          `Game ${i} of tournament ${name}: win with ${teamA - teamB} points.`
        );
      } else {
          loseCount++
        console.log(
          `Game ${i} of tournament ${name}: lost with ${teamB - teamA} points.`
        );
      }
    }
    command = input[index];
    index++;
  }
  console.log(`${((winCount/totalGame)*100).toFixed(2)}% matches win`);
  console.log(`${((loseCount/totalGame)*100).toFixed(2)}% matches lost`);
}
solve([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);
