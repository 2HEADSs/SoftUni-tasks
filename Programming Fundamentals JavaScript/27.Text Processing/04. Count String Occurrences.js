function solve(text, word) {
  let newText = text.split(" ");
  let counter = 0;

  for (let ch of newText) {
    if (ch === word) {
      counter++;
    }
  }
  console.log(counter);
}
solve("This is a word and it also is a sentence", "is");
