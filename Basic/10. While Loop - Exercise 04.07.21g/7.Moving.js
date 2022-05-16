function moving(input) {
  let w = Number(input[0]);
  let l = Number(input[1]);
  let h = Number(input[2]);

  let volume = w * l * h;
  let index = 3;
  let current = input[index];
  let totalBoxes = 0;

  while (current !== "Done") {
    current = Number(current);
    totalBoxes += current;
    if (totalBoxes > volume) {
      break;
    }
    index++;
    current = input[index];

  }
  let diff = 0;
  if (totalBoxes >= volume) {
    diff = totalBoxes - volume;
    console.log(
      `No more free space! You need ${diff} Cubic meters more.`
    );
  } else {
    diff = volume - totalBoxes;
    console.log(`${diff} Cubic meters left.`);
  }
  
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
