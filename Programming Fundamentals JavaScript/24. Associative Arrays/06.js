function solve(input) {
  let words = {};

  for (let word of input) {
    if (!words.hasOwnProperty(word)) {
      words[word] = 1;
    } else {
      words[word] += 1;
    }
  }
  let entries = Object.entries(words);
  let sortedWords = entries.sort((a, b) => b[1] - a[1]);
  for(let singleWord of sortedWords){
    console.log(`${singleWord[0]} -> ${singleWord[1]} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
