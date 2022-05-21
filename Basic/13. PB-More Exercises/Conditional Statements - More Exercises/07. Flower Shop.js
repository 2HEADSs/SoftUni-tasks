function solve(input) {
  let countMagnolia = Number(input[0]);
  let countHyacinth = Number(input[1]);
  let countRoses = Number(input[2]);
  let countCactus = Number(input[3]);
  let priceGift = Number(input[4]);

  let sumMagnoolia = countMagnolia * 3.25;
  let sumHyacinth = countHyacinth * 4;
  let sumRoses = countRoses * 3.5;
  let sumCactus = countCactus * 8;
  let sum = (sumMagnoolia + sumHyacinth + sumRoses + sumCactus) * 0.95;

  if (sum >= priceGift) {
    console.log(`She is left with ${Math.floor(sum - priceGift)} leva.`);
  } else {
    console.log(`She will have to borrow ${Math.ceil(priceGift - sum)} leva.`);
  }
}
solve(["2", "3", "5", "1", "50"]);
solve(["15", "7", "5", "10", "100"]);
