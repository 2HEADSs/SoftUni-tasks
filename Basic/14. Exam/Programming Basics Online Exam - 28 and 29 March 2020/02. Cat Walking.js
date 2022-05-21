function solve(input) {
  let minutesWalks = Number(input[0]);
  let countWalks = Number(input[1]);
  let kj = Number(input[2]);

  let sumMinutes = minutesWalks * countWalks;
  let sumKj = sumMinutes * 5;
  let halfKj = kj / 2;
  if (sumKj >= halfKj) {
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${sumKj}.`);
  } else {
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${sumKj}.`);
  }
}
solve(["30", "3", "600"]);
solve(["15", "2", "500"]);

