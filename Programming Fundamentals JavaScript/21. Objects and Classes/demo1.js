function solve(input) {
  for (let el of input) {
      let newEl = el.split("addMovie ")[1]
      console.log(newEl);
  }
}
solve(["addMovie Fast and Furious"]);
