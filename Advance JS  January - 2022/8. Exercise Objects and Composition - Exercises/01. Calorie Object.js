function solve(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let key = input[i];
    i++;
    let calories = Number(input[i]);
    obj[key] = calories;
  }
  console.log(obj);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
