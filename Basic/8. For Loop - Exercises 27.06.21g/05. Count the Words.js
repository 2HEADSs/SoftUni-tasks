function solve(input) {
  let message = input[0];
  let stringL = message.length;
  let spaceCount = 0;

  for (let i = 0; i < stringL; i++) {
    if (message[i] === " ") {
      spaceCount++;
    }
  }
  let wordsCount = spaceCount + 1;
  if (wordsCount > 10) {
    console.log(`The message is too long to be send! Has ${wordsCount} words.`);
  } else {
    console.log("The message was sent successfully!");
  }
}
solve(["This message has exactly eleven words. One more as it's allowed!"]);
solve(["This message has ten words and you can send it!"]);
