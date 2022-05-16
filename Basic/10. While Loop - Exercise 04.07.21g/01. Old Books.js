function solve(input) {
  let need = input[0];
  let index = 1;
  let current = input[index];
  let books = 0;
  let isFind = false;

  while (current !== "No More Books") {
    if (current === need) {
      isFind = true;
      break;
    }
    index++;
    current = input[index];
    books++
  }
  if ((isFind === false)) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${books} books.`);
  } else {
    console.log(`You checked ${books} books and found it.`);
  }
}
solve(["Troy", "Stronger", "Life Style", "Troy"]);
solve([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
solve([
  "Bourne",
  "True Story",
  "Forever",
  "More Space",
  "The Girl",
  "Spaceship",
  "Strongest",
  "Profit",
  "Tripple",
  "Stella",
  "The Matrix",
  "Bourne",
]);
