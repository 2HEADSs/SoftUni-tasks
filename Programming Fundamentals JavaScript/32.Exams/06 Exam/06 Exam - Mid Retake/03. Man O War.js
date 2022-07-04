function manOnWar(input) {
  let piratShip = input.shift().split(">");
  piratShip = piratShip.map(Number);
  let warShip = input.shift().split(">");
  warShip = warShip.map(Number);
  let max = Number(input.shift());
  let minHealth = max * 0.2;

  let arr = input.slice(0);
  let length = arr.length;
  let isOver = false;

  for (let i = 0; i < length; i++) {
    let current = arr[i];
    if (current === "Retire") {
      break;
    }
    current = current.split(" ");
    let command = current[0];
    let firstIndex = +current[1];
    let secondIndex = +current[2];
    let thirdIndex = +current[3];

    if (command === "Fire") {
      if (firstIndex in warShip) {
        warShip[firstIndex] -= secondIndex;
        if (warShip[firstIndex] <= 0) {
          console.log(`You won! The enemy ship has sunken.`);
          isOver = true;
          break;
        }
      }
    } else if (command === "Defend") {
      if (firstIndex in piratShip && secondIndex in piratShip) {
        if (firstIndex === 0) {
          secondIndex++;
        }
        let attackedSection = piratShip.splice(firstIndex, secondIndex);
        for (let j = 0; j < attackedSection.length; j++) {
          let section = attackedSection[j] - thirdIndex;
          if (section <= 0) {
            console.log(`You lost! The pirate ship has sunken.`);
            isOver = true;
            break;
          } else {
            attackedSection[j] = section;
            piratShip.splice(firstIndex, 0, section);
            firstIndex++;
          }
        }
      }
    } else if (command === "Repair") {
      if (firstIndex in piratShip) {
        piratShip[firstIndex] += secondIndex;
        if (piratShip > max) {
          piratShip[firstIndex] = max;
        }
      }
    } else if (command === "Status") {
      let count = 0;
      for (let k = 0; k < piratShip.length; k++) {
        let sectionForRepair = piratShip[k];
        if (sectionForRepair < minHealth) {
          count++;
        }
      }
      console.log(`${count} sections need repair.`);
    }
  }
  if (!isOver) {
    let reducerPirat = (a, b) => a + b;
    let sumPirat = piratShip.reduce(reducerPirat);
    console.log(`Pirate ship status: ${sumPirat}`);

    let reducerWar = (a, b) => a + b;
    let sumWar = warShip.reduce(reducerWar);
    console.log(`Warship status: ${sumWar}`);
  }
}
manOnWar([
  "12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire",
]);
manOnWar([
  "2>3>4>5>6",
  "2>3>4>5>6>10>11",
  "15",
  "Fire 3 1",
  "Fire 2 1",
  "Fire 1 1",
  "Defend -1 3 10",
  "Defend 1 3 1",
  "Retire",
]);
