function solve(input) {
  let pattern = /^>>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d)$/;
  let furniture = [];
  let totalCost = 0;
  //parse input until line Purchase
  //for each line regex pattern

  while (input[0] !== "Purchase") {
    let line = input.shift();
    let match = pattern.exec(line);

    if (match !== null) {
      let { name, price, qty } = match.groups;
      price = Number(price);
      qty = Number(qty);
      totalCost += price * qty;
      furniture.push(name);
    }
    // - if match - store furniture and add cost to toal
  }
  //print result
  console.log("Bought furniture:");
  for (const item of furniture) {
    console.log(item);
  }
  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
solve([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
