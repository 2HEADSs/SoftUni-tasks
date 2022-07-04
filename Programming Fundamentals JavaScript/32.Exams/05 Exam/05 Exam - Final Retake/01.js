function solve(input) {
    let key = input.shift();
    while (input[0] !== "Generate") {
      let tokens = input.shift().split(">>>");
      let command = tokens[0];
      if (command === "Slice") {
        let startIndex = Number(tokens[1]);
        let endIndex = Number(tokens[2]);
        let left = key.slice(0, startIndex);
        let right = key.slice(endIndex);
        key = left + right;
        console.log(key);
      } else if (command === "Flip") {
        let action = tokens[1];
        let startIndex = Number(tokens[2]);
        let endIndex = Number(tokens[3]);
        let left = key.slice(0, startIndex);
        let right = key.slice(endIndex);
        let flipped = key.slice(startIndex, endIndex);
        if (action === "Lower") {
          flipped = flipped.toLowerCase();
        } else if (action === "Upper") {
          flipped = flipped.toUpperCase();
        }
        key = left + flipped + right;
        console.log(key);
      } else if (command === "Contains") {
        let substring = tokens[1];
        if (key.includes(substring)) {
          console.log(`${key} contains ${substring}`);
        } else {
          console.log("Substring not found!");
        }
      }
    }
    console.log(`Your activation key is: ${key}`);
  }
  solve([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate",
  ]);