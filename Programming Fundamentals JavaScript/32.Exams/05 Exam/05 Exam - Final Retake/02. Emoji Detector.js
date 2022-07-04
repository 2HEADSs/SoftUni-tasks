function solve([input]) {
  //calculate cool threshold(digit regex)
  //extract all valid emojies

  let threshold = 1;
  let coolEmojies = [];
  // because we must multiplying we start with one -- with zero always will  be zero
  let digits = input.match(/\d/g).map(Number);
  for (let digit of digits) {
    threshold *= digit;
  }
  let emojies = input.match(/(::|\*\*)[A-Z][a-z]{2,}(\1)/g);
  console.log(emojies);

  // for each emojis :
  // --- calculate coolnes
  for (let emoji of emojies) {
    let coolnes = 0;
    let chars = emoji.slice(2, -2);
    for (let char of chars) {
      coolnes += char.charCodeAt(0);
    }

    // --- if above threscoold - add to  final result
    if (coolnes >= threshold) {
      coolEmojies.push(emoji);
    }
  }
  console.log(`Cool threshold: ${threshold}`);
  console.log(
    `${
      emojies ? emojies.length : 0
    } emojis found in the text. The cool ones are:`
  );
  console.log(coolEmojies.join("\n"));
}
solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);

// (?:::|\*\*)[A-Z][a-z]{2,}(\1)
// \d
// alternative regex - два регекса с знак за алтернатива или единия или другия
///::([A-Z][a-z]{2,})::|\*\*([A-Z][a-z]{2,})\*\*/g
