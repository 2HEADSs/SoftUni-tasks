function solve(input) {
  let priceRocket = Number(input[0]);
  let countRockets = Number(input[1]);
  let countShoes = Number(input[2]);
  let priceShoes = priceRocket / 6;

  let sum = priceRocket * countRockets + priceShoes * countShoes;
  let total = sum + sum * 0.2;
  let djoko = total / 8;
  let sponsor = (total * 7) / 8;

  console.log(`Price to be paid by Djokovic ${Math.floor(djoko)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(sponsor)}`);
}
solve(["850", "4", "2"]);
solve(["1000", "3", "1"]);
