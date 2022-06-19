function solve(arr) {
  const type = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
  const power = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
  const obj = {};
  arr.forEach((item) => {
    const [name, cards] = item.split(": ");
    const card = cards.split(", ");
    if (obj.hasOwnProperty(name)) {
      const currentDeck = obj[name];
      const uniqueValues = [...new Set(card)];
      const combined = [...currentDeck, ...uniqueValues];
      obj[name] = [...new Set(combined)];
    } else {
      obj[name] = [...new Set(card)];
    }
  });
  const values = Object.entries(obj);
  const sum = values.map(([name, value]) => {
    let sums = value.reduce((prev, curr) => {
      const currType = curr.split("").splice(-1, 1).join("");
      const currPower = curr.slice(0, -1);
      let sum = type[currPower] * power[currType];
      return prev + sum
    }, 0);
    return console.log(`${name}: ${sums}`);
  });
}
solve([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);