function beer(input) {
  let name = input[0];
  let budget = Number(input[1]);
  let countBeers = Number(input[2]);
  let countChips = Number(input[3]);
  let sumBeer = countBeers * 1.2;
  let sumChips = Math.ceil(countChips * (sumBeer * 0.45));
  
  let total = sumBeer + sumChips;
  let diff = 0;
  if (budget >= total) {
    diff = budget - total;
    console.log(`${name} bought a snack and has ${diff.toFixed(2)} leva left.`);
  } else {
    diff = total - budget;
    console.log(`${name} needs ${diff.toFixed(2)} more leva!`);
  }
}
beer(["George", "10", "2", "3"]);
beer(["Valentin", "5", "2", "4"]);
