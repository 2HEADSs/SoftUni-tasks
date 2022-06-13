function arrayManipulator(arr, arrayOfCommands) {
  for (let el of arrayOfCommands) {
    let current = el.split(" ");
    let nums = current.slice(1).map(Number);
    let firtsEl = nums[0];
    let secondEl = nums[1];

    switch (current[0]) {
      case "add":
        let adding = add(firtsEl, secondEl);
        break;
      case "addMany":
        let addManys = addMany(nums);
        break;
      case "contains":
        let contains = contain(firtsEl);
        break;
      case "remove":
        let removes = remove(firtsEl);
        break;
      case "shift":
        let shifts = shift(firtsEl);
        break;
      case "sumPairs":
        let sumPairss = sumPairs();
        break;
      case "print":
        let prints = print();
        break;
    }
  }

  function add(index, num) {
    arr.splice(index, 0, num);
  }
  function addMany(numsForAdd) {
    let ind = numsForAdd.shift();
    for (let i = 0; i < numsForAdd.length; i++) {
      let current = numsForAdd[i];
      arr.splice(ind, 0, current);
      ind++;
    }
  }
  function contain(number) {
    if (arr.includes(number)) {
      let ind = arr.indexOf(number);
      console.log(ind);
    } else {
      console.log(-1);
    }
  }
  function remove(index) {
    arr.splice(index, 1);
  }
  function shift(position) {
    for (let i = 0; i < position; i++) {
      let lastToBecomeFirst = arr.shift();
      arr.push(lastToBecomeFirst);
    }
  }
  function sumPairs() {
    let tempArr = [];
    for (let i = 0; i < arr.length; i += 2) {
      if (arr.length % 2 !== 0) {
        arr.push(0);
      }
      let sum = arr[i] + arr[i + 1];
      tempArr.push(sum);
    }
    arr = tempArr;
  }
  function print() {
    console.log(`[ ${arr.join(", ")} ]`);
    return;
  }
}
arrayManipulator(
  [1, 2, 4, 5, 6, 7],
  ["add 1 8", "contains 1", "contains 3", "print"]
);
arrayManipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
