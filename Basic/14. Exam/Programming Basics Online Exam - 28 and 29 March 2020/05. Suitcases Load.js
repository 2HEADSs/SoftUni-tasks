function solve(input) {
  let volume = Number(input[0]);
  let index = 1;
  let current = input[index];
  let currentLuggage = 0;
  let count = 0;
  let isFull = false;

  while (current !== "End") {
    current = Number(input[index]);
    if (index % 3 === 0) {
      currentLuggage = current * 1.1;
    } else {
      currentLuggage = current * 1.0;
    }
    if (currentLuggage >= volume) {
      isFull = true;
      console.log(`No more space!`);
      break;
    }
    count++;
    volume -= currentLuggage;
    index++;
    current = input[index];
  }
  if(isFull === false){
      console.log(`Congratulations! All suitcases are loaded!`);
  }
  console.log(`Statistic: ${count} suitcases loaded.`);
}
// solve(["550", "100", "252", "72", "End"]);
solve(["700.5", "180", "340.6", "126", "220"]);
