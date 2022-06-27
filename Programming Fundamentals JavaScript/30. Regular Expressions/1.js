function solve(text) {
  let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let matches = [];
  let validMatche;

  while ((validMatche = regEx.exec(text)) !== null) {
      matches.push(validMatche[0])
  }
console.log(matches.join(" "));
}
solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
