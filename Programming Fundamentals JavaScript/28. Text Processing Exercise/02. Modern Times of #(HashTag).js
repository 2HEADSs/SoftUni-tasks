function solve(text) {
  let result = [];
  for (let element of text.split(" ")) {
    if (element[0] === "#" && element.length !== 1) {
      result.push(element.substring(1));
    }
  }
  let output = [];
  for (let word of result) {
    let flag = true;
    for (let ch of word) {
      let code = ch.charCodeAt(0);
      if ((code < 97 || code > 122) && (code < 65 || code > 90)) {
        flag = false;
      }
    }
    if (flag) {
      output.push(word);
    }
  }

  output.forEach((el) => console.log(el))
}
solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
