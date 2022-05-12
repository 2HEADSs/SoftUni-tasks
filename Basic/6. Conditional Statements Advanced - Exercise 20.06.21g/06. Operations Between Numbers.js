function solve(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let operation = input[2];
  let sum = 0;
  let result = "";

  if (n2 === 0 && operation === "%") {
    console.log(`Cannot divide ${n1} by zero`);
  } else if (n2 === 0 && operation === "/") {
    console.log(`Cannot divide ${n1} by zero`);
  } else if (operation === "+" || operation === "-" || operation === "*") {
    if (operation === "+") {
      sum = n1 + n2;
      if (sum % 2 === 0) {
        console.log(`${n1} ${operation} ${n2} = ${sum} - even`);
      } else {
        console.log(`${n1} ${operation} ${n2} = ${sum} - odd`);
      }
    } else if (operation === "-") {
      sum = n1 - n2;
      if (sum % 2 === 0) {
        console.log(`${n1} ${operation} ${n2} = ${sum} - even`);
      } else {
        console.log(`${n1} ${operation} ${n2} = ${sum} - odd`);
      }
    } else if (operation === "*") {
      sum = n1 * n2;
      if (sum % 2 === 0) {
        console.log(`${n1} ${operation} ${n2} = ${sum} - even`);
      } else {
        console.log(`${n1} ${operation} ${n2} = ${sum} - odd`);
      }
    }
  } else if (operation === "/") {
    sum = n1 / n2;
    console.log(`${n1} / ${n2} = ${sum.toFixed(2)}`);
  } else if (operation === "%") {
    sum = n1 % n2;
    console.log(`${n1} % ${n2} = ${sum}`);
  }
}
solve(["10", "12", "+"]);
solve(["10", "1", "-"]);
solve(["7", "3", "*"]);
solve(["123", "12", "/"]);
solve(["10", "3", "%"]);
solve(["112", "0", "/"]);
solve(["10", "0", "%"]);
