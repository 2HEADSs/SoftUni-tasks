function solve(input) {
  let firstString = input[0];
  let condition = input[1];
  let sum = 0;

  for (let ch of firstString) {
    let code = ch.charCodeAt(0);
    if (condition === "LOWERCASE") {
      if (code >= 97 && code <= 122) {
        sum += code;
      }
    } else if (condition === "UPPERCASE") {
      if (code >= 65 && code <= 90) {
        sum += code;
      }
    }
  }
  console.log(`The total sum is: ${sum}`);
}
solve(["HelloFromMyAwesomePROGRAM", "LOWERCASE"]);
solve(["AC/DC", "UPPERCASE"]);
