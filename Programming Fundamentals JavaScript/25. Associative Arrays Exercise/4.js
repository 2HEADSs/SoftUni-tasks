function solve(input) {
  let guestList = {
    vip: [],
    regular: [],
  };

  let guest = input.shift();

  while (guest !== "PARTY") {
    let firstChar = guest[0];
    if (isNaN(firstChar)) {
      guestList.regular.push(guest);
    } else {
      guestList.vip.push(guest);
    }
    guest = input.shift();
  }

  for (let arrivals of input) {
    if (guestList.vip.includes(arrivals)) {
      let index = guestList.vip.indexOf(arrivals);
      guestList.vip.splice(index, 1);
    } else if (guestList.regular.includes(arrivals)) {
      let index = guestList.regular.indexOf(arrivals);
      guestList.regular.splice(index, 1);
    }
  }
  let missCount = guestList.vip.length + guestList.regular.length;
  console.log(missCount);
  console.log(guestList.vip.join("\n"));
  console.log(guestList.regular.join("\n"));
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
