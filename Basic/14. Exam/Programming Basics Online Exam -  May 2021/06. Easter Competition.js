function solve(input) {
  let n = Number(input[0]);
  let index = 1;
  let points = 0;
  let name = "";
  let maxPoint = 0;
  let winner = ""

  for (i = 1; i <= n; i++) {
    let points = 0;
    let current = input[index];
    name = current;
    index++
    while (current !== "Stop") {
      current = Number(input[index]);
      points += current;
      index++;
      current = input[index];
    }
    console.log(`${name} has ${points} points.`);
    index++
    if(maxPoint < points){
        maxPoint = points
        winner = name
        console.log(`${name} is the new number 1!`);
    }
  }
  console.log(`${winner} won competition with ${maxPoint} points!`);
}
solve([
  "3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4",
  "2",
  "Stop",
]);
