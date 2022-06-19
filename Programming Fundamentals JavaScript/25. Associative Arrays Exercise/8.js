function solve(input) {
  let extraction = {};
  let inputLength = input.length;
  for (let i = 0; i < inputLength; i += 2) {
    let currentElemet = input[i];
    let extract = Number(input[i + 1]);

    if (!extraction.hasOwnProperty(currentElemet)) {
      extraction[currentElemet] = extract;
    } else {
        extraction[currentElemet] += extract
    }
  }
  for(let keys in extraction){
      console.log(`${keys} -> ${extraction[keys]}`);
  }
}
solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
