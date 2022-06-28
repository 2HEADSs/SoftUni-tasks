function solve(text) {
  let output = [];
  let total = 0;
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})\1/g;
  let match = pattern.exec(text);
  while (match !== null) {
    output.push(match[2]);
    total += match[2].length;
    match = pattern.exec(text);
  }
  console.log(`Destinations: ${output.join(", ")}`);
  console.log(`Travel Points: ${total}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");
