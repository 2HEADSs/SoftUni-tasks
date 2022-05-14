function moving(input) {
  let w = Number(input[0]);
  let l = Number(input[1]);
  let h = Number(input[2]);
  let index = 3;
  let command = input[index];
  let totalFreeSpace = w * l * h;
  let isFull = false;
  while (command !== "Done") {
    let box = Number(command);
    totalFreeSpace -= box;
    if (totalFreeSpace < 0) {
      console.log(
        `No more free space! You need ${Math.abs(
          totalFreeSpace
        )} Cubic meters more.`
      );
      isFull = true;
      break;
    }
    index++;
    command = input[index];
  }
  if (isFull === false) {
    console.log(`${totalFreeSpace} Cubic meters left.`);
  }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
// solve(["10", "1", "2", "4", "6", "Done"]);
