function solve(input) {
  let listObj = {};
  input.forEach((el) => {
    let [product, price] = el.split(' : ');
    price = Number(price);
    let firstLetter = product[0];
    if (!listObj[firstLetter]) {
      listObj[firstLetter] = {};
    }
    listObj[firstLetter][product] = price;
  });
  let orderedKeys = Object.keys(listObj).sort((a, b) => a.localeCompare(b));

  for (let keys of orderedKeys) {
      console.log(keys);
    let entries = Object.entries(listObj[keys]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    entries.forEach((entry) =>
    console.log(`  ${entry[0]}: ${entry[1]}`))
  }
}
solve([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
