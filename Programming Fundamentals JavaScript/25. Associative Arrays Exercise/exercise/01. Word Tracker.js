function solve(input) {
  let words = input.shift().split(" ");
  let obj = {};

  for (let word of words) {
    let counter = 0;

    for (let curentWord of input) {
      if (curentWord === word) {
        counter++;
      }
      obj[word] = counter;
    }
  }
  let entries = Object.entries(obj);
  let sorted = entries.sort((a, b) => b[1] - a[1]);
  for(let[key, value] of sorted){
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
