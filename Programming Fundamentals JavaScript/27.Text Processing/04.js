function solve(text, number) {
  let trimmedText = text.substring(0, number);
  let placedToStop = 0;
  for (let i = trimmedText.length; i >= 0; i--) {
    if (trimmedText[i] === " ") {
      placedToStop = i;
      break;
    }
  }
  let finalText = trimmedText
  .substring(0, placedToStop)
  .padEnd(number,".");
  console.log(finalText);

  console.log(trimmedText);
}
solve(
  "Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.",
  25
);

// function solve(text, word) {
//   let newText = text;
//   let counter = 0;
//   while (newText.includes(word)) {
//     counter++;
//     newText=newText.replace(word, "%")
//   }
//   console.log(newText);
//   console.log(counter);
// }
// solve("This is a word and it also is a sentence", "is");
