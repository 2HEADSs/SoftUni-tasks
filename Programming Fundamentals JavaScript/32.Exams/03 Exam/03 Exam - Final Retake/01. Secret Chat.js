function solve(input) {
  let message = input.shift();

  while (input[0] !== "Reveal") {
    let [command, first, second] = input.shift().split(":|:");
    if (command === "InsertSpace") {
      let index = Number(first);
      let left = message.substring(0, index);
      let rigth = message.substring(index);
      message = left + " " + rigth;
      console.log(message);
    } else if (command === "Reverse") {
      if (message.includes(first)) {
        let index = message.indexOf(first);
        let left = message.substring(0, index);
        let right = message.substring(index + first.length);
        message = message.split(first).join("");
        first = first.split("").reverse().join("");
        message = left + right + first;
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command === "ChangeAll") {
      message = message.split(first).join(second);
      console.log(message);
    }
  }
  console.log(`You have a new text message: ${message}`);
}
solve([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
solve([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
