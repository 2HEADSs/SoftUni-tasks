function solve(input) {
  let productCatalogue = {};
  input.forEach((el) => {
    let [product, price] = el.split(' : ');
    price = Number(price);
    let firstLetter = product[0];
    if (!productCatalogue[firstLetter]) {
      productCatalogue[firstLetter] = {};
    }
    productCatalogue[firstLetter][product] = price;
  });
  let sortedKeys = Object.keys(productCatalogue).sort((a, b) =>
    a.localeCompare(b)
  );

  for (let key of sortedKeys) {
    console.log(key);
    let products = Object.entries(productCatalogue[key]).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    products.forEach((el) => {
      console.log(`  ${el[0]}: ${el[1]}`);
    });
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
