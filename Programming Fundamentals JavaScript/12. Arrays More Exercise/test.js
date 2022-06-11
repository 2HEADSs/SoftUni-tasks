function addAndRemove(arr) {
  let array = arr;
  let arrayLength = array.length;
  let newArray = [];
  let number = 0;
  let isEmpty = true;

  for (let i = 0; i < arrayLength; i++) {
    let command = array[i];
    number++;
    if (command === "add") {
      newArray.push(number);
    } else if (command === "remove") {
      newArray.pop();
    }
  }
  if (newArray.length < 1) {
    isEmpty = false;
  }
  if (!isEmpty) {
    console.log(newArray.join(" "));
  } else {
    console.log("Empty");
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
