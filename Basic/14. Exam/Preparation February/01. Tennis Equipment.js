function tennis(input) {
  let priceRocket = Number(input[0]);
  let countRocket = Number(input[1]);
  let countShoes = Number(input[2]);

  let sumRocket = priceRocket * countRocket;
  let priceShoes = priceRocket / 6;
  let sumShoes = priceShoes * countShoes;
  let restSum = (sumRocket + sumShoes) * 0.2;

  let total = sumRocket + sumShoes + restSum;
  let djkovoichPrice = total / 8;
  let sponsorPrice = (total * 7) / 8;

  console.log(`Price to be paid by Djokovic ${Math.floor(djkovoichPrice)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(sponsorPrice)}`);
}
tennis(["850", "4", "2"]);
tennis(["1000", "3", "1"]);
tennis(["386", "7", "4"]);
