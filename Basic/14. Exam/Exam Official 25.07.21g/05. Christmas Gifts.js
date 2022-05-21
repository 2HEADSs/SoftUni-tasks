function gift(input) {
  let index = 0;
  let command = input[index];
  let countAdult = 0;
  let countKids = 0;
  let moneyForToys = 0;
  let moneyForSweater = 0;

  while (command !== "Christmas") {
    let old = Number(command);

    if (old <= 16) {
      countKids++;
      moneyForToys += 5;
    } else {
      countAdult++;
      moneyForSweater += 15;
    }
    index++;
    command = input[index];
  }
  console.log(`Number of adults: ${countAdult}`);
  console.log(`Number of kids: ${countKids}`);
  console.log(`Money for toys: ${moneyForToys}`);
  console.log(`Money for sweaters: ${moneyForSweater}`);
}
// gift(["16", "20", "46", "12", "8", "20", "49", "Christmas"]);
// gift(["16", "16", "16", "16", "16", "Christmas"]);
gift(["18", "20", "48", "45", "56", "37", "12", "14", "Christmas"]);
