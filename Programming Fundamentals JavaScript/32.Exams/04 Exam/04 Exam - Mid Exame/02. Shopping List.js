function solve(input) {
  let groceries = input.shift().split("!");

  let line = input.shift();
  while (line !== "Go Shopping!") {
    let [command, item, newItem] = line.split(" ");

    switch (command) {
      case "Urgent":
        urgent(groceries, item);
        break;
      case "Unnecessary":
        unnecessary(groceries, item);
        break;
      case "Correct":
        correct(groceries, item, newItem);
        break;
      case "Rearrange":
        rearange(groceries, item);
        break;
    }
    line = input.shift();
  }

  console.log(groceries.join(", "));
  function urgent(list, item) {
    //--Urgen -> add item to beginninf of the list
    if (list.includes(item) == false) {
      list.unshift(item);
    }
  }

  function unnecessary(list, item) {
    //-- Unnecessary -> remove item by name from list
    if (list.includes(item) == true) {
      let index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  function correct(list, item, newItem) {
    // -- Correct -> replace item by name in list
    if (list.includes(item) == true) {
      let index = list.indexOf(item);
      list[index] = newItem;
    }
  }

  function rearange(list, item) {
    // --Rearange -> move item by name to end of list
    if (list.includes(item) == true) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      list.push(item);
    }
  }
}
solve([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
solve([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes ",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
