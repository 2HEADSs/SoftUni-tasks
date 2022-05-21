function solve(input) {
  let hash = "abcdefghijklmnopqrstuvwxyz";
  let hash2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = 0;
  let c = 0;
  let o = 0;
  let n = 0;

  let letters = "";
  let lett = "";
  while (input[index - 1] != "End") {
    if (input[index] == "c" && c < 1) {
      c++;
      index++;
      continue;
    }

    if (input[index] == "o" && o < 1) {
      o++;
      index++;
      continue;
    }

    if (input[index] == "n" && n < 1) {
      n++;
      index++;
      continue;
    }

    if (n == 1 && o == 1 && c == 1) {
      lett += letters + " ";
      c = 0;
      o = 0;
      n = 0;
      letters = "";
      continue;
    }

    for (let i = 0; i < hash.length; i++) {
      if (hash[i] == input[index]) {
        letters += hash[i];
      }
    }

    for (let i = 0; i < hash2.length; i++) {
      if (hash2[i] == input[index]) {
        letters += hash2[i];
      }
    }
    index++;
  }
  console.log(lett);
}

// solve([
//   "H",
//   "n",
//   "e",
//   "l",
//   "l",
//   "o",
//   "o",
//   "c",
//   "t",
//   "c",
//   "h",
//   "o",
//   "e",
//   "r",
//   "e",
//   "n",
//   "e",
//   "End",
// ]);

solve([
  "%",
  "!",
  "c",
  "^",
  "B",
  "`",
  "o",
  "%",
  "o",
  "o",
  "M",
  ")",
  "{",
  "n",
  "/",
  "A",
  "D",
  "End",
]);

// solve([
//   "o",
//   "S",
//   "o",
//   "l",
//   "^",
//   "v",
//   "e",
//   "c",
//   "n",
//   "&",
//   "m",
//   "e",
//   "c",
//   "o",
//   "n",
//   "End",
// ]);
