function solve(input) {
  let index = 0;
  let target = Number(input[index]);
  index++;
  let sum = 0;

  while (sum < target) {
    let num = Number(input[index]);
    index++;
    sum += num;
  }
  console.log(sum);
}
solve(["100", "10", "20", "30", "40"]);
solve(["20", "1", "2", "3", "4", "5", "6"]);
