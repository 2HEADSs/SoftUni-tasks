function counterStrike(arr) {
  let energy = Number(arr.shift());
  let totalWins = 0;
  let tempWins = 0;
  let isOver = false;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current == "End of battle") {
      break;
    } else {
      current = Number(current);
    }
    if (energy - current < 0) {
      isOver = true;
      break;
    } else {
      energy -= current;
      tempWins++;
      if (tempWins === 3) {
        totalWins += tempWins;
        tempWins = 0;
        energy += totalWins;
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
