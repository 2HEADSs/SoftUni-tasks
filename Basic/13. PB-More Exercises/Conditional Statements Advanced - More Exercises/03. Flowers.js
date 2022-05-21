function solve(input) {
  let chrysanthemumCount = Number(input[0]);
  let rosesCount = Number(input[1]);
  let tulipCount = Number(input[2]);
  let season = input[3];
  let holiday = input[4];
  let sum = 0;

  if (season === "Spring" || season === "Summer") {
    sum = chrysanthemumCount * 2 + rosesCount * 4.1 + tulipCount * 2.5;
  } else if (season === "Autumn" || season === "Winter") {
    sum = chrysanthemumCount * 3.75 + rosesCount * 4.5 + tulipCount * 4.15;
  }
  if (holiday === "Y") {
    sum *= 1.15;
  }
  if (season === "Spring" && tulipCount > 7) {
    sum *= 0.95;
  }
  if (season === "Winter" && rosesCount >= 10) {
    sum *= 0.9;
  }
  if (chrysanthemumCount + rosesCount + tulipCount > 20) {
    sum *= 0.8;
  }
  let total = sum + 2;
  console.log(total.toFixed(2));
}
solve(["2", "4", "8", "Spring", "Y"]);
solve(["3", "10", "9", "Winter", "N"]);
solve(["10", "10", "10", "Autumn", "N"]);
