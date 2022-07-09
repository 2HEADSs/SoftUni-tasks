function solve(input) {
  input.sort((a, b) => a.localeCompare(b));

  let count = 1;
  input.forEach((element) => {
    console.log(`${count}.${element}`);
    count++;
  });
}
solve(['John', 'Bob', 'Christina', 'Ema']);
