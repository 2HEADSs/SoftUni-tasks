function solve(input) {
  let firstPlayer = input[0];
  let secondPlayer = input[1];
  let firstPoints = 0;
  let secondPoints = 0;
  let inputL = input.length;

  for (i = 2; i <= inputL - 1; i++) {
    let currentInput = input[i];

    if (currentInput === "End of game") {
      console.log(`${firstPlayer} has ${firstPoints} points`);
      console.log(`${secondPlayer} has ${secondPoints} points`);
      break;
    }
    currentInput = Number(input[i]);
    let firstPersonCard = currentInput;
    i++;
    currentInput = Number(input[i]);
    let secondPersonCard = currentInput;

    if (firstPersonCard > secondPersonCard) {
      firstPoints += firstPersonCard - secondPersonCard;
    } else if (secondPersonCard > firstPersonCard) {
      secondPoints += secondPersonCard - firstPersonCard;
    } else {
      i++;
      currentInput = Number(input[i]);
      let firstPersonCard = currentInput;
      i++;
      currentInput = Number(input[i]);
      let secondPersonCard = currentInput;
      if (firstPersonCard > secondPersonCard) {
        console.log(`Number wars!`);
        console.log(`${firstPlayer} is winner with ${firstPoints} points`);
      } else {
        console.log(`Number wars!`);
        console.log(`${secondPlayer} is winner with ${secondPoints} points`);
      }
      break;
    }
  }
}
solve(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
solve(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]);
solve(["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]);
