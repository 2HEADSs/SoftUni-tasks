function solve(input) {
  let wordsToSearch = input.shift().split(" ");
  let myWords = {};

  for (let elements of wordsToSearch) {
    myWords[elements] = 0;
  }
  for (let word of input) {
    if (myWords.hasOwnProperty(word)) {
      myWords[word] += 1;
    }
  }
  let sortedEntries = Object.entries(myWords).sort((a, b) => {
    return b[1] - a[1];
  });
  
  sortedEntries.forEach((el) => {
      console.log(`${el[0]} - ${el[1]}`);
  })
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
