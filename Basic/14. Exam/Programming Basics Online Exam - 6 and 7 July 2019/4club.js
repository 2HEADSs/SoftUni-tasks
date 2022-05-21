function club(input) {
  let index = 0;
  let neededSum = Number(input[index]);
  index++;
  let currant = input[index];
  let total = 0;


  while (currant    !== "Party!") {
    if (total >= neededSum) {
      break;
    }
    let cocktel = currant;
    let currantPrice = cocktel.length;
    index++;
    let count = Number(input[index]);
    let sum = count * currantPrice;
    if (sum % 2 !== 0) {
      sum *= 0.75;
    }
    total += sum;
    index++;
    currant = input[index];
  }
  if (total >= neededSum) {
    console.log(`Target acquired.`);
  }else {
      console.log(`We need ${(neededSum - total).toFixed(2)} leva more.`);
  }
  console.log(`Club income - ${total.toFixed(2)} leva.`);
}
// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
