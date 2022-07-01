function heartDelivery(input) {
  let arr = input.shift().split("@").map(Number);
  let position = 0;
  let countFailed = 0;
  let lengthCommand = input.length;
  let lenghtHouse = arr.length;
  let houseIndex = position;

  for (let i = 0; i < lengthCommand; i++) {
    let command = input[i].split(" ");
    let jump = +command[1];

    if (command[0] === "Love!") {
      break;
    }
    //start checking if newPosition is valid(isn't out of bones)
    if (position + jump < lenghtHouse) {
      position = position + jump;
      houseIndex = position;
      if (arr[houseIndex] !== 0) {
        arr[houseIndex] -= 2;
        if (arr[houseIndex] === 0) {
          console.log(`Place ${houseIndex} has Valentine's day.`);
        }
      } else {
        console.log(`Place ${houseIndex} already had Valentine's day.`);
      }
    } else if (position + jump >= lenghtHouse) {
      position = 0;
      houseIndex = position;
      if (arr[houseIndex] !== 0) {
        arr[houseIndex] -= 2;
        if (arr[houseIndex] === 0) {
          console.log(`Place ${houseIndex} has Valentine's day.`);
        }
      } else {
        console.log(`Place ${houseIndex} already had Valentine's day.`);
      }
    }
  }
  console.log(`Cupid's last position was ${houseIndex}.`);
  for (let el of arr) {
    if (el !== 0) {
      countFailed++;
    }
  }
  if (countFailed > 0) {
    console.log(`Cupid has failed ${countFailed} places.`);
  } else {
    console.log(`Mission was successful.`);
  }
}
// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

heartDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
