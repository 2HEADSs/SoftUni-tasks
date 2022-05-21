function solve(input) {
  let x = Number(input[0]);
  let y = Number(input[1]);

  for (let f = x; f > 0; f--) {
    let result = "";
    for (let r = 0; r < y; r++) {
      if (f === x) {
        result += `L${f}${r} `;
      } else if (f % 2 === 0) {
        result += `O${f}${r} `;
      } else {
        result += `A${f}${r} `;
      }
    }
    console.log(result);
  }
}
solve(["6", "4"]);
solve(["9", "5"]);
