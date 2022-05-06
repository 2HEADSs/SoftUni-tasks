function solve(input) {
  let excursionPrice = Number(input[0]);
  let countPuzzle = Number(input[1]);
  let countPuppets = Number(input[2]);
  let countBears = Number(input[3]);
  let countMinion = Number(input[4]);
  let countTruck = Number(input[5]);
  let left = 0;
  let totalCount = countPuzzle + countPuppets + countBears + countMinion + countTruck;
  let sumPuzzle = countPuzzle * 2.6;
  let sumPuppets = countPuppets * 3;
  let sumBears = countBears * 4.1;
  let sumMinion = countMinion * 8.2;
  let sumTruck = countTruck * 2;
  let totalSum = sumPuzzle + sumPuppets + sumBears + sumMinion + sumTruck;
  if(totalCount >= 50 ){
      totalSum *= 0.75
  }
  let sumAfterRent = totalSum * 0.90
  if(excursionPrice <= sumAfterRent){
      left = sumAfterRent - excursionPrice
      console.log(`Yes! ${left.toFixed(2)} lv left.`);
  }else{
      left = excursionPrice - sumAfterRent;
      console.log(`Not enough money! ${left.toFixed(2)} lv needed.`);
  }
}
solve(["40.8", "20", "25", "30", "50", "10"]);
console.log("------------");
solve(["320", "8", "2", "5", "5", "1"]);
