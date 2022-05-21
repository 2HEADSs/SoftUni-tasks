function solve(input) {
  let priceFlour = Number(input[0]);
  let flourInKg = Number(input[1]);
  let shugarInKg = Number(input[2]);
  let countCartoonEggs = Number(input[3]);
  let countMay = Number(input[4]);

  let shugarPrice = priceFlour * 0.75 
  let eggsPrice= priceFlour * 1.10; 
  let mayPrice = shugarPrice * 0.2

  let flourSum = priceFlour * flourInKg;
  let shugarSum = shugarPrice * shugarInKg;
  let eggsSum = eggsPrice * countCartoonEggs;
  let maySum = mayPrice *countMay;


  let total =  flourSum + shugarSum + eggsSum + maySum;
  console.log(total.toFixed(2));
}
solve(["50", "10", "3.5", "6", "1"]);
solve(["63.44", "3.57", "6.35", "8", "2"]);
