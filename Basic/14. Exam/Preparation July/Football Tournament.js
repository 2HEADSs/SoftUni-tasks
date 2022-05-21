function solve(input) {
  let name = input[0];
  let matches = Number(input[1]);
  let win = 0;
  let equal = 0;
  let lose = 0;
  let points = 0;

  for (i = 2; i <= matches + 1; i++) {
    let currant = input[i];
    switch (currant) {
      case "W":
        win++;
        points += 3;
        break;
      case "D":
        equal++;
        points += 1;
        break;
      case "L":
        lose++;
        break;
    }
  }
  let percent = (win / matches) * 100;
  if (matches === 0) {
    console.log(`${name} hasn't played any games during this season.`);
  } else {
    console.log(`${name} has won ${points} points during this season`);
    console.log("Total stats:");
    console.log(`## W: ${win}`);
    console.log(`## D: ${equal}`);
    console.log(`## L: ${lose}`);
    console.log(`Win rate: ${percent.toFixed(2)}%`);
  }
}
solve(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
solve(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
solve(["Chelsea", "0"]);
