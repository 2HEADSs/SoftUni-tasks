function solve(data) {
  let input = data.toLowerCase().split(" ");
  let map = new Map();

  for (let el of input) {
    let count = 0;
    if (map.has(el)) {
      count = map.get(el);
      count++;
      map.set(el, count);
    } else {
      count = 1;
      map.set(el, count);
    }
  }
  let entries = Array.from(map.entries());
  let sorted = entries.filter((el) => el[1] % 2 !== 0);
  let output = [];
  for (let el of sorted) {
    output.push(el[0]);
  }
  console.log(output.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
