function solve(text) {
  let firstWord = text
    .substring(0, text.length / 2)
    .split("")
    .reverse();
  let secondWord = text
    .substring(text.length / 2)
    .split("")
    .reverse();
  console.log(firstWord.join(""));
  console.log(secondWord.join(""));
}
solve("tluciffiDsIsihTgnizamAoSsIsihT");
