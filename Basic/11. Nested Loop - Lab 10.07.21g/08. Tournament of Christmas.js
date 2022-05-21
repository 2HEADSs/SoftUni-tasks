function solve(input) {
  let days = Number(input[0]);
  let index = 1;
  let totalMoney = 0;
  let totalWins = 0;
  let totalLose = 0;
  for (let i = 1; i <= days; i++) {
    let current = input[index];

    let dayWin = 0;
    let dayLose = 0;
    let dayMoney = 0;
    while (current !== "Finish") {
      let game = input[index];
      index++;
      let result = input[index];
      if (result === "win") {
        dayWin++;
        dayMoney += 20;
      } else {
        dayLose++;
      }
      index++;
      current = input[index];
    }
    index++;

    if (dayWin > dayLose) {
      dayMoney *= 1.1;
    }
    totalMoney += dayMoney;
    totalWins += dayWin;
    totalLose += dayLose;
  }
  if (totalWins > totalLose) {
    totalMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}
solve([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);
