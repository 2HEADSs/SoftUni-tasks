function theLift(input) {
  let people = input[0];
  let liftCabins = input[1].split(" ").map(Number);
  let arrayL = liftCabins.length;
  for (let i = 0; i < arrayL; i++) {
    let usedSeats = liftCabins[i];

    if (usedSeats < 4) {
      let freeSeats = 4 - usedSeats;

      if (freeSeats > people) {
        liftCabins[i] = people + usedSeats;
        people = 0;
      } else {
        people -= freeSeats;
        liftCabins[i] = 4;
      }
    }
  }
  let isEmpty = false;
  if (liftCabins[liftCabins.length - 1] == 0) {
    isEmpty = true;
  }

  if (people === 0 && isEmpty) {
    console.log("The lift has empty spots!");
    console.log(liftCabins.join(" "));
  } else if (people > 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(liftCabins.join(" "));
  } else if (people === 0 && !isEmpty) {
    console.log(liftCabins.join(" "));
  }
}
theLift(["15", "0 0 0 0 0"]);
// theLift(["20", "0 2 0"]);
// theLift(["9", "0 2 2"]);
