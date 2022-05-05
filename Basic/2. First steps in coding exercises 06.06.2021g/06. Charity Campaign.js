function solve(input) {
  let days = Number(input[0]);
  let cheffs = Number(input[1]);
  let cakes = Number(input[2]);
  let waffles = Number(input[3]);
  let pancakes = Number(input[4]);
  let cakeSum = cakes * 45;
  let wafflesSum = waffles * 5.8;
  let pancakesSum = pancakes * 3.2;
  let sumPerDay = (cakeSum + wafflesSum + pancakesSum) * cheffs;
  let totalSum = sumPerDay * days;
  let sumAfterCosts = totalSum - totalSum / 8;
  
  console.log(sumAfterCosts);
}
solve(["23", "8", "14", "30", "16"]);
solve(["131", "5", "9", "33", "46"]);
// •	Торта - 45 лв.
// •	Гофрета - 5.80 лв.
// •	Палачинка – 3.20 лв.
