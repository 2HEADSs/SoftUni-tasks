function solve(input) {
  let wordsToFind = input.shift().split(" ");
  let occurrences = {};

  for (let word of wordsToFind) {
    let counter = 0;

    for (let current of input) {
      if (word === current) {
        counter++;
        occurrences[word] = counter;
      } else {
        occurrences[word] = counter;
      }
    }
  }
  let entries = Object.entries(occurrences);
  entries.sort((a,b) => Number(b[1]) - Number(a[1]))

  for([key, value] of entries){
    console.log(`${key} - ${value}`);
  }
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
