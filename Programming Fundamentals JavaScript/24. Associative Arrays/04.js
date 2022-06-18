function solve(input) {
  let storage = {};

  for (let current of input) {
    let [product, quantity] = current.split(" ");
    quantity = Number(quantity);
    if (!storage.hasOwnProperty(product)) {
      storage[product] = quantity;
    } else {
      storage[product] += quantity;
    }
  }
  for(let product in storage){
      console.log(`${product} -> ${storage[product]}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
