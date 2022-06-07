function reverseArr(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
      let buffer = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = buffer;
  }
  console.log(arr.join(' '));
}
reverseArr(["a", "b", "c", "d", "e"]);
reverseArr(["abc", "def", "hig", "klm", "nop"]);
reverseArr(["33", "123", "0", "dd"]);
