function solve(input) {
  let countBalls = Number(input[0]);
  let total = 0;
  let redBall = 0;
  let orangeBall = 0;
  let yellowBall = 0;
  let whiteBall = 0;
  let otherBall = 0;
  let blackBall = 0;

  for (let i = 1; i <= countBalls; i++) {
    let currentBall = input[i];

    if (currentBall === "red") {
      total += 5;
      redBall++;
    } else if (currentBall === "orange") {
      total += 10;
      orangeBall++;
    } else if (currentBall === "yellow") {
      total += 15;
      yellowBall++;
    } else if (currentBall === "white") {
      total += 20;
      whiteBall++;
    } else if (currentBall === "black") {
      total = Math.floor(total / 2);
      blackBall++;
    } else {
      otherBall++;
    }
  }
  console.log(`Total points: ${total}`);
  console.log(`Points from red balls: ${redBall}`);
  console.log(`Points from orange balls: ${orangeBall}`);
  console.log(`Points from yellow balls: ${yellowBall}`);
  console.log(`Points from white balls: ${whiteBall}`);
  console.log(`Other colors picked: ${otherBall}`);
  console.log(`Divides from black balls: ${blackBall}`);
}
solve(["3", "white", "black", "pink"]);
