function solve(input) {
  let budget = Number(input[0]);
  let countVideoCards = Number(input[1]);
  let countProcesors = Number(input[2]);
  let countRam = Number(input[3]);

  let sumVideo = countVideoCards * 250;
  let procesorPrice = sumVideo * 0.35;
  let sumProcesor = procesorPrice * countProcesors;
  let ramPrice = sumVideo * 0.1;
  let sumRam = ramPrice * countRam;
  let total = sumVideo + sumProcesor + sumRam;
  if (countVideoCards > countProcesors) {
    total *= 0.85;
  }
  let difference = Math.abs(budget - total);
  if (budget >= total) {
    console.log(`You have ${difference.toFixed(2)} leva left!`);
  } else {
    console.log(
      `Not enough money! You need ${difference.toFixed(2)} leva more!`
    );
  }
}
solve(["900", "2", "1", "3"]);
solve(["920.45", "3", "1", "1"]);
