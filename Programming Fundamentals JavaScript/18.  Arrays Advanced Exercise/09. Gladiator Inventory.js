function gladiatorInventory(input) {
  let arr = input.shift().split(" ");

  for (let i = 0; i < input.length; i++) {
    let current = input[i].split(" ");
    let command = current[0];
    let type = current[1];
    let index = 0;
    if (command === "Buy") {
      index = arr.indexOf(type);
      if (index === -1) {
        arr.push(type);
      }
    } else if (command === "Trash") {
      index = arr.indexOf(type);
      if (index !== -1) {
        arr.splice(index, 1);
      }
    } else if (command === "Repair") {
      index = arr.indexOf(type);
      if (index !== -1) {
        let el = arr.slice(index, index + 1);
        arr.splice(index, 1);
        arr.push(el[0]);
      }
    } else if (command === "Upgrade") {
      let upgr = type.split("-");
      let weapon = upgr[0];
      let typeOfUpgrade = upgr[1];
      index = arr.indexOf(weapon);
      if (index !== -1) {
        let element = `${weapon}:${typeOfUpgrade}`;
        arr.splice(index + 1, 0, element);
      }
    }
  }
  console.log(arr.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
