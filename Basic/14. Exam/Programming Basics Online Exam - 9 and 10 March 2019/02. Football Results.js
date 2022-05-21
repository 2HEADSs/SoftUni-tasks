function solve(input) {
  let firstBatle = input[0];
  let teamA = Number(firstBatle[0]);
  let teamB = Number(firstBatle[2]);
  let win = 0;
  let lost = 0;
  let draw = 0;
  if (teamA > teamB) {
    win += 1;
  } else if (teamA < teamB) {
    lost += 1;
  } else {
    draw += 1;
  }
  let secondBatle = input[1];
  teamA = Number(secondBatle[0]);
  teamB = Number(secondBatle[2]);
  if (teamA > teamB) {
    win += 1;
  } else if (teamA < teamB) {
    lost += 1;
  } else {
    draw += 1;
  }
  let thirdBatle = input[2];
  teamA = Number(thirdBatle[0]);
  teamB = Number(thirdBatle[2]);
  if (teamA > teamB) {
    win += 1;
  } else if (teamA < teamB) {
    lost += 1;
  } else {
    draw += 1;
  }
  console.log(`Team won ${win} games.`);
  console.log(`Team lost ${lost} games.`);
  console.log(`Drawn games: ${draw}`);
}
solve(["3:1", "0:2", "0:0"]);
console.log("---------------------");
solve(["4:2", "0:3", "1:0"]);
console.log("---------------------");
solve(["0:2", "0:1", "3:3"]);
