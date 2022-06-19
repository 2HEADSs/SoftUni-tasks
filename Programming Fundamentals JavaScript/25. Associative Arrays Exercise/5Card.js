function solve(arr) {
  let players = new Map();

  for (let player of arr) {
    let currentCards = player.split(": ");
    let currentName = currentCards.shift();
    currentCards = currentCards.toString().split(", ");

    if (players.has(currentName)) {
      currentCards.forEach((el) => players.get(currentName).add(el));
    } else {
      let cards = new Set();
      currentCards.forEach((el) => cards.add(el));
      players.set(currentName, cards);
    }
  }

  let playersEntries = Array.from(players.entries());
  let output = [];

  for (let player of playersEntries) {
    let currentCards = Array.from(player[1].keys());
    let currentArr;
    let sum = 0;

    for (let card of currentCards) {
      let currentCard = card.split("");
      let firstNum = 0;
      let secondNum = 0;
      currentArr = [];

      if (currentCard.length > 2) {
        firstNum = 10;
      } else if (currentCard[0] > "0" && currentCard[0] <= "9") {
        firstNum = Number(currentCard[0]);
      } else {
        switch (currentCard[0]) {
          case "J":
            firstNum = 11;
            break;
          case "Q":
            firstNum = 12;
            break;
          case "K":
            firstNum = 13;
            break;
          case "A":
            firstNum = 14;
            break;
        }
      }

      switch (currentCard[currentCard.length - 1]) {
        case "S":
          secondNum = 4;
          break;
        case "H":
          secondNum = 3;
          break;
        case "D":
          secondNum = 2;
          break;
        case "C":
          secondNum = 1;
          break;
      }

      sum += firstNum * secondNum;
    }
    currentArr.push(player[0]);
    currentArr.push(sum);

    output.push(currentArr);
  }

  output.forEach((el) => console.log(`${el[0]}: ${el[1]}`));
}
solve([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
