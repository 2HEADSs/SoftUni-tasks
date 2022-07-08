function solve(input, firstPie, secondPie) {
  let indexOfFirst = input.indexOf(firstPie);
  let indexOfSecond = input.indexOf(secondPie);
  let output = []
  for (let i = indexOfFirst; i <= indexOfSecond; i++) {
      output.push(input[i])
  }

  return output
}
console.log(solve(
  [
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie',
  ],
  'Key Lime Pie',
  'Lemon Meringue Pie'
));
console.log(solve(
  [
    'Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie',
  ],
  'Pot Pie',
  'Smoked Fish Pie'
));
