function solve(input) {
  let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
  let output = [];

  let match = input.match(regex);
  for (let el of match) {
    output.push(el);
  }
  console.log(output.join(" "));
}
solve(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
