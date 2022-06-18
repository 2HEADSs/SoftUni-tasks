function store(availability, ordered) {
  let storeProduct = {};

  for (let i = 0; i < availability.length; i++) {
    let product = availability[i];
    i++;
    let amount = +availability[i];
    storeProduct[product] = amount;
  }

  for (let j = 0; j < ordered.length; j++) {
    let property = ordered[j];
    j++;
    let orderedAmount = +ordered[j];

    if (storeProduct.hasOwnProperty(property)) {
      storeProduct[property] += orderedAmount;
    } else {
      storeProduct[property] = orderedAmount;
    }
  }
let entries = Object.entries(storeProduct);
entries.forEach((el) =>{
    console.log(`${el[0]} -> ${el[1]}`);
})
}
store(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
