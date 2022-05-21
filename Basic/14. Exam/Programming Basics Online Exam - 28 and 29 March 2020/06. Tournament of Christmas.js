function solve(input) {
  let days = Number(input[0]);
  let index = 1;
  let totalWins = 0;
  let totalLose = 0;
  let totalMoney = 0;
  for (i = 1; i <= days; i++) {
    let current = input[index];
    let wins = 0;
    let lose = 0;
    let moneyWinsPerDay = 0;
    while (current !== "Finish") {
      let game = current;
      index++;
      let result = input[index];
      if (result === "win") {
        moneyWinsPerDay += 20;
        wins++;
      } else {
        lose++;
      }
      index++;
      current = input[index];
    }
    if (wins > lose) {
        moneyWinsPerDay *= 1.1;
      totalWins++;
    } else {
      totalLose++;
    }
    index++;
    current = input[index];
    totalMoney += moneyWinsPerDay;
  }
  if (totalWins > totalLose) {
    totalMoney *= 1.2;
    console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  }else{
      console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  }
}
solve([
  "2",
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish",
]);
