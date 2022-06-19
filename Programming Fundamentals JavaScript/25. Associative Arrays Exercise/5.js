function cardGame(players) {
  let eachPlayer = players.shift();
  let objCardPlayers = [];
  let resultArray = [];
  let cards = [];
  let type = [];
  let card = [];
  let power = [];

  while (eachPlayer !== undefined) {
    let input = eachPlayer.split(": ");
    let name = input[0];
    cards = input[1].split(", ");

    if (!objCardPlayers[name]) {
      objCardPlayers[name] = cards;
    } else {
      objCardPlayers[name] += "," + cards;
    }
    eachPlayer = players.shift();
  }

  for (const obj in objCardPlayers) {
    let set = new Set(objCardPlayers[obj].split(","));
    cards = Array.from(set);
    objCardPlayers[obj] = cards;
  }

  for (const key in objCardPlayers) {
    let sum = 0;
    resultArray = objCardPlayers[key];
    for (let i = 0; i < resultArray.length; i++) {
      card = resultArray[i].split("");
      type = card.pop();
      for (const num of card) {
        if (num === "J") {
          power = 11;
        } else if (num === "Q") {
          power = 12;
        } else if (num === "K") {
          power = 13;
        } else if (num === "A") {
          power = 14;
        } else {
          power += num;
        }
      }
      switch (type) {
        case "S":
          sum += Number(power) * 4;
          break;
        case "H":
          sum += Number(power) * 3;
          break;
        case "D":
          sum += Number(power) * 2;
          break;
        case "C":
          sum += Number(power) * 1;
          break;
      }
      power = "";
    }
    console.log(`${key}: ${sum}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
