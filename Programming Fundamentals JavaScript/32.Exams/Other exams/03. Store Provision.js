function solve(stock, ordered) {
  let obj = {};

  for (let i = 0; i < stock.length; i++) {
    let product = stock[i];
    i++;
    let quantity = Number(stock[i]);
    obj[product] = quantity;
  }
  for (let j = 0; j < ordered.length; j++) {
    let product = ordered[j];
    j++;
    let quantity = Number(ordered[j]);

    if (obj.hasOwnProperty(product)) {
      obj[product] += quantity;
    } else {
      obj[product] = quantity;
    }
  }
  for(let product in obj){
      console.log(`${product} -> ${obj[product]}`);
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
