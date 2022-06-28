function solve(input) {
  let message = input.shift();

  while (input[0] !== "Decode") {
    let [command, first, second] = input.shift().split("|");
    if (command === "Move") {
      first = Number(first);
      let right = message.substring(0, first);
      let left = message.substring(first);
      message = left + right;
    } else if (command === "Insert") {
      first = Number(first);
      let left = message.substring(0, first);
      let right = message.substring(first);
      message = left + second + right;
    } else if (command === "ChangeAll") {
      message = message.split(first).join(second);
    }
  }
  console.log(`The decrypted message is: ${message}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
