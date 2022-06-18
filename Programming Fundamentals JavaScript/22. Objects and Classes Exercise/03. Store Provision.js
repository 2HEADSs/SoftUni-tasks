function storeProvision(currentSotcks, forDelivery) {
  let storeProducts = {};
  let currentL = currentSotcks.length;
  let forDeliveryL = forDelivery.length;
  for (let i = 0; i < currentL; i += 2) {
    let product = currentSotcks[i];
    storeProducts[product] = Number(currentSotcks[i + 1]);
  }
  for (let i = 0; i < forDeliveryL; i += 2) {
    let product = forDelivery[i];
    if (!storeProducts.hasOwnProperty(product)) {
      storeProducts[product] = 0;
    }
    storeProducts[product] += Number(forDelivery[i + 1]);
  }
  for(let product in storeProducts){
      console.log(`${product} -> ${storeProducts[product]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
