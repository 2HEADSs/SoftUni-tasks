function solve(text) {
  let result = [];
  let word = "";
  let counter = 0;
  for (let ch of text) {
    let code = ch.charCodeAt(0);
    if (code >= 64 && code <= 90) {
      counter++;
      if (counter > 1) {
        result.push(word);
      }
      word = "";
      word += ch;
    } else {
      word += ch;
    }
  }
  result.push(word);
  console.log(result.join(", "));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
