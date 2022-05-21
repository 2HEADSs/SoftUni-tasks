function solve(input) {
  let count = Number(input[0]);
  let maxMovie = "";
  let maxScore = Number.MIN_SAFE_INTEGER;
  let minMovie = "";
  let minScore = Number.MAX_SAFE_INTEGER;
  let average = 0;
  let sumRiting = 0;

  for (let i = 1; i < input.length; i++) {
    let currentMovie = input[i];
    i++;
    let currentScore = Number(input[i]);
    sumRiting += currentScore;
    if (currentScore > maxScore) {
      maxScore = currentScore;
      maxMovie = currentMovie;
    } else if (currentScore < minScore) {
      minScore = currentScore;
      minMovie = currentMovie;
    }
  }
  average = sumRiting / count;
  console.log(`${maxMovie} is with highest rating: ${maxScore.toFixed(1)}`);
  console.log(`${minMovie} is with lowest rating: ${minScore.toFixed(1)}`);
  console.log(`Average rating: ${average.toFixed(1)}`);
}
solve([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
