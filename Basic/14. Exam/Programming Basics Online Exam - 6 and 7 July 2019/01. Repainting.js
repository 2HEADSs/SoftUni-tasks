function solve(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let diluent = Number(input[2]);
  let hours = Number(input[3]);
  let sumNylon = (nylon + 2) * 1.5;
  let sumPaint = paint * 1.1 * 14.5;
  let sumDiluent = diluent * 5;
  let sum = sumNylon + sumPaint + sumDiluent + 0.4;
  let sumWork = sum * 0.3 * hours;
  let total = sumWork + sum;
  console.log(`Total expenses: ${total.toFixed(2)} lv.`);
}
solve(["10", "11", "4", "8"]);
solve(["5", "10", "10", "1"]);
// •	Предпазен найлон - 1.50 лв. за кв.м.
// •	Боя - 14.50 лв. за литър
// •	Разредител за боя - 5.00 лв. за литър
