function counterStrike(arr) {
  let energy = +arr.shift();
  let tempWins = 0;
  let totalWins = 0;
  let lenght = arr.length;
  let isOver = false;

  for (let i = 0; i < lenght; i++) {
    let current = arr[i];
    if (current === "End of battle") {
      break;
    } else {
      current = +current;
    }
    if (energy - current < 0) {
      isOver = true;
      break;
    } else {
      energy -= current;
      tempWins++;

      if (tempWins === 3) {
        totalWins += tempWins;
        energy += totalWins;
        tempWins = 0;
      }
    }
  }
  totalWins += tempWins;

  if (isOver) {
    console.log(
      `Not enough energy! Game ends with ${totalWins} won battles and ${energy} energy`
    );
  } else {
    console.log(`Won battles: ${totalWins}. Energy left: ${energy}`);
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
