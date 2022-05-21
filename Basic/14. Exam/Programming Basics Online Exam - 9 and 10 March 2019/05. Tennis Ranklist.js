function solve(input) {
  let countTournaments = Number(input[0]);
  let startPoints = Number(input[1]);
  let index = 2;
  let current = input[index];
  let count = 0;
  let pointsTurnament = 0;
  let wins = 0;

  while (index <= countTournaments + 2) {
    current = input[index];
    index++;
    switch (current) {
      case "W":
        count++;
        pointsTurnament += 2000;
        wins++;
        startPoints += 2000;
        break;
      case "F":
        count++;
        pointsTurnament += 1200;
        startPoints += 1200;
        break;
      case "SF":
        count++;
        pointsTurnament += 720;
        startPoints += 720;
        break;
    }
  }
  console.log(`Final points: ${startPoints}`);
  console.log(`Average points: ${Math.floor(pointsTurnament /countTournaments)}`);
  console.log(`${((wins/countTournaments)*100).toFixed(2)}%`);
}
solve(["5", "1400", "F", "SF", "W", "W", "SF"]);
solve(["4", "750", "SF", "W", "SF", "W"]);
