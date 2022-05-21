function solve(input) {
  let name = input[0];
  let totalMatch = Number(input[1]);
  let sum = 0;
  let wins = 0;
  let draw = 0;
  let lose = 0;

  for (let i = 2; i <= totalMatch + 1; i++) {
    let current = input[i];

    if (current === "W") {
      wins++;
      sum += 3;
    } else if (current === "D") {
      draw++;
      sum += 1;
    } else if (current === "L") {
      lose++;
    }
  }
  let average = (wins / totalMatch) * 100;
  if (sum === 0 && wins == 0 && draw == 0 && lose == 0) {
    console.log(`${name} hasn't played any games during this season.`);
  } else {
    console.log(`${name} has won ${sum} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${wins}`);
    console.log(`## D: ${draw}`);
    console.log(`## L: ${lose}`);
    console.log(`Win rate: ${average.toFixed(2)}%`);
  }
}
solve(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
solve(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
solve(["Chelsea", "0"]);
