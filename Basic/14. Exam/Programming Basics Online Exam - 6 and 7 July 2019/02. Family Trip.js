function solve(input) {
  let budget = Number(input[0]);
  let nights = Number(input[1]);
  let priceNight = Number(input[2]);
  let extraPercent = Number(input[3]);

  if (nights > 7) {
    priceNight *= 0.95;
  }
  let sumNight = nights * priceNight;
  let extra = budget * (extraPercent / 100);
  let total = sumNight + extra;
  if (budget >= total) {
    let difference = budget - total;
    console.log(
      `Ivanovi will be left with ${difference.toFixed(2)} leva after vacation.`
    );
  } else {
    let difference = total - budget;
    console.log(`${difference.toFixed(2)} leva needed.`);
  }
}
solve(["800.50", "8", "100", "2"]);
solve(["500", "7", "66", "15"]);
// Семейство Иванови планират семейната си почивка.
// Вашата задача е да напишете програма, която да изчислява дали предвидения от тях
// бюджет ще им стигне, като знаете колко нощувки са планирали,
// каква е цената за нощувка и колко процента от бюджета са предвидили за
// допълнителни разходи. Трябва да се има предвид, че ако броят на нощувките е
// по-голям от 7, цената за нощувка се намаля с 5%.
