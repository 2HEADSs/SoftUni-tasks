function solve(input) {
  let index = 0;
  let command = input[index];
  let minNum = Number.MAX_SAFE_INTEGER;

  while (command !== "Stop") {
    let num = Number(input[index]);
    if (minNum > num) {
      minNum = num;
    }
    index++;
    command = input[index];
  }
  console.log(minNum);
}
solve(["100", "99", "80", "70", "Stop"]);
