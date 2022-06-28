function lift(arr) {
  let people = Number(arr[0]);
  let lift = arr[1].split(" ").map(Number);

  for (let i = 0; i < lift.length; i++) {
    let usedSeats = lift[i];

    if (usedSeats < 4) {
      let freeSeats = 4 - usedSeats;

      if (freeSeats > people) {
        freeSeats = people;
        lift[i] += freeSeats;
        people = 0;
        //if this wagon can contain all people in quee and there is no one left.
      } else {
        people -= freeSeats;
        lift[i] += freeSeats;
        //this wagon contain paprt of people and moore left-> continue
      }
    }
  }
  let isEmpty = false;
  for (let currentWagon of lift) {
    if (currentWagon < 4) {
      isEmpty = true;
    }
  }

  if (people === 0 && isEmpty) {
    console.log("The lift has empty spots!");
    console.log(lift.join(" "));
  } else if (people === 0 && !isEmpty) {
    console.log(lift.join(" "));
  } else if (people > 0 && !isEmpty) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
    console.log(lift.join(" "));
  }
}
lift(["15", "0 0 0 0 0"]);
lift(["20", "0 2 0"]);
lift(["9", "0 2 2"]);
lift(["21", "0 0 0 0 0"]);