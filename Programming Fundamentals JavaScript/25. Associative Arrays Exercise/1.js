function solve(array) {
  let wordsToFind = array.shift().split(" ");

  let objOfWords = {};

  for (let word of wordsToFind) {
    let count = 0;
    for (let el of array) {
      if (word === el) {
        count++;
        objOfWords[word] = count;
      } else {
        objOfWords[word] = count;
      }
    }
  }
  let entries = Object.entries(objOfWords);
  entries.sort((a, b) => b[1] - a[1]);
  for(let el of entries){
      console.log(`${el[0]} - ${el[1]}`);
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
