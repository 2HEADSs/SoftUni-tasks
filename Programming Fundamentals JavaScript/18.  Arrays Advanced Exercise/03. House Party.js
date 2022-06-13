function houseParty(input) {
  let arr = input.slice(0);
  let checkedList = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].split(" ");
    let name = current[0];
    let command = current[2];
    if (command !== "not") {
      let ckecking = check(name);
    } else {
      let deleteGuest = deleting(name);
    }
  }
  function check(name) {
    if (checkedList.includes(name)) {
      console.log(`${name} is already in the list!`);
    } else {
      checkedList.push(name);
    }
  }
  function deleting(name) {
    if (checkedList.includes(name)) {
      let index = checkedList.indexOf(name);
      checkedList.splice(index, 1);
    } else {
      console.log(`${name} is not in the list!`);
    }
  }
  console.log(checkedList.join('\n'));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
