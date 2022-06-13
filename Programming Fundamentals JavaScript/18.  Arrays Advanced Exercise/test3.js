function contain(arr) {
  let index = arr.indexOf("v");
  arr.splice(index, 2);
  console.log(arr);
}
contain(["a", "v", "w", "h", "t", "f"]);
