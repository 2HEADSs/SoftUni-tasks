function computerStore(arr) {
  let type = arr.pop();
  let priceWithoutTaxes = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = Number(arr[i]);
    if (current >= 0) {
      priceWithoutTaxes += current;
    } else {
      console.log("Invalid price!");
    }
  }
  let taxes = priceWithoutTaxes * 0.2;
  let total = priceWithoutTaxes + taxes;
  if (type === "special") {
    total *= 0.9;
  }
  if (total > 0) {
    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${total.toFixed(2)}$`);
  } else {
    console.log("Invalid order!");
  }
}
computerStore([
  '1050',
  '200',
  '450',
  '2',
  '18.50',
  '16.86',
  'special'
  ])
  ;
// computerStore([1023, 15, -20, -5.50, 450,20, 17.66, 19.30, "regular"]);
