function orders(product, quantity) {
  let finalPrice = 0;

  switch (product) {
    case "coffee":
      finalPrice = quantity * 1.5;
      break;
    case "water":
      finalPrice = quantity * 1;
      break;
    case "coke":
      finalPrice = quantity * 1.4;
      break;
    case "snacks":
      finalPrice = quantity * 2;
      break;
  }
  console.log(finalPrice.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);
