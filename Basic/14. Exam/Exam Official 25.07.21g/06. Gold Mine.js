function goldMine(input) {
  let index = 0;
  let countDestination = Number(input[index]);
  index++;
  for (i = 1; i <= countDestination; i++) {
    let need = Number(input[index]);
    index++;
    let days = Number(input[index]);
    index++;
    let sumDig = 0;
    for (j = 1; j <= days; j++) {
      let digger = Number(input[index]);
      index++;
      sumDig += digger;
    }
    sumDig /= days;
    if (sumDig >= need) {
      console.log(`Good job! Average gold per day: ${sumDig.toFixed(2)}.`);
    } else {
      let diff = need - sumDig;
      console.log(`You need ${diff.toFixed(2)} gold.`);
    }
  }
}
goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
goldMine(["1", "5", "3", "10", "1", "3"]);
