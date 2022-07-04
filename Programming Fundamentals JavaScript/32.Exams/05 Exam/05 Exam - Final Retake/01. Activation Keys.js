function solve(input) {
  let activationKey = input.shift();
  let rawCode = activationKey.slice(0);
  while (input[0] !== "Generate") {
    let [command, first, second, third] = input.shift().split(">>>");
    if (command === "Contains") {
      if (activationKey.includes(first)) {
        console.log(`${rawCode} contains ${first}`);
      } else {
        console.log("Substring not found!");
      }
    } else if (command === "Flip") {
      let newCommand = first;
      second = Number(second);
      third = Number(third);
      let left = activationKey.substring(0, second);
      let word = activationKey.substring(second, third);
      let right = activationKey.substring(third);
      if (newCommand === "Upper") {
        word = word.toUpperCase();
        activationKey = left + word + right;
      } else {
        word = word.toLowerCase();
        activationKey = left + word + right;
      }
      console.log(activationKey);
    } else if (command === "Slice") {
      first = Number(first);
      second = Number(second);
      let left = activationKey.substring(0, first);
      let right = activationKey.substring(second);
      activationKey = left + right;
      console.log(activationKey);
    }
  }
  console.log(`Your activation key is: ${activationKey}`);
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
