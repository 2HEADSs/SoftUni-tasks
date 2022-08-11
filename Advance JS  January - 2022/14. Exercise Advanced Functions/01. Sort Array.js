//short descision-100/100
function solve(arr, type) {
  if (type === 'asc') {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort((a, b) => b - a);
  }
}
// callback descision - 100/100
function solve(arr, type) {
  if (type === 'asc') {
    return asc();
  } else {
    return desc();
  }
  function asc() {
    return arr.sort((a, b) => a - b);
  }
  function desc() {
    return arr.sort((a, b) => b - a);
  }
}
console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'));
