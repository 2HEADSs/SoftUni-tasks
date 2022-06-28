function lift(arr) {
  let people = Number(arr[0]);
  let cabins = arr[1].split(" ").map(Number);
  //   let max = 4;

  for (let i = 0; i < cabins.length; i++) {
    let usedSeats = cabins[i];

    if (usedSeats < 4) {
      let freeSeats = 4 - usedSeats;

      if (freeSeats > people) {
        cabins[i] += people;
        people = 0;
      } else {
        people -= freeSeats;
        cabins[i] += freeSeats;
      }
    }
  }
  let isEmpty = false;
  for (const wagons of cabins) {
    if (wagons < 4) {
      isEmpty = true;
    }
  }

  if (people === 0 && !isEmpty) {
    console.log(`${cabins.join(" ")}`);
  } else if (people === 0 && isEmpty) {
    console.log("The lift has empty spots!");
    console.log(`${cabins.join(" ")}`);
  } else if (people > 0) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(`${cabins.join(" ")}`);
  }
}
lift(["15", "0 0 0 0 0"]);
lift(["20", "0 2 0"]);
lift(["9", "0 2 2"]);
