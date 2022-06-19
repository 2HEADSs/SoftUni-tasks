function solve(input) {
  let type = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };
  let power = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };

  let players = {};
  for (let line of input) {
    let [name, cards] = line.split(": ");
    if (players.hasOwnProperty(name)) {
      players[name].push(...cards.split(", "));
    } else {
      players[name] = cards.split(", ");
    }

    let keys = Object.keys(players).forEach(
      (name) => (players[name] = new Set(players[name]))
    );
    let cardSet = players[name];
    let total = 0;

    for (let card of cardSet) {
      card = card.split("");
      let cardType = card.pop();
      let cardPower = card.join("");
      let points = 0;
      if (isNaN(cardPower)) {
        points = type[cardType] * power[cardPower];
      } else {
        points = type[cardType] * Number(cardPower);
      }
      total += points;
    }
  }

  return Object.keys(players)
    .map((name) => `${name}: ${players[name]}`)
    .join("\n");
}
console.log(
  solve([
    "Peter: 2C, 4H, 9H, AS, QS",
    "Tomas: 3H, 10S, JC, KD, 5S, 10S",
    "Andrea: QH, QC, QS, QD",
    "Tomas: 6H, 7S, KC, KD, 5S, 10C",
    "Andrea: QH, QC, JS, JD, JC",
    "Peter: JD, JD, JD, JD, JD, JD",
  ])
);
