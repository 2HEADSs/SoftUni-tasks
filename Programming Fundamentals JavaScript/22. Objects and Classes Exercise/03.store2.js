function solve(stock, ordered) {
  let shop = {};
  addToShop(ordered, addToShop(stock, shop));
  for (const key in shop) {
    console.log(`${key} -> ${shop[key]}`);
  }
  function addToShop(arr, obj) {
    for (let i = 0; i < arr.length; i += 2) {
      const product = arr[i];
      const quantity = Number(arr[i + 1]);
      if (!obj.hasOwnProperty(product)) {
        obj[product] = 0;
      }
      obj[product] += quantity; 
    }
return obj
  }
}
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
