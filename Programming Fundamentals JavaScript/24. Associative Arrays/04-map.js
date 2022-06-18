function solve(input) {
  let storage = new Map();

  for (let el of input) {
    el = el.split(" ");
    let product = el[0];
    let quantity = Number(el[1]);

    if (!storage.has(product)) {
      storage.set(product, quantity);
    } else {
      let curQuantity = storage.get(product);
      let newQuantity = (curQuantity += quantity);
      storage.set(product, newQuantity);
    }
  }
  for (let key of storage) {
      console.log(`${key[0]} -> ${key[1]}`);
  }
}
solve(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
