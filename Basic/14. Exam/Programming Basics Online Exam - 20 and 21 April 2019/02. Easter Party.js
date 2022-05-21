function solve(input) {
  let guest = Number(input[0]);
  let pricePerOne = Number(input[1]);
  let budget = Number(input[2]);
  let cake = budget * 0.1;
  let sum = guest * pricePerOne;

  if (guest >= 10 && guest <= 15) {
    sum *= 0.85;
  } else if (guest > 15 && guest <= 20) {
    sum *= 0.8;
  } else if (guest > 20) {
    sum *= 0.75;
  }
  let total = sum + cake
  if(budget >= total){
      console.log(`It is party time! ${(budget - total).toFixed(2)} leva left.`);
  }else{
      console.log(`No party! ${(total - budget).toFixed(2)} leva needed.`);
  }
}
solve(["18", "30", "450"]);
solve(["8", "25", "340"]);
