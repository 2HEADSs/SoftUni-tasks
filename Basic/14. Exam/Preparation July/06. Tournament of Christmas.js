function solve(input) {
  let days = Number(input[0]);
  let index = 1;
  let currant = input[index];
  let totalWin = 0;
  let totalLose = 0;
  let totalMoney = 0;

  for (i = 1; i <= days; i++) {
    let moneyDay = 0;
    let winDay = 0;
    let loseDay = 0;
    while (currant !== "Finish") {
      let game = currant;
      index++;
      let result = input[index];
      if (result === "win") {
        winDay++;
        moneyDay += 20;
      } else {
        loseDay++;
      }
      index++;
      currant = input[index];
    }

    if (winDay > loseDay) {
      moneyDay *= 1.1;
    }
    totalMoney += moneyDay;
    totalWin += winDay;
    totalLose += loseDay;
    
    index++;
    currant = input[index];
  }
  if (totalWin > totalLose) {
      totalMoney *= 1.20
    console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
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
  "volleybal",
  "win",
  "basketball",
  "win",
  "Finish",
]);
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
