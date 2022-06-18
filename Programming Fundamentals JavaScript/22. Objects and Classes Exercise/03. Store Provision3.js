function store(productsInStock, productForDelivery) {
  let storeProducts = {};
  let currentL = productsInStock.length;
  let forDeliveryL = productForDelivery.length;
  for (let i = 0; i < currentL; i += 2) {
    let product = productsInStock[i];
    storeProducts[product] = +productsInStock[i + 1];
  }
  for (let i = 0; i < forDeliveryL; i += 2) {
    let product = productForDelivery[i];
    if(!storeProducts.hasOwnProperty(product)){
        storeProducts[product] = 0;
    }
    storeProducts[product] += +productForDelivery[i+1]
  }
  for(let product in storeProducts){
    console.log(`${product} -> ${storeProducts[product]}`);
  }
}
store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
