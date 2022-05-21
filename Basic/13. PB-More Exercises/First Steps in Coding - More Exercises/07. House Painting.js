function solve(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);
  let h = Number(input[2]);
  let door = 1.2 * 2;
  let windows = 2 * (1.5 * 1.5);
  let frontWall = x * x;
  let sumWalls = frontWall + frontWall - door;
  let sideWall = 2 * (x * y) - windows;
  let green = (sumWalls + sideWall) / 3.4;
  let roofSquare = 2 * (x * y);
  let roofTriangle = 2 * ((x * h) / 2);
  let red = (roofSquare + roofTriangle) / 4.3;
  console.log(green.toFixed(2));
  console.log(red.toFixed(2));
}
solve(["6", "10", "5.2"]);
