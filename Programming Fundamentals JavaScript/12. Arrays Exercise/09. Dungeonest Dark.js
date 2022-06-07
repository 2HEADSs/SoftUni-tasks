function muOnline(arr) {
  let array = arr[0].split("|");
  let coins = 0;
  let health = 100;
  let rooms = 0;
  let isAlive = true;
  for (let i = 0; i < array.length; i++) {
    rooms++;
    let element = array[i].split(" ");
    let type = element[0];
    let points = Number(element[1]);

    if (type == "potion") {
      if (health + points > 100) {
        let healed = 100 - health;
        console.log(`You healed for ${healed} hp.`);
        console.log(`Current health: 100 hp.`);
        health = 100;
      } else {
        console.log(`You healed for ${points} hp.`);
        health += points;
        console.log(`Current health: ${health} hp.`);
      }
    } else if (type == "chest") {
      console.log(`You found ${points} coins.`);
      coins += points;
    } else {
      if (health - points > 0) {
        console.log(`You slayed ${type}.`);
        health -= points;
      } else {
        isAlive = false;
        console.log(`You died! Killed by ${type}.`);
        console.log(`Best room: ${rooms}`);
        break;
      }
    }
  }
  if (isAlive) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
// dundungeonestDark([
//   "rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000",
// ]);
muOnline(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
