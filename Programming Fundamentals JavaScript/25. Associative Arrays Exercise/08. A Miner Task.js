function solve(input) {
  let production = new Map();
  let arrLength = input.length;

  for (let i = 0; i < arrLength; i += 2) {
    let currentElemet = input[i];
    let quantity = Number(input[i + 1]);

    if (!production.has(currentElemet)) {
      production.set(currentElemet, 0);
    }
    let updateQuantity = production.get(currentElemet);
    updateQuantity += quantity;
    production.set(currentElemet, updateQuantity);
  }
  for(let item of production){
      console.log(`${item[0]} -> ${item[1]}`);
  }
}
solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
