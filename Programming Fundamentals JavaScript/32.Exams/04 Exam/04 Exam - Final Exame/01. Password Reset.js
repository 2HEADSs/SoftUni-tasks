function solve(input) {
  let pass = input.shift();

  while (input[0] !== "Done") {
    let [command, first, second] = input.shift().split(" ");
    if (command == "TakeOdd") {
      let newPas = "";
      for (let i = 1; i < pass.length; i += 2) {
        newPas += pass[i];
      }
      pass = newPas;
      console.log(pass);
    } else if (command === "Cut") {
      let start = Number(first);
      let end = Number(second);
      let left = pass.slice(0, start);
      let right = pass.slice(start + end);
      pass = left + right;
      console.log(pass);
    } else if (command === "Substitute") {
      if (pass.includes(first)) {
        // let oldString = new RegExp(first, "g");
        // let newString = second;
        // pass = pass.replace(oldString, newString);
        pass = pass.split(first).join(second);
        console.log(pass);
      } else {
        console.log("Nothing to replace!");
      }
    }
  }
  console.log(`Your password is: ${pass}`);
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
