function solve(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    if (tokens[0] === "add") {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);
      numbers.splice(index, 0, element);
    } else if (tokens[0] === "addMany") {
      let index = Number(tokens[1]);
      tokens.splice(0, 2);
      let numberToAdd = tokens.map(Number);
      numbers.splice(index, 0, ...numberToAdd);
      console.log(numbers);
    } else if (tokens[0] === "contains") {
      let element = Number(tokens[1]);
      let result = numbers.indexOf(Number(element));
      console.log(result);
    } else if (tokens[0] === "remove") {
      let index = Number(tokens[1]);
      numbers.splice(index, 1);
    } else if (tokens[0] === "shift") {
      let positions = Number(tokens[1]);

      for (let i = 0; i < positions; i++) {
        let firtsNumber = numbers.shift();
        numbers.push(firtsNumber);
      }
    } else if (tokens[0] === "sumPairs") {
      let resultArr = [];
      if (numbers.length % 2 !== 0) {
        numbers.push(0);
      }
      for (let i = 0; i < numbers.length - 1; i += 2) {
        let sum = numbers[i] + numbers[i + 1];
        resultArr.push(sum);
      }
      numbers = resultArr;
    } else if (tokens[0] === "print") {
      console.log(`[ ${numbers.join(", ")} ]`);
      return;
    }
  }
}
solve(
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
  );
