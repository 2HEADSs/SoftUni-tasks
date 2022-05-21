function bags(input) {
  let over20Prrice = Number(input[0]);
  let weight = Number(input[1]);
  let days = Number(input[2]);
  let count = Number(input[3]);
  let price = 0;

  if (weight > 20) {
    price = over20Prrice;
  } else if (weight >= 10) {
    price = over20Prrice / 2;
  } else {
    price = over20Prrice * 0.2;
  }

  if (days < 7) {
    price *= 1.4;
  } else if (days <= 30) {
    price *= 1.15;
  } else {
    price *= 1.1;
  }
  price *= count
  console.log(`The total price of bags is: ${price.toFixed(2)} lv. `);
}
bags(["30", "18", "15", "2"]);
bags(["25.50", "5", "36", "6"]);
bags(["63.80", "23", "3", "1"]);
