function solve(input) {
  let phoneList = {};
  for (let el of input) {
    el = el.split(" ");
    phoneList[el[0]] = el[1];
  }
  let entries = Object.entries(phoneList);
  console.log(entries[1]);
  for (key in phoneList) {
    console.log(`${key} -> ${phoneList[key]}`);
  }
}
solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
