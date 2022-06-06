function triangleArea(a, b, c) {
  let side = (a + b + c) / 2;
  let area = Math.sqrt(side * (side - a) * (side - b) * (side - c));
  console.log(area);
}
triangleArea(2, 3.5, 4);
