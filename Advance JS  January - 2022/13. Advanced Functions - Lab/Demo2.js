// function solve() {
//   let a = 1;

//   return function print() {
//     return function print2() {
//       console.log(a);
//     };
//   };
// }
// let func = solve()();
// func();
// // solve();
// // solve()();
// solve()()()

function solve(input, input2) {
  input = input.substring(0, input.length - 2);
  input2 = input2.substring(2);
  console.log(input);
  console.log(input2);
}
solve('Pavel', 'Pavel');
