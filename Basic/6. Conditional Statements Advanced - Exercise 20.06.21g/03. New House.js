function solve(input) {
  let type = input[0];
  let count = Number(input[1]);
  let budget = Number(input[2]);

  let priceRoses = 5;
  let priceDahlia = 3.8;
  let priceTulip = 2.8;
  let priceNarcius = 3;
  let priceGladiola = 2.5;
  let sum = 0;

  switch (type) {
    case "Roses":
      sum = count * priceRoses;
      if (count > 80) {
        sum *= 0.9;
      }
      
      break;
    case "Dahlias":
      sum = count * priceDahlia;
      if (count > 90) {
        sum *= 0.85;
      }
      break;
    case "Tulips":
      sum = count * priceTulip;
      if (count > 80) {
        sum *= 0.85;
      }
      break;
    case "Narcissus":
      sum = count * priceNarcius;
      if (count < 120) {
        sum *= 1.15;
      }
      break;
    case "Gladiolus":
      sum = count * priceGladiola;
      if (count < 80) {
        sum *= 1.2;
      }
      break;
  }
  let total = Math.abs(budget - sum);
  if (budget >= sum) {
    console.log(
      `Hey, you have a great garden with ${count} ${type} and ${total.toFixed(
        2
      )} leva left.`
    );
  } else if (budget < sum) {
    console.log(`Not enough money, you need ${total.toFixed(2)} leva more.`);
  }
}
solve(["Roses", "55", "250"]);
solve(["Tulips", "88", "260"]);
solve(["Narcissus", "119", "360"]);
