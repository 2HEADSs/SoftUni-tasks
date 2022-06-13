function manipulationsOfArray(arr) {
  let arrForManipulation = arr.shift().split(" ").map(Number);
  let arrL = arr.length;

  for (let i = 0; i < arrL; i++) {
    let element = arr[i].split(" ");
    let command = element[0];
    let first = Number(element[1]);
    let second = Number(element[2]);

    switch (command) {
      case "Add":
        add(first);
        break;
      case "Remove":
        remove(first);
        break;
      case "RemoveAt":
        removeAt(first);
        break;
      case "Insert":
        insert(first, second);
        break;
    }
  }

  function add(num) {
    arrForManipulation.push(num);
  }
  function remove(num) {
    let index = arrForManipulation.indexOf(num);
    arrForManipulation.splice(index, 1);
  }
  function removeAt(index) {
    arrForManipulation.splice(index, 1);
  }
  function insert(num, index) {
    arrForManipulation.splice(index, 0, num);
  }
  console.log(arrForManipulation.join(' '));
}
manipulationsOfArray([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);
