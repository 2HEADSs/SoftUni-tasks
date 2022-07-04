function solve(input) {
  let obj = {};
  while (input[0] !== "End") {
    let [command, first, second] = input.shift().split(" ");
    if (command === "Enroll") {
      if (!obj.hasOwnProperty(first)) {
        obj[first] = {
          spels: [],
        };
      } else {
        console.log(`${first} is already enrolled.`);
      }
    } else if (command === "Learn") {
      if (obj.hasOwnProperty(first)) {
        if (obj[first].spels.includes(second)) {
          console.log(`${first} has already learnt ${second}.`);
        } else {
          obj[first].spels.push(second);
        }
      } else {
        console.log(`${first} doesn't exist.`);
      }
    } else if (command === "Unlearn") {
      let indexOfSpell = 0;
      if (obj.hasOwnProperty(first)) {
        indexOfSpell = obj[first].spels.indexOf(second);
        if (indexOfSpell !== -1) {
          obj[first].spels.splice(indexOfSpell, 1);
        } else {
          console.log(`${first} doesn't know ${second}.`);
        }
      } else {
        console.log(`${first} doesn't exist.`);
      }
    }
  }

  // let entries = Object.entries(obj);
  // console.log(entries);
  // let sorted = entries.sort((a, b) => {
  //   let numberSpelsA = a[1].spels.length;
  //   let numberSpelsB = b[1].spels.length;

  //   let nameA = a[0];
  //   let nameB = b[0];
  //   return numberSpelsB - numberSpelsA || nameA.localeCompare(nameB);
  // });
  // console.log(`Heroes:`);
  // for (let hero of sorted) {
  //   console.log(`== ${hero[0]}: ${hero[1].spels}`);
  // }
}
solve([
  "Enroll Stefan",
  "Enroll Peter",
  "Enroll Stefan",
  "Learn Stefan ItShouldWork",
  "Learn John ItShouldNotWork",
  "Unlearn George Dispel",
  "Unlearn Stefan ItShouldWork",
  "End",
]);
// solve(["Enroll Stefan",
// "Learn Stefan ItShouldWork",
// "Learn Stefan ItShouldWork",
// "Unlearn Stefan NotFound",
// "End"])
// solve(["Enroll Stefan",
//     "Enroll Peter",
//     "Enroll John",
//     "Learn Stefan Spell",
//     "Learn Peter Dispel",
//     "End"])
solve(["End"]);
