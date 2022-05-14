function solve(input) {
  let index = 0;
  let command = input[index];
  index++;
  let maxNum = Number.MIN_SAFE_INTEGER

  while (command !== "Stop") {
    let num = Number(command)
    if(maxNum <num){
        maxNum = num;
    }
    command = input[index];
    index++
  }
  console.log(maxNum);
}
solve(["100", "99", "80", "70", "Stop"]);
solve(["-1", "-2", "Stop"]);
solve(["45", "-20", "7", "99", "Stop"]);
