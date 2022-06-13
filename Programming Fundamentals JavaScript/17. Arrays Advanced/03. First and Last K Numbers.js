function kNum(arr) {
  let arrForManipulation = arr.slice(0);
  let sliceIndex = Number(arrForManipulation.shift());
  let long = arrForManipulation.length;
  let firtsOutput = arrForManipulation.slice(0, sliceIndex);
  let secondOutput = arrForManipulation.slice(long - sliceIndex, long);
  console.log(firtsOutput.join(" "));
  console.log(secondOutput.join(" "));
}
kNum([2, 7, 8, 9, 10, 58]);
kNum([3, 6, 7, 8, 9]);
