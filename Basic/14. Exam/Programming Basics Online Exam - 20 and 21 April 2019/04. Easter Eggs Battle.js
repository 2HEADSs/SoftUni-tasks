function solve(input) {
  let firstPlayerCount = Number(input[0]);
  let secondPlayerCount = Number(input[1]);
  let inputL = input.length;

  for (i = 2; i <= inputL - 1; i++) {
    let current = input[i];
    if (current === "End of battle") {
      console.log(`Player one has ${firstPlayerCount} eggs left.`);
      console.log(`Player two has ${secondPlayerCount} eggs left.`);
      break;
    }
    if (current === "one") {
      secondPlayerCount--;
    } else {
      firstPlayerCount--;
    }
    if (firstPlayerCount === 0) {
      console.log(
        `Player one is out of eggs. Player two has ${secondPlayerCount} eggs left.`
      );
      break;
    } else if (secondPlayerCount === 0) {
      console.log(
        `Player two is out of eggs. Player one has ${firstPlayerCount} eggs left.`
      );
      break;
    }
  }
}
solve(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
solve(["2", "6", "one", "two", "two"]);
solve(["6", "3", "one", "two", "two", "one", "one"]);
