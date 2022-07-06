function solve(input) {
  let type = typeof input;
  let area = 0;
  if (type === 'number') {
    area = Math.PI * Math.pow(input, 2);
    console.log(`${area.toFixed(2)}`);
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
solve(5);
solve('name');
