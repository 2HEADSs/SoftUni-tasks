function solve(input) {
  let w = Number(input[0]);
  let l = Number(input[1]);
  let cakeCapacity = w * l;
  let piecesTaken = 0;
  let index = 2;
  let command = input[index];

  while (command !== "STOP") {
    piecesTaken += Number(command);

    if (piecesTaken > cakeCapacity) {
      break;
    }
    index++;
    command = input[index];
  }
  if (piecesTaken > cakeCapacity) {
    console.log(
      `No more cake left! You need ${piecesTaken - cakeCapacity} pieces more.`
    );
  } else {
    console.log(`${cakeCapacity - piecesTaken} pieces are left.`);
  }
}
solve(["10", "2", "2", "4", "6", "STOP"]);
solve(["10", "10", "20", "20", "20", "20", "21"]);
