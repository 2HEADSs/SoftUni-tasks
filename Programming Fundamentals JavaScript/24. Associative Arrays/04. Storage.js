function solve(input) {
  let storage = new Map();
  for (let entry of input) {
    entry = entry.split(" ");
    let name = entry[0];
    let quantity = Number(entry[1]);

    if (storage.has(name)) {
      let newQuantity = storage.get(name) + quantity;
      storage.set(name, newQuantity);
    } else {
      storage.set(name, quantity);
    }
  }
  for (let storageEntries of storage) {
      console.log(`${storageEntries[0]} -> ${storageEntries[1]}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
