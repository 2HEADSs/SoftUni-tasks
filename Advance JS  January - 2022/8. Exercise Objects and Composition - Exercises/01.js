function solve(input) {
  let outputObj = {};

  while (input.length > 0) {
    let product = input.shift();
    let call = Number(input.shift());
    outputObj[product] = call;
  }
  console.log(outputObj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
