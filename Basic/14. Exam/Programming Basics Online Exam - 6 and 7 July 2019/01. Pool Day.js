function solve(input) {
  let people = Number(input[0]);
  let tax = Number(input[1]);
  let priceChair = Number(input[2]);
  let priceUmbrella = Number(input[3]);
  let sumTaxes = people * tax;
  let countUmbrella = Math.ceil(people / 2);
  let countChair = Math.ceil(people * 0.75);
  let sumuChair = countChair * priceChair;
  let sumUmbrella = countUmbrella * priceUmbrella;
  let total = sumTaxes + sumuChair + sumUmbrella;
  console.log(`${total.toFixed(2)} lv.`);
}
solve(["21", "5.50", "4.40", "6.20"]);
