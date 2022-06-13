function negativeOrPositiveNum(arr) {
  let newArr = [];
  for (let el of arr) {
    let current = Number(el);
    if (current < 0) {
      newArr.unshift(current);
    } else {
      newArr.push(current);
    }
  }
  for (let num of newArr) {
    console.log(num);
  }
}

negativeOrPositiveNum(["7", "-2", "8", "9"]);
negativeOrPositiveNum(["3", "-2", "0", "-1"]);
