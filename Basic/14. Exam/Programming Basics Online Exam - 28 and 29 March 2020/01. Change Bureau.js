function solve(input) {
  let countBitcoins = Number(input[0]);
  let countJuna = Number(input[1]);
  let comission = Number(input[2]);

  let bitInLeva = countBitcoins * 1168;
  // bitcoini v leva
  let junaInUsd = countJuna * 0.15;
  // juani v USD
  let sumLeva = bitInLeva + junaInUsd * 1.76;
  let euro = sumLeva / 1.95;
  let total = euro * ((100 - comission) / 100);
  console.log(total.toFixed(2));
}
solve(["1", "5", "5"]);
solve(["20", "5678", "2.4"]);
// •	На първия ред – броят биткойни. Цяло число в интервала [0…20]
// •	На втория ред – броят китайски юана. Реално число в интервала [0.00… 50 000.00]
// •	На третия ред – комисионната. Реално число в интервала [0.00 ... 5.00]
