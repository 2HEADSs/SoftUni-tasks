function solve(input) {
  input
    .map((line) => {
      let [name, level, items] = line.split(" / ");
      items = items
        .split(", ")
        .sort((a, b) => a.localeCompare(b))
        .join(", ");
      return {
        name,
        level: +level,
        items,
      };
    })
    .sort((a, b) => a.level - b.level)
    .forEach((obj) => {
      console.log(`Hero: ${obj.name}`);
      console.log(`level => ${obj.level}`);
      console.log(`items => ${obj.items}`);
    });
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
