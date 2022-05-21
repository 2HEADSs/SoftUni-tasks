function solve(input) {
  let bottles = Number(input[0]);
  let index = 1;
  let command = input[index];
  let sumDishes = 0;
  let sumPot = 0;
  let sumDetergent = bottles * 750;
  let isValid = true;
  while (command !== "End") {
    command = Number(input[index]);
    if (index % 3 === 0) {
      sumDetergent -= command * 15;
      sumPot += command;
    } else {
      sumDetergent -= command * 5;
      sumDishes += command;
    }
    if (sumDetergent < 0) {
      isValid = false;
      console.log(
        `Not enough detergent, ${Math.abs(sumDetergent)} ml. more necessary!`
      );
      break;
    }
    index++;
    command = input[index];
  }
  if (isValid) {
    console.log("Detergent was enough!");
    console.log(`${sumDishes} dishes and ${sumPot} pots were washed.`);
    console.log(`Leftover detergent ${sumDetergent} ml.`);
  }
}
solve(["2", "53", "65", "55", "End"]);
solve(["1", "10", "15", "10", "12", "13", "30"]);
