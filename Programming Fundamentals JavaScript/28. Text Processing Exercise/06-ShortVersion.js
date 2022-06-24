function solve(text) {
  text = text.split("");
  let words = [];

  text.forEach((el) => {
    if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
      words.push(el);
    } else {
      words[words.length - 1] += el;
    }
  });
  console.log(words.join(", "));
}
solve("SplitMeIfYouCanHaHaYouCantOrYouCan");
