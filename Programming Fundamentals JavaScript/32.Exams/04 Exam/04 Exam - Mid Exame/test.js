function solve(input) {
  let itemsArr = input
  let index = 1;
  let second = 3

  let sliced = itemsArr.splice(index,second);
  console.log(sliced);
  sliced.join(" ")
  input.splice(index,second, sliced)
  console.log(input);
}
solve(["a","b","c","d","e"
]);
