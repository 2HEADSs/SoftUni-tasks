function easter(input) {
  let index = 0;
  let countEasterBread = Number(input[index]);
  index++
  let winBakerName = "";
  let winBakerPoint = 0;

  for (let i = 0; i < countEasterBread; i++) {
    let name = input[index];
    index++;

    let tempPoint = 0;
    let command = input[index];
    index++;
    while (command !== "Stop") {
      let point = Number(command);
      tempPoint += point
      command = input[index];
      index++;
    }
    console.log(`${name} has ${tempPoint} points.`);
    if(tempPoint > winBakerPoint){
        winBakerName = name;
        winBakerPoint = tempPoint
        console.log(`${name} is the new number 1!`);
    }
  }
  console.log(`${winBakerName} won competition with ${winBakerPoint} points!`);
}
easter([
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
