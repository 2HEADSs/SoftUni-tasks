function solve(input) {
  let priceSkumriq = Number(input[0]);
  let priceCaca = Number(input[1]);
  let pricePalamud = priceSkumriq * 1.6;
  let priceSafrid = priceCaca * 1.8;
  let priceMidi = 7.5;
  let palamudInKg = Number(input[2]);
  let safridInKg = Number(input[3]);
  let midiInKg = Number(input[4]);
  let total =
    pricePalamud * palamudInKg +
    priceSafrid * safridInKg +
    priceMidi * midiInKg;
  console.log(total.toFixed(2));
}
solve(["6.90", "4.20", "1.5", "2.5", "1"]);
solve(["5.55", "3.57", "4.3", "3.6", "7"]);

// •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
// •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]
