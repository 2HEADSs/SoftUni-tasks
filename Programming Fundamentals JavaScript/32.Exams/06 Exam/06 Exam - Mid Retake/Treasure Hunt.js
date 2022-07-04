function treasureHunter(arr) {
  let outputArray = arr.shift().split("|");
  let steelElement = [];

  for (let i = 0; i < arr.length; i++) {
    if (outputArray.length < 1) {
      console.log(`Failed treasure hunt.`);
      return;
    }
    let command = arr[i].split(" ");
    if (command == "Yohoho!") {
      yohoho(outputArray);
      break;
    }
    if (command[0] == "Loot") {
      command.shift();
      loot(command);
    }
    if (command[0] == "Drop") {
      command.shift();
      drop(command);
    }
    if (command[0] == "Steal") {
      command.shift();
      steal(command);
    }
  }
  function loot(treasurs) {
    for (let i = 0; i < treasurs.length; i++) {
      let currentTreasure = treasurs[i];
      if (!outputArray.includes(currentTreasure)) {
        outputArray.unshift(currentTreasure);
      }
    }
  }
  function drop(itemNumber) {
    for (let i = 0; i < itemNumber.length; i++) {
      let currentNumberOfItem = Number(itemNumber[i]);
      if (
        currentNumberOfItem >= outputArray.length ||
        currentNumberOfItem < 0
      ) {
        break;
      } else {
        let splicedItem = outputArray[currentNumberOfItem];
        outputArray.splice(currentNumberOfItem, 1);
        outputArray.push(splicedItem);
      }
    }
  }
  function steal(countOfStealItem) {
    let count = Number(countOfStealItem);
    for (let i = count; i > 0; i--) {
      steelElement.unshift(outputArray.pop());
    }
    console.log(steelElement.join(", "));
  }
  function yohoho(array) {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      let treasur = array[j];
      sum += Number(treasur.length);
    }
    sum /= array.length;
    console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
  }
}
treasureHunter([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunter([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
