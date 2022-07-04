function solve([input]) {
  let output = [];

  let totalMatch = 0;

  let digitPattern = /\d/g;
  let digits = input.match(digitPattern);
  let coolThreshold = 1;
  for (let digit of digits) {
    coolThreshold *= Number(digit);
  }

  let pattern = /(::|\*\*)([A-Z][a-z]{2,})\1/g;
  let match = input.match(pattern);

  for (let singleMatch of match) {
    totalMatch++;

    let newPattern = /[A-Z][a-z]{2,}/g;
    let finalMatch = singleMatch.match(newPattern).join("").split(", ");
    finalMatch = finalMatch[0].split("");

    let sumOfSingleMatch = 0;

    for (let el of finalMatch) {
      let sum = el.charCodeAt();
      sumOfSingleMatch += sum;
    }

    if (sumOfSingleMatch > coolThreshold) {
      output.push(singleMatch);
    }
  }
  console.log(`Cool threshold: ${coolThreshold}`);
  console.log(`${totalMatch} emojis found in the text. The cool ones are:`);
  console.log(`${output.join("\n")}`);

}
solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
console.log("----------");
solve([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
