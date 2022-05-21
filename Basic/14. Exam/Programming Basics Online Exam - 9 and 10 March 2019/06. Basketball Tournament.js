function tournamentBasket(input) {
  let index = 0;
  let command = input[index];
  let win = 0;
  let lost = 0;
  let totalGames = 0;

  while (command !== "End of tournaments") {
    let tournament = command;
    index++;
    let countGames = Number(input[index]);
    index++;
    let pointDesi = 0;
    let pointOthers = 0;
    let game = 0;
    for (i = 0; i < countGames; i++) {
      pointDesi = Number(input[index]);
      index++;
      pointOthers = Number(input[index]);
      index++;
      game++;
      totalGames++;

      let diff = 0;
      if (pointDesi > pointOthers) {
        win++;
        diff = pointDesi - pointOthers;
        console.log(
          `Game ${game} of tournament ${tournament}: win with ${diff} points.`
        );
      } else {
        lost++;
        diff = pointOthers - pointDesi;
        console.log(
          `Game ${game} of tournament ${tournament}: lost with ${diff} points.`
        );
      }
    }
    command = input[index];
  }
  let percentWin = (win / totalGames) * 100;
  let percentLost = (lost / totalGames) * 100;
  console.log(`${percentWin.toFixed(2)}% matches win`);
  console.log(`${percentLost.toFixed(2)}% matches lost`);
}
tournamentBasket([
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
