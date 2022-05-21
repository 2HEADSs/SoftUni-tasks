function solve(input) {
  let need = Number(input[0]);
  let sumCash = 0;
  let sumCard = 0;
  let index = 1;
  let current = input[index];
  let total = 0;
  let countCash = 0;
  let countCard = 0;
  let isSave = false;

  while (current !== "End") {
    current = Number(input[index]);
    if (index % 2 == 0) {
      if (current < 10) {
        console.log(`Error in transaction!`);
      } else {
        console.log(`Product sold!`);
        sumCard += current;
        countCard++;
        total += current;
      }
    } else {
      if (current > 100) {
        console.log(`Error in transaction!`);
      } else {
        console.log(`Product sold!`);
        sumCash += current;
        countCash++;
        total += current;
      }
    }
    let averageCs = sumCash / countCash;
    let averageCc = sumCard / countCard;
    if (total >= need) {
      console.log(`Average CS: ${averageCs.toFixed(2)}`);
      console.log(`Average CC: ${averageCc.toFixed(2)}`);
      isSave = true;
      break;
    }
    index++;
    current = input[index];
  }
  if (!isSave) {
    console.log(`Failed to collect required money for charity.`);
  }
}
solve(["500", "120", "8", "63", "256", "78", "317"]);
solve(["600", "86", "150", "98", "227", "End"]);
